import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";
import VideoSearch from "@/components/VideoSearch";
import { prefersReducedMotion, tokenMs } from "@/lib/motion";

interface Props {
  active?: "discover" | "tools" | "studios" | "about" | "submit";
}

export default function PageHeader({ active }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClosing, setMobileClosing] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  const closeMobileMenu = useCallback(() => {
    if (!mobileOpen) return;
    setMobileOpen(false);
    if (prefersReducedMotion()) {
      setMobileClosing(false);
      return;
    }
    setMobileClosing(true);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setMobileClosing(false);
      closeTimerRef.current = null;
    }, tokenMs("--dropdown-close-dur", 150));
  }, [mobileOpen]);

  const toggleMobileMenu = useCallback(() => {
    if (mobileOpen) {
      closeMobileMenu();
      return;
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMobileClosing(false);
    setMobileOpen(true);
  }, [closeMobileMenu, mobileOpen]);

  useEffect(() => {
    setReady(true);
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileMenu();
      }
    };
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node | null;
      const nav = document.querySelector(".site-nav");
      if (target && nav?.contains(target)) return;
      closeMobileMenu();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [closeMobileMenu, mobileOpen]);

  return (
    <header className="site-header" data-header-ready={ready}>
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="nav-left">
          <a className="wordmark" href="/" aria-label="whatships.com home">
            whatships.com
          </a>
          <div className="desktop-nav">
            <a
              className={active === "discover" ? "is-active" : ""}
              href="/"
              aria-current={active === "discover" ? "page" : undefined}
            >
              Discover
            </a>
            <a
              className={active === "tools" ? "is-active" : ""}
              href="/tools/"
              aria-current={active === "tools" ? "page" : undefined}
            >
              Tools
            </a>
            <a
              className={active === "studios" ? "is-active" : ""}
              href="/studios/"
              aria-current={active === "studios" ? "page" : undefined}
            >
              Studios
            </a>
            <a
              className={active === "about" ? "is-active" : ""}
              href="/about/"
              aria-current={active === "about" ? "page" : undefined}
            >
              About
            </a>
          </div>
        </div>
        <VideoSearch onActivate={closeMobileMenu} />
        <div className="nav-right">
          <div className="nav-actions">
            <ThemeToggle />
            <a
              className={`nav-submit${active === "submit" ? " is-current" : ""}`}
              href="/submit/"
              aria-current={active === "submit" ? "page" : undefined}
            >
              Submit
            </a>
            <button
              className="mobile-menu-button"
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={toggleMobileMenu}
            >
              <span
                className="t-icon-swap"
                data-state={mobileOpen ? "b" : "a"}
                aria-hidden="true"
              >
                <span className="t-icon" data-icon="a">
                  <Menu size={17} />
                </span>
                <span className="t-icon" data-icon="b">
                  <X size={17} />
                </span>
              </span>
            </button>
          </div>
          <nav
            className={`mobile-nav t-dropdown${mobileOpen ? " is-open" : ""}${mobileClosing ? " is-closing" : ""}`}
            data-origin="top-right"
            aria-label="Mobile navigation"
            aria-hidden={!mobileOpen}
            inert={!mobileOpen || undefined}
          >
            <a
              className={active === "discover" ? "is-active" : ""}
              href="/"
              aria-current={active === "discover" ? "page" : undefined}
            >
              Discover
            </a>
            <a
              className={active === "tools" ? "is-active" : ""}
              href="/tools/"
              aria-current={active === "tools" ? "page" : undefined}
            >
              Tools
            </a>
            <a
              className={active === "studios" ? "is-active" : ""}
              href="/studios/"
              aria-current={active === "studios" ? "page" : undefined}
            >
              Studios
            </a>
            <a
              className={active === "about" ? "is-active" : ""}
              href="/about/"
              aria-current={active === "about" ? "page" : undefined}
            >
              About
            </a>
            <a
              className={active === "submit" ? "is-active" : ""}
              href="/submit/"
              aria-current={active === "submit" ? "page" : undefined}
            >
              Submit
            </a>
          </nav>
        </div>
      </nav>
    </header>
  );
}
