import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./layout.css";
import Footer from "./Footer.jsx";
import SignatureLogo from "./SignatureLogo";

const navigation = [
  { label: "Work", to: "/projects" },
  { label: "About", to: "/" },
  { label: "Art", to: "/art" },
  { label: "Résumé", to: "/resume" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-grid">
      <aside className={`sidebar ${menuOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar-top">
          <div className="brand-row">
            <h1 className="home-title">
              <Link to="/" className="home-title-link" aria-label="Viviana Seibold — Home" onClick={() => setMenuOpen(false)}>
                <SignatureLogo className="signature-logo" />
                <span className="sr-only">Viviana Seibold</span>
              </Link>
            </h1>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">{menuOpen ? "Close" : "Open"} menu</span>
              <span aria-hidden="true">{menuOpen ? "Close" : "Menu"}</span>
            </button>
          </div>
          <p className="home-subtitle">Creative technologist</p>

          <nav id="site-navigation" className="home-nav" aria-label="Section navigation">
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) => isActive ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href="mailto: ivianaseibold2027@u.northwestern.edu" onClick={() => setMenuOpen(false)}>Contact</a>
              </li>
              <li className="nav-secondary">
                <NavLink to="/cs" onClick={() => setMenuOpen(false)}>CS</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="sidebar-bottom">
          <div className="social-links" aria-label="Social links">
            <a href="https://instagram.com/vivianaseiboldart" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com/in/viviana-seibold" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/vivianaseibold" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </aside>

      <section className="content">
        <div className="content-inner">
          <Outlet />
          <Footer />
        </div>
      </section>

      <ThemeToggle />
    </div>
  );
}
