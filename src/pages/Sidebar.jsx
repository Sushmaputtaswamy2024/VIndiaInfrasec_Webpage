import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const startX = useRef(null);
  const location = useLocation();

  /* ================= CLOSE ON ROUTE CHANGE ================= */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ================= SCROLL LOCK (MOBILE SAFE) ================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  /* ================= SWIPE HANDLERS ================= */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (startX.current === null) return;
    const diff = e.touches[0].clientX - startX.current;

    if (!open && diff > 70) setOpen(true);       // swipe right → open
    if (open && diff < -70) setOpen(false);      // swipe left → close
  };

  const onTouchEnd = () => {
    startX.current = null;
  };

  return (
    <>
      {/* Hamburger (MUST be button for mobile) */}
      <button
        className="hamburger"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="sidebar-backdrop"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidemenu ${open ? "open" : ""}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/construction">Construction</NavLink>
        <NavLink to="/interior">Interior</NavLink>
        <NavLink to="/architecture">Architecture</NavLink>
      </aside>
    </>
  );
}
