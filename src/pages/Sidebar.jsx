import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(prev => !prev)}>
        ☰
      </div>

      {/* Backdrop (CLICK TO CLOSE) */}
      {open && (
        <div
          className="sidebar-backdrop"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidemenu ${open ? "open" : ""}`}>
        <Link to="/construction" onClick={() => setOpen(false)}>
          Construction
        </Link>

        <Link to="/interior" onClick={() => setOpen(false)}>
          Interior
        </Link>

        <Link to="/architecture" onClick={() => setOpen(false)}>
          Architecture
        </Link>
      </aside>
    </>
  );
}
