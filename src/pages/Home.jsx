import "./home.css";
import Meta from "../components/Meta.jsx";

const WORK_ITEMS = [
  {
    title: "AI Domain Intelligence Engine",
    description: "A weekly automated intelligence pipeline delivering briefs to Slack.",
  },
  {
    title: "The F1 Files",
    description: "A responsive introduction to Formula 1 for new fans.",
    href: "https://vivianaseibold.github.io/thef1files/",
  },
  {
    title: "Creative Strategy",
    description: "Selected branding, content, and digital storytelling work.",
    href: "/projects",
  },
];

function DomainEngineCover() {
  return (
    <div className="domain-cover" aria-label="AI Domain Intelligence Engine project cover">
      <div className="domain-cover__copy">
        <span className="domain-cover__eyebrow">AI / PRODUCT DESIGN</span>
        <h2>AI Domain<br />Intelligence Engine</h2>
        <p>A weekly automated pipeline that delivers intelligence briefs to Slack.</p>
      </div>
      <svg className="domain-cover__globe" viewBox="0 0 320 260" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="globe-clip"><circle cx="188" cy="130" r="112" /></clipPath>
        </defs>
        <circle cx="188" cy="130" r="112" fill="none" stroke="currentColor" strokeWidth="1" />
        <g clipPath="url(#globe-clip)" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.62">
          <ellipse cx="188" cy="130" rx="42" ry="112" />
          <ellipse cx="188" cy="130" rx="78" ry="112" />
          <ellipse cx="188" cy="130" rx="106" ry="60" />
          <ellipse cx="188" cy="130" rx="106" ry="25" />
          <path d="M76 130h224M92 76h192M92 184h192M188 18v224" />
        </g>
        <g fill="currentColor">
          <circle cx="122" cy="80" r="3" /><circle cx="230" cy="56" r="3" />
          <circle cx="274" cy="137" r="3" /><circle cx="154" cy="202" r="3" />
          <circle cx="188" cy="130" r="3" />
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  function scrollToWork() {
    const target = document.getElementById("selected-work");
    const container = document.querySelector(".content");
    if (!target || !container) return;

    const y = target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 24;
    container.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <>
      <Meta title="Viviana Seibold — Creative Technologist" description="Viviana Seibold is a Northwestern computer science student and creative strategist." />
      <div className="home-page">
        <section className="home-hero" aria-labelledby="home-heading">
          <div className="hero-copy">
            <h1 id="home-heading">Technology, design, and culture—<span>thoughtfully connected.</span></h1>
            <p className="hero-intro">I’m Viviana, a Northwestern computer science student and creative strategist building useful digital products, AI-powered tools, and visual experiences.</p>
            <button className="work-cta" type="button" onClick={scrollToWork}>
              <span>View selected work</span><span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="hero-cover-wrap">
            <DomainEngineCover />
          </div>
        </section>

        <section id="selected-work" className="selected-work" aria-labelledby="selected-work-heading">
          <h2 id="selected-work-heading">Selected Work</h2>
          <div className="work-list">
            {WORK_ITEMS.map((item, index) => {
              const content = (
                <>
                  <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="work-detail"><strong>{item.title}</strong><span>{item.description}</span></span>
                  {item.href && <span className="work-arrow" aria-hidden="true">↗</span>}
                </>
              );

              return item.href ? (
                <a className="work-item" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} key={item.title}>{content}</a>
              ) : (
                <div className="work-item" key={item.title}>{content}</div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
