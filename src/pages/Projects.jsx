import "./projects.css";
import Meta from "../components/Meta.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BASE = import.meta.env.BASE_URL;
const asset = (p) => `${BASE}images/${p}`;

//array of sample work/posts from Spoon, including links, file name, and alt
const SPOON_SAMPLES = [
  { id: "spoon1", title: "Reel",
    url: "https://www.instagram.com/reel/DJsAvgFOluh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    img: asset("Spoon1.png"),
    alt: "Preview frame from Spoon reel: Taste test montage" },
  { id: "spoon2", title: "Graphic",
    url: "https://www.instagram.com/p/DGlzYdISVCc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    img: asset("Spoon2.png"),
    alt: "Graphic post preview for Spoon University" },
  { id: "spoon3", title: "Post",
    url: "https://www.instagram.com/p/DFjWkqQuKST/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    img: asset("Spoon3.png"),
    alt: "Static post preview for Spoon University" },
];

//array of sample work/posts from STITCH, including links, file name, and alt
const STITCH_SAMPLES = [
  { id: "stitch1", title: "STITCH x Dillo Edit",
    url: "https://www.instagram.com/p/DIejWWxv9e1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    img: asset("Stitch1.png"),
    alt: "Preview frame from STITCH Spotted street style feature" },
  { id: "stitch2", title: "Rebrand Graphic",
    url: "https://www.instagram.com/p/DIUhaXwJTWM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    img: asset("Stitch2.png"),
    alt: "Weekly Newsletter" },
  { id: "stitch3", title: "Weekly Newsletter",
    url: "https://www.canva.com/design/DAGwf5T6yuU/I1yf-Dxf1CjOXkEzxONojQ/view?utm_content=DAGwf5T6yuU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1ecae31fb2",
    img: asset("Stitch3.png"),
    alt: "Graphic for STITCH rebrand" },
];

const formaSlides = [
  asset("FormaStudios1.png"),
  asset("FormaStudios2.png"),
  asset("FormaStudios3.png"),
  asset("FormaStudios4.png"),
  asset("FormaStudios5.png"),
  asset("FormaStudios6.png"),
  asset("FormaStudios7.png")
];

const zadigSlides = [
  asset("RBRxZV1.png"),
  asset("RBRxZV2.png"),
  asset("RBRxZV3.png"),
  asset("RBRxZV4.png"),
  asset("RBRxZV5.png"),
];

