/**
 * CRT shadow-mask renderer from cuvii LABS LOOK 001 (SHADOW_MASK).
 * Source: https://labs.cuvii.dev/volume/phosphor
 *
 * Adapted for a 1×N strip of marks: light-mode contrast uniform, no
 * default 800×320 stage, otherwise the shader and camera loop are intact.
 */

export type ShadowMaskDirection = { x: number; y: number };

export type ShadowMaskCells = {
  columns: number;
  rows: number;
};

export type ShadowMaskCellStyle = {
  contentWidth?: number;
  contentHeight?: number;
  glow?: string;
  core?: number;
  bloom?: number;
};

export type ShadowMaskSourceContext = {
  width: number;
  height: number;
  cssWidth: number;
  cells: ShadowMaskCells;
  cellStyles: readonly ShadowMaskCellStyle[];
};

export type ShadowMaskSourceFactory = (
  context: ShadowMaskSourceContext,
) => HTMLCanvasElement;

type RefValue<T> = { current: T };

export type RendererDisposer = (() => void) & {
  refresh: () => void;
  wake: () => void;
  setPaused: (paused: boolean) => void;
};

export type MountShadowMaskRendererOptions = {
  canvas: HTMLCanvasElement;
  cellCount: number;
  hoverRef: RefValue<number>;
  tearRef: RefValue<number[]>;
  enterDirRef: RefValue<ShadowMaskDirection[]>;
  glitchDirRef: RefValue<ShadowMaskDirection[]>;
  glitchTargetRef: RefValue<ShadowMaskDirection[]>;
  lightRef: RefValue<boolean>;
  cells: ShadowMaskCells;
  cellStyles: readonly ShadowMaskCellStyle[];
  sourceFactory: ShadowMaskSourceFactory;
};

const DEFAULT_CONTENT_SIZE = 32;
const CRT_FPS = 24;
const CRT_FRAME_MS = 1000 / CRT_FPS;
export const CELL_CAP = 10;

const VERT = `#version 300 es
void main() {
  vec2 p = vec2(gl_VertexID == 2 ? 3.0 : -1.0, gl_VertexID == 1 ? 3.0 : -1.0);
  gl_Position = vec4(p, 0.0, 1.0);
}
`;

