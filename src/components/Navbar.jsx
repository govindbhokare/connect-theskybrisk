import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  ["/", "Home"],
  ["/internships", "Internships"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">TS</span>
          <span>
            <strong>The Skybrisk</strong>
            <small>Connect</small>
          </span>
        </Link>

        <nav className={`desktop-nav ${open ? "mobile-open" : ""}`}>
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {label}
            </NavLink>
          ))}
          <a className="nav-cta" href="https://www.theskybrisk.com/apply" target="_blank" rel="noreferrer">
            Apply Now <ArrowUpRight size={16} />
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}