function CampaignCase({ title, slides, caption }) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,   // we control height via CSS
    centerMode: false,
    responsive: [{ breakpoint: 900, settings: { arrows: false } }],
  };

  return (
    <section className="campaign">
      <div className="campaign-row">
        {/* LEFT = copy */}
        <div className="campaign-copy">
          <h2 className="campaign-title">{title}</h2>
          <p className="campaign-caption">{caption}</p>
        </div>

        {/* RIGHT = media */}
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

export default function Projects() {
  //buttons scroll to dedicated sections
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    const container = document.querySelector(".content"); 
    if (!target || !container) return;

    const y =
      target.getBoundingClientRect().top
      - container.getBoundingClientRect().top
      + container.scrollTop - 16; 

    container.scrollTo({ top: y, behavior: "smooth"}); //scroll smooth
  };

  return (
    <>
    <Meta
      title= "Viviana Seibold Projects"
      description= "Showcase of digital marketing, design, and journalism projects with Spoon University and STITCH Fashion."
    />

    <div className="projects-page">
      {/* header */}
      <header className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-intro">
          I enjoy working and creating across <strong>Social Media</strong>, <strong>Marketing</strong>,{" "}
          <strong>Design</strong>, and <strong>Content curating</strong>. I bring in an interdisciplinary approach from my art experience
          and computer science skills, focusing on: ideation, storyboarding, accessible visuals, clear messages, and aesthetic formats. 
          Check out some projects I have used these skills on!
        </p>

        <ul className="proj-tags" aria-label="Jump to section">
          {/* button to jump to spoon section*/}
          <li>
            <button type="button" className="proj-tag" onClick={() => scrollToSection("spoon")}>
              Spoon University
            </button>
          </li>
          {/* button to jump to stitch section */}
          <li>
            <button type="button" className="proj-tag" onClick={() => scrollToSection("stitch")}>
              STITCH Fashion
            </button>
          </li>
        </ul>
      </header>

      <section id="spoon" className="proj-section">
        <div className="proj-section__head">
          <h2 className="proj-section__title">Spoon Highlights</h2>
          {/* button linked to spoon magazine site*/}
          <a
            className="btn btn--accent"
            href="https://issuu.com/nuspoonmag"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open NU Spoon Magazine on Issuu"
          >
            View Magazine
          </a>
        </div>

        <p className="proj-section__blurb">
          As VP of Content & PR and Graphics Chair for the founding chapter of Spoon University,
          I built our posting workflow, delegate assignments across the content/PR team, and lead
          outreach to Chicagoland restaurants and cafés (including Michelin Bib&nbsp;Gourmand restaurants) for
          collaborations. I curate and produce everything from new-restaurant reels to “What I Eat
          in a Day” story takeovers, and design the graphics for events and features.
        </p>

        {/* map items from SPOON_SAMPLES array*/}
        <div className="ig-grid" role="list" aria-label="Spoon Instagram previews">
          {SPOON_SAMPLES.map((post) => (
            <a
              key={post.id}
              role="listitem"
              className="ig-card"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Instagram: ${post.title}`}
              title={post.title}
            >
              <figure>
                <img className="ig-thumb" src={post.img} alt={post.alt} loading="lazy" />
                <figcaption className="ig-caption">
                  <span className="ig-caption__title">{post.title}</span>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </section>


      <section id="stitch" className="proj-section">
        <div className="proj-section__head">
          <h2 className="proj-section__title">STITCH Highlights</h2>
          {/* button linked to STITCH magazine site*/}
          <a
            className="btn btn--accent"
            href="https://l.instagram.com/?u=http%3A%2F%2Fwww.stitchfashion.com%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadZ1EkupcHZEiQC4F8IzxetF2l8pzX4UvdUSjdAq4L6PybhYtAz-9JwygmlFQ_aem_NMFukOt7F9nf5TfvpJ6ZUw&e=AT0fbPKLnksXM7DzQAxtDSex6nvtS7mbhGvSh-bj0G7G9LLwFxWPTEB93PtBO2JQXgyfak8j-jFIalKxX4XX1D-V-qZk1V0_U1qD6Q" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open STITCH Fashion"
          >
            View Magazine
          </a>
        </div>

        {/* map items from STITCH_SAMPLES array*/}
        <p className="proj-section__blurb">
          I’m part of STITCH Fashion Magazine—after a semester on the editorial team, I now work
          across business, PR, and marketing. I’m leading the rebrand and growth of{" "}
          <strong>STITCH Spotted</strong>, our on-campus street style vertical that highlights
          student fashion. I manage the voice and visual identity, build content calendars,
          coordinate features with photographers and editors, and run outreach to boost reach,
          collaborations, and engagement.
        </p>

        {/* map items from STITCH_SAMPLES array*/}
        <div className="ig-grid" role="list" aria-label="STITCH Instagram previews">
          {STITCH_SAMPLES.map((post) => (
            <a
              key={post.id}
              role="listitem"
              className="ig-card"
              href={post.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Open Instagram: ${post.title}`}
              title={post.title}
            >
              <figure>
                <img className="ig-thumb" src={post.img} alt={post.alt} loading="lazy" />
                <figcaption className="ig-caption">
                  <span className="ig-caption__title">{post.title}</span>
                </figcaption>
              </figure>
            </a>
          ))}
        </div>
      </section>

      <CampaignCase
        title="Forma Studios — Wellness Boutique"
        slides={formaSlides}
        caption="Brand identity and Instagram campaign for a women’s fitness studio concept."
      />

      <CampaignCase
        title="Zadig & Voltaire × Red Bull Racing"
        slides={zadigSlides}
        caption="Concept campaign blending French rock-chic fashion and Formula 1 branding."
      />
    </div>
  </>
  );
}