const CRT_FRAG = `#version 300 es
precision highp float;
precision highp int;

uniform sampler2D uSource;
uniform vec2 uSourceSize;
uniform float uTime;
uniform float uMotion;
uniform float uFlicker;
uniform float uMaxLock;
uniform float uLight;
uniform int uWidth;
uniform int uHeight;
uniform int uCols;
uniform int uRows;
uniform float uHoverMix[10];
uniform float uTear[10];
uniform vec2 uEnterDir[10];
uniform vec2 uGlitchDir[10];
uniform vec2 uContentFrac[10];

out vec4 fragColor;

float hash(float n) {
  return fract(sin(n * 127.1) * 43758.5453);
}

vec3 fetchSrc(float sx, float sy) {
  int ix = int(trunc(sx));
  int iy = int(trunc(sy));
  int w = int(uSourceSize.x);
  int h = int(uSourceSize.y);
  ix = clamp(ix, 0, w - 1);
  iy = clamp(iy, 0, h - 1);
  // Uploaded with UNPACK_FLIP_Y: texel y=0 is the canvas bottom.
  return texelFetch(uSource, ivec2(ix, h - 1 - iy), 0).rgb;
}

void main() {
  int x = int(gl_FragCoord.x);
  int y = uHeight - 1 - int(gl_FragCoord.y);
  int width = uWidth;
  int height = uHeight;
  int cols = uCols;
  int rows = uRows;

  int col = int(clamp(floor((float(x) / max(float(width), 1.0)) * float(cols)), 0.0, float(cols - 1)));
  int row = int(clamp(floor((float(y) / max(float(height), 1.0)) * float(rows)), 0.0, float(rows - 1)));
  int cell = clamp(row * cols + col, 0, 9);
  float cellF = float(cell);

  float srcY = (float(y) / float(height)) * uSourceSize.y;
  float tearRoll = hash(floor(srcY * 0.55) + floor(uTime * 6.0) * 17.0 + cellF * 43.0);
  float wobble = uMotion * 0.45 * sin(uTime * 21.0 + float(y) * 0.35 + cellF * 0.7);
  float scanDim = mix(0.52, 0.64, uLight);
  float scan = (y - (y / 2) * 2) == 0 ? 1.0 : scanDim;

  int slotX = (width * col) / cols;
  int slotY = (height * row) / rows;
  int slotW = (width * (col + 1)) / cols - slotX;
  int slotH = (height * (row + 1)) / rows - slotY;
  float localX = slotW > 0 ? (float(x - slotX) / float(slotW)) : 0.0;
  float localY = slotH > 0 ? (float(y - slotY) / float(slotH)) : 0.0;

  float mixv = 0.0;
  vec2 dir = vec2(0.0);
  vec2 gdir = vec2(0.0);
  float lockTear = 0.0;
  if (cell == 0) { mixv = uHoverMix[0]; dir = uEnterDir[0]; gdir = uGlitchDir[0]; lockTear = uTear[0]; }
  else if (cell == 1) { mixv = uHoverMix[1]; dir = uEnterDir[1]; gdir = uGlitchDir[1]; lockTear = uTear[1]; }
  else if (cell == 2) { mixv = uHoverMix[2]; dir = uEnterDir[2]; gdir = uGlitchDir[2]; lockTear = uTear[2]; }
  else if (cell == 3) { mixv = uHoverMix[3]; dir = uEnterDir[3]; gdir = uGlitchDir[3]; lockTear = uTear[3]; }
  else if (cell == 4) { mixv = uHoverMix[4]; dir = uEnterDir[4]; gdir = uGlitchDir[4]; lockTear = uTear[4]; }
  else if (cell == 5) { mixv = uHoverMix[5]; dir = uEnterDir[5]; gdir = uGlitchDir[5]; lockTear = uTear[5]; }
  else if (cell == 6) { mixv = uHoverMix[6]; dir = uEnterDir[6]; gdir = uGlitchDir[6]; lockTear = uTear[6]; }
  else if (cell == 7) { mixv = uHoverMix[7]; dir = uEnterDir[7]; gdir = uGlitchDir[7]; lockTear = uTear[7]; }
  else if (cell == 8) { mixv = uHoverMix[8]; dir = uEnterDir[8]; gdir = uGlitchDir[8]; lockTear = uTear[8]; }
  else { mixv = uHoverMix[9]; dir = uEnterDir[9]; gdir = uGlitchDir[9]; lockTear = uTear[9]; }
  lockTear *= uMotion;
  vec2 content = uContentFrac[0];
  if (cell == 1) content = uContentFrac[1];
  else if (cell == 2) content = uContentFrac[2];
  else if (cell == 3) content = uContentFrac[3];
  else if (cell == 4) content = uContentFrac[4];
  else if (cell == 5) content = uContentFrac[5];
  else if (cell == 6) content = uContentFrac[6];
  else if (cell == 7) content = uContentFrac[7];
  else if (cell == 8) content = uContentFrac[8];
  else if (cell == 9) content = uContentFrac[9];
  float cx = 0.5 + (localX - 0.5) / max(content.x, 0.0001);
  float cy = 0.5 + (localY - 0.5) / max(content.y, 0.0001);
  float along = 0.0;
  if (dir.x > 0.0) along = cx;
  else if (dir.x < 0.0) along = 1.0 - cx;
  else if (dir.y > 0.0) along = cy;
  else if (dir.y < 0.0) along = 1.0 - cy;
  float lock = (dir.x != 0.0 || dir.y != 0.0)
    ? mixv * clamp((mixv - along) / 0.22 + 1.0, 0.0, 1.0)
    : mixv;

  float gx = gdir.x;
  float gy = gdir.y;
  bool hasAim = mixv > 0.05 && abs(gx) + abs(gy) > 0.05;
  bool axisX = abs(gx) >= abs(gy);
  float ca = (mix(2.4, 1.05, uLight) + 0.55 * sin(uTime * 3.8 + cellF * 0.31)) * (1.0 - lock * 0.78);
  float caX = ca * (hasAim ? gx : 1.0);
  float caY = ca * (hasAim ? gy : 0.0);
  float restTear =
    uMotion > 0.0 && lock < 0.4 && tearRoll > 0.965
      ? (tearRoll - 0.982) * 28.0
      : 0.0;
  float slice = sin(uTime * 40.0 + float(axisX ? y : x) * 0.22);
  float burst = lockTear * (1.0 - clamp(along, 0.0, 1.0) * 0.35) * 16.0 * slice;
  float srcX =
    (float(x) / float(width)) * uSourceSize.x + restTear + burst * gx + wobble * (1.0 - lock);
  float sampleY = srcY + burst * gy;

  vec3 chR = fetchSrc(srcX + caX, sampleY - ca * 0.15 + caY * 0.2);
  vec3 chG = fetchSrc(srcX, sampleY);
  vec3 chB = fetchSrc(srcX - caX, sampleY + ca * 0.12 - caY * 0.2);
  vec3 coverRgb = fetchSrc(srcX, sampleY);
  float cover = max(coverRgb.r, max(coverRgb.g, coverRgb.b));

  int triad = x - (x / 3) * 3;
  // Light paper uses a density slot-mask, not a candy RGB triad.
  float maskOn = mix(1.35, 1.16, uLight);
  float maskOff = mix(0.16, 0.48, uLight);
  float maskR = triad == 0 ? maskOn : maskOff;
  float maskG = triad == 1 ? maskOn : maskOff;
  float maskB = triad == 2 ? maskOn : maskOff;
  float grain =
    (hash(float(x) * 13.1 + float(y) * 7.7 + uTime * 80.0 + cellF * 97.0) - 0.5) * mix(22.0, 10.0, uLight) / 255.0 * (1.0 - lock * 0.7);
  float gain = 1.0 + lock * 0.34 - uMaxLock * (1.0 - lock) * 0.4;
  float line = scan + (1.0 - scan) * lock * 0.55;

  vec3 color = vec3(
    (chR.r * maskR * line + grain) * uFlicker * gain,
    (chG.g * maskG * line + grain) * uFlicker * gain,
    (chB.b * maskB * line + grain) * uFlicker * gain
  );
  float alpha = cover < 8.0 / 255.0 ? 0.0 : 1.0;

  // Light paper: drop brand fills, keep CRT as zinc-ink density.
  // Source luma through the slot mask → dark mark + a hair of chroma.
  float sR = max(chR.r, max(chR.g, chR.b));
  float sG = max(chG.r, max(chG.g, chG.b));
  float sB = max(chB.r, max(chB.g, chB.b));
  vec3 lightCrt = vec3(
    (sR * maskR * line + grain) * uFlicker * gain,
    (sG * maskG * line + grain) * uFlicker * gain,
    (sB * maskB * line + grain) * uFlicker * gain
  );
  float luma = dot(max(lightCrt, vec3(0.0)), vec3(0.2126, 0.7152, 0.0722));
  vec3 chroma = lightCrt - vec3(luma);
  vec3 ink = mix(vec3(0.20, 0.20, 0.22), vec3(0.09, 0.09, 0.11), lock);
  float lightAlpha = cover < 8.0 / 255.0 ? 0.0 : clamp(luma * 0.94 + 0.05, 0.0, 0.90);
  color = mix(color, ink + chroma * 0.05, uLight);
  alpha = mix(alpha, lightAlpha, uLight);

  fragColor = vec4(clamp(color, 0.0, 1.0), alpha);
}
`;

