export function tokenMs(name: string, fallback: number): number {
  if (typeof document === "undefined") return fallback;
  const value = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(name),
  );
  return Number.isFinite(value) ? value : fallback;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function swapText(el: HTMLElement, next: string) {
  if (el.textContent === next) return;
  if (!el.textContent || prefersReducedMotion()) {
    el.textContent = next;
    return;
  }
  const dur = tokenMs("--text-swap-dur", 150);
  el.classList.add("is-exit");
  window.setTimeout(() => {
    el.textContent = next;
    el.classList.remove("is-exit");
    el.classList.add("is-enter-start");
    void el.offsetHeight;
    el.classList.remove("is-enter-start");
  }, dur);
}

export function setDigits(group: HTMLElement, str: string) {
  group.classList.remove("is-animating");
  group.replaceChildren();
  const chars = [...str];
  chars.forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "t-digit";
    span.textContent = ch;
    if (i === chars.length - 2) span.dataset.stagger = "1";
    else if (i === chars.length - 1) span.dataset.stagger = "2";
    group.appendChild(span);
  });
  if (prefersReducedMotion()) return;
  void group.offsetHeight;
  group.classList.add("is-animating");
}

export function shakeInput(input: HTMLElement) {
  if (prefersReducedMotion()) return;
  input.classList.remove("is-shaking");
  void input.offsetWidth;
  input.classList.add("is-shaking");
  const shakeMs =
    tokenMs("--shake-dur-a", 80) * 2 + tokenMs("--shake-dur-b", 60) * 2;
  window.setTimeout(() => input.classList.remove("is-shaking"), shakeMs + 20);
}

export function positionTabPill(bar: HTMLElement, animate: boolean) {
  const pill = bar.querySelector<HTMLElement>(".t-tabs-pill");
  const tabs = [...bar.querySelectorAll<HTMLElement>(".t-tab")];
  const active =
    tabs.find((tab) => tab.getAttribute("aria-selected") === "true") ?? tabs[0];
  if (!pill || !active) return;
  if (!animate || prefersReducedMotion()) {
    const prev = pill.style.transition;
    pill.style.transition = "none";
    pill.style.transform = `translateX(${active.offsetLeft}px)`;
    pill.style.width = `${active.offsetWidth}px`;
    void pill.offsetWidth;
    pill.style.transition = prev;
    return;
  }
  pill.style.transform = `translateX(${active.offsetLeft}px)`;
  pill.style.width = `${active.offsetWidth}px`;
}
