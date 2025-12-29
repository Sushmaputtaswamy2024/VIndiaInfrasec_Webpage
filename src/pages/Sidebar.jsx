import { Link } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Sidebar */}
      <aside className={`side-menu ${open ? "open" : ""}`}>
        <Link to="/architecture" onClick={() => setOpen(false)}>
          Architecture
        </Link>
        <Link to="/interior" onClick={() => setOpen(false)}>
          Interior
        </Link>
        <Link to="/construction" onClick={() => setOpen(false)}>
          Construction
        </Link>
      </aside>
    </>
  );
}