const BLOOM_FRAG = `#version 300 es
precision highp float;
precision highp int;

uniform sampler2D uCrt;
uniform float uBloom;
uniform int uWidth;
uniform int uHeight;

out vec4 fragColor;

vec4 fetchCrt(ivec2 p) {
  p.x = clamp(p.x, 0, uWidth - 1);
  p.y = clamp(p.y, 0, uHeight - 1);
  return texelFetch(uCrt, p, 0);
}

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  vec4 c = fetchCrt(p);
  vec3 bloom = vec3(0.0);
  float wsum = 0.0;
  for (int oy = -2; oy <= 2; oy++) {
    for (int ox = -2; ox <= 2; ox++) {
      float d2 = float(ox * ox + oy * oy);
      float w = exp(-d2 / (2.0 * 1.6 * 1.6));
      vec4 n = fetchCrt(p + ivec2(ox, oy));
      bloom += n.rgb * n.a * w;
      wsum += w;
    }
  }
  bloom /= max(wsum, 0.0001);
  fragColor = vec4(c.rgb + bloom * uBloom, c.a);
}
`;

function compile(
  gl: WebGL2RenderingContext,
  type: number,
  source: string,
): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("CRT shader allocate failed");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader) ?? "unknown";
    gl.deleteShader(shader);
    throw new Error(`CRT shader compile failed: ${log}`);
  }
  return shader;
}

