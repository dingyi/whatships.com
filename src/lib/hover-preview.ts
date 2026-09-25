/**
 * Hover-to-preview for video cards.
 *
 * Cards mark their media element with `data-preview-src="<playbackUrl>"`;
 * on pointer hover (desktop fine pointers only, reduced-motion respected)
 * this module lazily appends a muted, looping, controls-less <video> and
 * plays it over the poster — the same pattern launchrcatalog.com uses.
 * Clicking still opens the player (modal on the homepage, detail page
 * elsewhere); chips (views / duration) stay stacked above the preview.
 *
 * Behavior contract:
 *  - One live preview stream at a time: entering a new card tears the
 *    previous one down (src removed so the socket is freed).
 *  - Leaving a card pauses and fades the video out but keeps the element
 *    and src, so re-hovering resumes instantly; playback restarts at 0.
 *  - A preview that errors once (dead URL, network) is flagged on the card
 *    and never retried, so the poster stays put.
 *
 * Initialized once from BaseLayout; document-level delegation means it
 * works on the static Astro grids and on React island cards alike, before
 * or after hydration, across pagination re-renders.
 */

const MEDIA_SELECTOR = ".video-card__media[data-preview-src]";

interface ActivePreview {
  media: HTMLElement;
  video: HTMLVideoElement;
}

let active: ActivePreview | null = null;
let started = false;

function supported(): boolean {
  if (document.documentElement.dataset.hoverPreview !== undefined) {
    return document.documentElement.dataset.hoverPreview === "on";
  }
  const hoverable = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const on = hoverable.matches && !reducedMotion.matches;
  if (on) {
    // Lets CSS hide the play chip only where hover preview is live; touch
    // and reduced-motion users keep the tap/press affordance.
    document.documentElement.dataset.hoverPreview = "on";
  } else {
    document.documentElement.dataset.hoverPreview = "off";
  }
  return on;
}

function fadeOut(video: HTMLVideoElement, media: HTMLElement) {
  video.pause();
  video.classList.remove("is-previewing");
  media.classList.remove("is-previewing");
}

function release(preview: ActivePreview) {
  fadeOut(preview.video, preview.media);
  preview.video.removeAttribute("src");
  preview.video.load();
  preview.video.remove();
}

function previewFor(media: HTMLElement): HTMLVideoElement {
  const existing = media.querySelector<HTMLVideoElement>("video.video-card__preview");
  if (existing) return existing;
  const video = document.createElement("video");
  video.className = "video-card__preview";
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "none";
  video.setAttribute("aria-hidden", "true");
  video.addEventListener("error", () => {
    // Dead URL or transient network failure: give up for this card so the
    // poster keeps doing its job instead of flashing on every hover.
    media.dataset.previewFailed = "1";
    if (active?.media === media) {
      release(active);
      active = null;
    }
  });
  media.appendChild(video);
  return video;
}

function activate(media: HTMLElement) {
  if (active && active.media !== media) {
    release(active);
    active = null;
  }

  if (active) {
    if (active.video.paused) {
      active.video.currentTime = 0;
      void active.video
        .play()
        .then(() => {
          active?.video.classList.add("is-previewing");
          active?.media.classList.add("is-previewing");
        })
        .catch(() => fadeOut(active!.video, media));
    }
    return;
  }

  const video = previewFor(media);
  if (!video.getAttribute("src")) {
    video.src = media.dataset.previewSrc ?? "";
  }
  active = { media, video };
  void video.play().catch(() => {
    if (active?.media === media) fadeOut(video, media);
  });
  video.classList.add("is-previewing");
  media.classList.add("is-previewing");
}

function deactivate(media: HTMLElement) {
  if (!active || active.media !== media) return;
  fadeOut(active.video, media);
}

export function initHoverPreview() {
  if (started) return;
  started = true;

  document.addEventListener("pointerover", (event) => {
    if (event.pointerType === "touch") return;
    if (!supported()) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const media = target.closest<HTMLElement>(MEDIA_SELECTOR);
    if (!media || media.dataset.previewFailed) return;
    activate(media);
  });

  document.addEventListener("pointerout", (event) => {
    if (!active) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const media = target.closest<HTMLElement>(MEDIA_SELECTOR);
    if (!media || media !== active.media) return;
    // Moving between children of the same card is not a leave.
    if (event.relatedTarget instanceof Element && media.contains(event.relatedTarget)) {
      return;
    }
    deactivate(media);
  });

  // Tab in the background should not keep pulling bytes through the proxy.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && active) deactivate(active.media);
  });
}
