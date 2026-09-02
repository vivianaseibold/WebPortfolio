import { useState } from "react";
import "./projects.css";
import Meta from "../components/Meta.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BASE = import.meta.env.BASE_URL;
const asset = (p) => `${BASE}images/${p}`;

const SPOON_SAMPLES = [
  { id: "spoon1", title: "Reel", url: "https://www.instagram.com/reel/DJsAvgFOluh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: asset("Spoon1.png"), alt: "Preview frame from Spoon reel: Taste test montage" },
  { id: "spoon2", title: "Graphic", url: "https://www.instagram.com/p/DGlzYdISVCc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: asset("Spoon2.png"), alt: "Graphic post preview for Spoon University" },
  { id: "spoon3", title: "Post", url: "https://www.instagram.com/p/DFjWkqQuKST/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: asset("Spoon3.png"), alt: "Static post preview for Spoon University" },
];

const STITCH_SAMPLES = [
  { id: "stitch1", title: "STITCH x Dillo Edit", url: "https://www.instagram.com/p/DIejWWxv9e1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: asset("Stitch1.png"), alt: "Preview frame from STITCH Spotted street style feature" },
  { id: "stitch2", title: "Rebrand Graphic", url: "https://www.instagram.com/p/DIUhaXwJTWM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", img: asset("Stitch2.png"), alt: "Weekly Newsletter" },
  { id: "stitch3", title: "Weekly Newsletter", url: "https://www.canva.com/design/DAGwf5T6yuU/I1yf-Dxf1CjOXkEzxONojQ/view?utm_content=DAGwf5T6yuU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1ecae31fb2", img: asset("Stitch3.png"), alt: "Graphic for STITCH rebrand" },
];

const formaSlides = [asset("FormaStudios1.png"), asset("FormaStudios2.png"), asset("FormaStudios3.png"), asset("FormaStudios4.png"), asset("FormaStudios5.png"), asset("FormaStudios6.png"), asset("FormaStudios7.png")];
const zadigSlides = [asset("RBRxZV1.png"), asset("RBRxZV2.png"), asset("RBRxZV3.png"), asset("RBRxZV4.png"), asset("RBRxZV5.png")];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology" },
  { id: "creative", label: "Creative Strategy" },
];

const SUPPORTING_PROJECTS = [
  { id: "f1", category: "technology", type: "WEB DEVELOPMENT", title: "The F1 Files", href: "https://vivianaseibold.github.io/thef1files/", external: true },
  { id: "stitch", category: "creative", type: "CREATIVE STRATEGY", title: "STITCH Spotted", detail: "stitch" },
  { id: "spoon", category: "creative", type: "CONTENT / DESIGN", title: "Spoon University", detail: "spoon" },
];

function MissingArtwork({ label }) {
  return <div className="work-art work-art--missing" role="img" aria-label={`${label} artwork is unavailable`} />;
}

function CampaignCase({ title, slides, caption }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: false,
    responsive: [{ breakpoint: 900, settings: { arrows: false } }],
  };

  return (
    <section className="campaign">
      <div className="campaign-row">
        <div className="campaign-copy">
          <h2 className="campaign-title">{title}</h2>
          <p className="campaign-caption">{caption}</p>
        </div>
        <div className="campaign-media">
          <Slider {...settings}>
            {slides.map((img, i) => (
              <div key={i}>
                <div className="slide-frame">
                  <img src={img} alt={`${title} sample ${i + 1}`} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

function DetailSamples({ items, label }) {
  return (
    <div className="ig-grid" role="list" aria-label={label}>
      {items.map((post) => (
        <a key={post.id} role="listitem" className="ig-card" href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`Open Instagram: ${post.title}`} title={post.title}>
          <figure>
            <img className="ig-thumb" src={post.img} alt={post.alt} loading="lazy" />
            <figcaption className="ig-caption"><span className="ig-caption__title">{post.title}</span></figcaption>
          </figure>
        </a>
      ))}
    </div>
  );
}

function ProjectDetail({ detail, onBack }) {
  return (
    <div className="project-detail">
      <button className="detail-back" type="button" onClick={onBack}>← Back to work</button>
      {detail === "spoon" ? (
        <section id="spoon" className="proj-section">
          <div className="proj-section__head">
            <h1 className="proj-section__title">Spoon Highlights</h1>
            <a className="btn btn--accent" href="https://issuu.com/nuspoonmag" target="_blank" rel="noopener noreferrer">View Magazine ↗</a>
          </div>
          <p className="proj-section__blurb">As VP of Content &amp; PR and Graphics Chair for the founding chapter of Spoon University, I built our posting workflow, delegate assignments across the content/PR team, and lead outreach to Chicagoland restaurants and cafés (including Michelin Bib&nbsp;Gourmand restaurants) for collaborations. I curate and produce everything from new-restaurant reels to “What I Eat in a Day” story takeovers, and design the graphics for events and features.</p>
          <DetailSamples items={SPOON_SAMPLES} label="Spoon Instagram previews" />
        </section>
      ) : (
        <section id="stitch" className="proj-section">
          <div className="proj-section__head">
            <h1 className="proj-section__title">STITCH Highlights</h1>
            <a className="btn btn--accent" href="https://l.instagram.com/?u=http%3A%2F%2Fwww.stitchfashion.com%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadZ1EkupcHZEiQC4F8IzxetF2l8pzX4UvdUSjdAq4L6PybhYtAz-9JwygmlFQ_aem_NMFukOt7F9nf5TfvpJ6ZUw&e=AT0fbPKLnksXM7DzQAxtDSex6nvtS7mbhGvSh-bj0G7G9LLwFxWPTEB93PtBO2JQXgyfak8j-jFIalKxX4XX1D-V-qZk1V0_U1qD6Q" target="_blank" rel="noopener noreferrer">View Magazine ↗</a>
          </div>
          <p className="proj-section__blurb">I’m part of STITCH Fashion Magazine—after a semester on the editorial team, I now work across business, PR, and marketing. I’m leading the rebrand and growth of <strong>STITCH Spotted</strong>, our on-campus street style vertical that highlights student fashion. I manage the voice and visual identity, build content calendars, coordinate features with photographers and editors, and run outreach to boost reach, collaborations, and engagement.</p>
          <DetailSamples items={STITCH_SAMPLES} label="STITCH Instagram previews" />
        </section>
      )}
      <section id="marketing" className="proj-section detail-marketing">
        <div className="proj-section__head"><h2 className="proj-section__title">Marketing &amp; Design Samples</h2></div>
        <p className="proj-section__blurb">Here’s a collection of my work exploring the intersection of marketing, design, tech, fashion, and art. Each project reflects my passion for creating thoughtful, visually engaging, and strategic brand experiences — from digital campaigns and creative direction to visual identity and product storytelling. I’ve developed these projects using tools like <strong>Canva, Figma, and Gemini</strong>, combining creativity with data-driven insight to bring ideas to life.</p>
      </section>
      <CampaignCase title="Forma Studios — Wellness Boutique" slides={formaSlides} caption="Brand identity and Instagram campaign for an aesthetic, all-inclusive fitness studio concept. Featuring Instagram posts and graphics, and merch mock-ups." />
      <CampaignCase title="Zadig & Voltaire × Red Bull Racing" slides={zadigSlides} caption="Concept campaign blending two of my favorite interests: French rock-chic fashion brand Zadig & Voltaire and Formula 1 team RedBull Racing. This project merges the edgy, Parisian streetwear aesthetic of Zadig & Voltaire with the high-performance, adrenaline-fueled world of F1 to create a steampunk-inspired, fashion-forward campaign — celebrating the intersection of luxury fashion and performance culture." />
    </div>
  );
}

function FilterNav({ filter, onChange, standalone = false }) {
  return (
    <nav className={`work-filters${standalone ? " work-filters--standalone" : ""}`} aria-label="Filter work">
      {FILTERS.map((item, index) => (
        <span className="work-filter-item" key={item.id}>
          {index > 0 && <span className="work-filter-separator" aria-hidden="true">/</span>}
          <button type="button" className={filter === item.id ? "is-selected" : ""} aria-pressed={filter === item.id} onClick={() => onChange(item.id)}>{item.label}</button>
        </span>
      ))}
    </nav>
  );
}

function SupportingArtwork({ project }) {
  if (project.id === "f1") return <MissingArtwork label="The F1 Files" />;
  if (project.id === "stitch") {
    return <div className="work-art work-art--stitch"><img src={asset("TITCH_(6).png")} alt="Send Fits design for STITCH Spotted" /></div>;
  }
  return <div className="work-art work-art--spoon"><img src={asset("IMG_5923.jpg")} alt="Restaurant plate, menu, and lamp" /></div>;
}

function SupportingCard({ project, onOpen }) {
  const content = (
    <>
      <SupportingArtwork project={project} />
      <span className="supporting-type">{project.type}</span>
      <span className="supporting-title">{project.title} <span className="supporting-arrow" aria-hidden="true">↗</span></span>
    </>
  );

  if (project.external) {
    return <a className="supporting-card" href={project.href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }

  return <button className="supporting-card" type="button" onClick={() => onOpen(project.detail)}>{content}</button>;
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [detail, setDetail] = useState(null);
  const supporting = SUPPORTING_PROJECTS.filter((project) => filter === "all" || project.category === filter);

  return (
    <>
      <Meta title="Viviana Seibold — Work" description="Selected work across technology, web development, creative strategy, and content design." />
      <div className="projects-page">
        {detail ? (
          <ProjectDetail detail={detail} onBack={() => setDetail(null)} />
        ) : (
          <>
            <header className="work-header"><h1 className="projects-title">Work</h1></header>
            {filter !== "creative" ? (
              <div className="work-feature-layout">
                <div className="work-feature-copy">
                  <h2>AI Domain<br />Intelligence Engine</h2>
                  <p className="work-kicker">AI / AUTOMATION</p>
                  <p className="work-description">Weekly AI-powered intelligence<br className="desktop-break" /> briefs, delivered to Slack.</p>
                </div>
                <div className="work-feature-media">
                  <FilterNav filter={filter} onChange={setFilter} />
                  <MissingArtwork label="AI Domain Intelligence Engine" />
                </div>
              </div>
            ) : (
              <FilterNav filter={filter} onChange={setFilter} standalone />
            )}
            <div className="work-divider" />
            <section className={`supporting-grid supporting-grid--${supporting.length}`} aria-label="Supporting work">
              {supporting.map((project) => <SupportingCard key={project.id} project={project} onOpen={setDetail} />)}
            </section>
          </>
        )}
      </div>
    </>
  );
}