function link(
  gl: WebGL2RenderingContext,
  vert: WebGLShader,
  frag: WebGLShader,
): WebGLProgram {
  const program = gl.createProgram();
  if (!program) throw new Error("CRT program allocate failed");
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program) ?? "unknown";
    gl.deleteProgram(program);
    throw new Error(`CRT program link failed: ${log}`);
  }
  return program;
}

function loc(gl: WebGL2RenderingContext, program: WebGLProgram, name: string) {
  return gl.getUniformLocation(program, name);
}

function locN(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  name: string,
  count: number,
) {
  return Array.from({ length: count }, (_, index) =>
    gl.getUniformLocation(program, `${name}[${index}]`),
  );
}

function createTexture(gl: WebGL2RenderingContext): WebGLTexture {
  const texture = gl.createTexture();
  if (!texture) throw new Error("CRT texture allocate failed");
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return texture;
}

function markTears(ref: { current: number[] }, markCount: number): number[] {
  if (!Array.isArray(ref.current) || ref.current.length !== markCount) {
    ref.current = Array.from({ length: markCount }, () => 0);
  }
  return ref.current;
}

function dirPair(
  refs: { current: Array<{ x: number; y: number } | undefined> },
  index: number,
): [number, number] {
  const dir = refs.current[index];
  return dir ? [dir.x, dir.y] : [0, 0];
}

function releaseContextAfterDetach(gl: WebGL2RenderingContext) {
  const release = () => {
    if ("isConnected" in gl.canvas && gl.canvas.isConnected) return;
    gl.getExtension("WEBGL_lose_context")?.loseContext();
  };
  if (document.visibilityState !== "visible") {
    window.setTimeout(release, 0);
    return;
  }
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(release);
  });
}

