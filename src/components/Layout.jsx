import { NavLink, Link, Outlet } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./layout.css";

export default function Layout() {
  return (
    <div className="site-grid">
      <aside className="sidebar">
        <div className="sidebar-top">
          <h1 className="home-title">
            <Link to="/" className="home-title-link">Viviana Seibold</Link>
          </h1>
          <h2 className="home-subtitle">Computer Science Student @ Northwestern University</h2>

          <nav className="home-nav" aria-label="Section navigation">
            <ul>
              <li><NavLink to="/art" className={({isActive}) => isActive ? "active" : ""}>Art</NavLink></li>
              <li><NavLink to="/cs" className={({isActive}) => isActive ? "active" : ""}>CS</NavLink></li>
              <li><NavLink to="/projects" className={({isActive}) => isActive ? "active" : ""}>Projects</NavLink></li>
              <li><NavLink to="/resume" className={({isActive}) => isActive ? "active" : ""}>Resume</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* contact button and socials media icons in bottom left*/}
        <div className="sidebar-bottom">
          <div className="contact-row">
            <a className="contact-button" href="mailto: vivianaseibold2027@u.northwestern.edu">Contact Me</a>
            <div className="social-icons" aria-label="Social links">
              <a href="https://instagram.com/vivianaseiboldd" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://linkedin.com/in/viviana-seibold" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* the rhs is the scrollable section */}
      <section className="content">
        <div className="content-inner">
          <Outlet />
        </div>
      </section>

      {/* theme toggle in the top right corner */}
      <ThemeToggle />
    </div>
  );
}