/** WebGL2 CRT camera. */
export function mountShadowMaskRenderer({
  canvas,
  cellCount,
  hoverRef,
  tearRef,
  enterDirRef,
  glitchDirRef,
  glitchTargetRef,
  lightRef,
  cells,
  cellStyles,
  sourceFactory,
}: MountShadowMaskRendererOptions): RendererDisposer {
  if (!sourceFactory) {
    throw new Error("CRT marks shader requires a sourceFactory");
  }
  const markCount = cellCount;
  if (markCount < 1 || markCount > CELL_CAP) {
    throw new Error(`CRT marks shader supports 1–${CELL_CAP} cells`);
  }

  const gl = canvas.getContext("webgl2", {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
  });
  if (!gl) {
    throw new Error("WebGL2 is required for CRT_MARKS");
  }

  const vert = compile(gl, gl.VERTEX_SHADER, VERT);
  const crtFrag = compile(gl, gl.FRAGMENT_SHADER, CRT_FRAG);
  const bloomFrag = compile(gl, gl.FRAGMENT_SHADER, BLOOM_FRAG);
  const crtProgram = link(gl, vert, crtFrag);
  const bloomProgram = link(gl, vert, bloomFrag);

  const vao = gl.createVertexArray();
  const fbo = gl.createFramebuffer();
  if (!vao || !fbo) {
    throw new Error("CRT framebuffer allocate failed");
  }
  gl.bindVertexArray(vao);

  const sourceTex = createTexture(gl);
  const crtTex = createTexture(gl);

  const cols = cells.columns;
  const rows = cells.rows;
  const hoverMix = Array.from({ length: markCount }, () => 0);
  const mixPad = new Float32Array(CELL_CAP);
  const tearPad = new Float32Array(CELL_CAP);
  const enterPad = new Float32Array(CELL_CAP * 2);
  const glitchPad = new Float32Array(CELL_CAP * 2);

  const crtU = {
    source: loc(gl, crtProgram, "uSource"),
    sourceSize: loc(gl, crtProgram, "uSourceSize"),
    time: loc(gl, crtProgram, "uTime"),
    motion: loc(gl, crtProgram, "uMotion"),
    flicker: loc(gl, crtProgram, "uFlicker"),
    maxLock: loc(gl, crtProgram, "uMaxLock"),
    light: loc(gl, crtProgram, "uLight"),
    width: loc(gl, crtProgram, "uWidth"),
    height: loc(gl, crtProgram, "uHeight"),
    cols: loc(gl, crtProgram, "uCols"),
    rows: loc(gl, crtProgram, "uRows"),
    hoverMix: locN(gl, crtProgram, "uHoverMix", CELL_CAP),
    tear: locN(gl, crtProgram, "uTear", CELL_CAP),
    enterDir: locN(gl, crtProgram, "uEnterDir", CELL_CAP),
    glitchDir: locN(gl, crtProgram, "uGlitchDir", CELL_CAP),
    contentFrac: locN(gl, crtProgram, "uContentFrac", CELL_CAP),
  };
  const bloomU = {
    crt: loc(gl, bloomProgram, "uCrt"),
    bloom: loc(gl, bloomProgram, "uBloom"),
    width: loc(gl, bloomProgram, "uWidth"),
    height: loc(gl, bloomProgram, "uHeight"),
  };

  let frame = 0;
  let running = true;
  let paused = false;
  let time = 0;
  let lastPaintAt = 0;
  let lastTimeAt = 0;
  let width = 0;
  let height = 0;
  let source: HTMLCanvasElement | null = null;

  const uploadSource = () => {
    if (!gl || !source) return;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sourceTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
  };

  const rebuildSource = () => {
    if (width < 1 || height < 1 || !sourceFactory) return;
    source = sourceFactory({
      width,
      height,
      cssWidth: Math.max(1, canvas.clientWidth || 1),
      cells,
      cellStyles,
    });
    uploadSource();
  };

  const resizeTargets = () => {
    if (!gl) return;
    gl.bindTexture(gl.TEXTURE_2D, crtTex);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      width,
      height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null,
    );
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      crtTex,
      0,
    );
    const fboStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (fboStatus !== gl.FRAMEBUFFER_COMPLETE) {
      throw new Error(`CRT framebuffer incomplete: ${fboStatus}`);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, width, height);
  };

  const resize = () => {
    const cssW = Math.max(1, canvas.clientWidth || 220);
    const cssH = Math.max(1, canvas.clientHeight || 40);
    const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    const nextWidth = Math.round(cssW * dpr);
    const nextHeight = Math.round(cssH * dpr);
    if (nextWidth === width && nextHeight === height) return;
    width = nextWidth;
    height = nextHeight;
    canvas.width = width;
    canvas.height = height;
    resizeTargets();
    rebuildSource();
  };

  const render = (now: number) => {
    if (!running) return;
    if (!paused) {
      frame = window.requestAnimationFrame(render);
    } else {
      frame = 0;
    }
    if (!source || paused) return;
    let catching = false;
    for (let i = 0; i < markCount; i += 1) {
      const target = hoverRef.current === i ? 1 : 0;
      if (Math.abs(target - (hoverMix[i] ?? 0)) > 0.002) catching = true;
    }
    if (now - lastPaintAt < CRT_FRAME_MS && !catching) {
      return;
    }
    const delta =
      lastTimeAt === 0 ? 1 / 60 : Math.min((now - lastTimeAt) / 1000, 0.05);
    lastTimeAt = now;
    lastPaintAt = now;
    const motion = 1;
    time += delta * motion;
    const frameScale = Math.max(0.25, Math.min(delta * 60, 3));
    const snap = 1 - Math.pow(1 - 0.18, frameScale);
    let maxLock = 0;

    for (let i = 0; i < markCount; i += 1) {
      const target = hoverRef.current === i ? 1 : 0;
      hoverMix[i] += (target - (hoverMix[i] ?? 0)) * snap;
      maxLock = Math.max(maxLock, hoverMix[i] ?? 0);
      const gdir = glitchDirRef.current[i];
      const gtarget = glitchTargetRef.current[i];
      if (gdir && gtarget) {
        const follow = 1 - Math.pow(1 - 0.22, frameScale);
        gdir.x += (gtarget.x - gdir.x) * follow;
        gdir.y += (gtarget.y - gdir.y) * follow;
      }
    }

    const tears = markTears(tearRef, markCount);
    const tearDecay = Math.pow(0.84, frameScale);
    for (let i = 0; i < markCount; i += 1) {
      tears[i] *= tearDecay;
    }
    const flicker =
      0.9 + 0.1 * Math.sin(time * 17.5) * motion * (1 - maxLock * 0.7);

    mixPad.fill(0);
    tearPad.fill(0);
    enterPad.fill(0);
    glitchPad.fill(0);
    for (let i = 0; i < markCount; i += 1) {
      mixPad[i] = hoverMix[i] ?? 0;
      tearPad[i] = tears[i] ?? 0;
      const enter = dirPair(enterDirRef, i);
      enterPad[i * 2] = enter[0];
      enterPad[i * 2 + 1] = enter[1];
      const glitch = dirPair(glitchDirRef, i);
      glitchPad[i * 2] = glitch[0];
      glitchPad[i * 2 + 1] = glitch[1];
    }

    gl.bindVertexArray(vao);
    gl.viewport(0, 0, width, height);

    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.useProgram(crtProgram);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sourceTex);
    gl.uniform1i(crtU.source, 0);
    gl.uniform2f(crtU.sourceSize, source.width, source.height);
    gl.uniform1f(crtU.time, time);
    gl.uniform1f(crtU.motion, motion);
    gl.uniform1f(crtU.flicker, flicker);
    gl.uniform1f(crtU.maxLock, maxLock);
    gl.uniform1f(crtU.light, lightRef.current ? 1 : 0);
    gl.uniform1i(crtU.width, width);
    gl.uniform1i(crtU.height, height);
    gl.uniform1i(crtU.cols, cols);
    gl.uniform1i(crtU.rows, rows);
    const cellCssW = Math.max(1, (canvas.clientWidth || 1) / cols);
    const cellCssH = Math.max(1, (canvas.clientHeight || 1) / rows);
    for (let i = 0; i < CELL_CAP; i += 1) {
      const cellStyle = cellStyles[i];
      const contentWidth = cellStyle?.contentWidth ?? DEFAULT_CONTENT_SIZE;
      const contentHeight = cellStyle?.contentHeight ?? DEFAULT_CONTENT_SIZE;
      gl.uniform2f(
        crtU.contentFrac[i],
        contentWidth / cellCssW,
        contentHeight / cellCssH,
      );
      gl.uniform1f(crtU.hoverMix[i], mixPad[i] ?? 0);
      gl.uniform1f(crtU.tear[i], tearPad[i] ?? 0);
      gl.uniform2f(
        crtU.enterDir[i],
        enterPad[i * 2] ?? 0,
        enterPad[i * 2 + 1] ?? 0,
      );
      gl.uniform2f(
        crtU.glitchDir[i],
        glitchPad[i * 2] ?? 0,
        glitchPad[i * 2 + 1] ?? 0,
      );
    }
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.useProgram(bloomProgram);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, crtTex);
    gl.uniform1i(bloomU.crt, 0);
    gl.uniform1f(
      bloomU.bloom,
      lightRef.current ? 0.03 + maxLock * 0.04 : 0.26 + maxLock * 0.14,
    );
    gl.uniform1i(bloomU.width, width);
    gl.uniform1i(bloomU.height, height);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!canvas.hasAttribute("data-render-ready")) {
      gl.finish();
      canvas.setAttribute("data-render-ready", "");
    }
  };

  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  window.addEventListener("resize", resize);

  rebuildSource();
  render(performance.now());

  const dispose = (() => {
    running = false;
    window.cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    window.removeEventListener("resize", resize);
    gl.deleteFramebuffer(fbo);
    gl.deleteTexture(sourceTex);
    gl.deleteTexture(crtTex);
    gl.deleteProgram(crtProgram);
    gl.deleteProgram(bloomProgram);
    gl.deleteShader(vert);
    gl.deleteShader(crtFrag);
    gl.deleteShader(bloomFrag);
    gl.deleteVertexArray(vao);
    releaseContextAfterDetach(gl);
  }) as RendererDisposer;
  dispose.refresh = () => {
    if (!running) return;
    rebuildSource();
    if (paused) render(performance.now());
  };
  dispose.wake = () => {
    if (!running || paused) return;
    if (frame === 0) frame = window.requestAnimationFrame(render);
  };
  dispose.setPaused = (next) => {
    if (paused === next) return;
    paused = next;
    if (paused) {
      window.cancelAnimationFrame(frame);
      frame = 0;
      return;
    }
    lastTimeAt = 0;
    if (running && frame === 0) frame = window.requestAnimationFrame(render);
  };
  return dispose;
}
