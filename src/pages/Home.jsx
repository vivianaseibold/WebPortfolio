import "./home.css";
import Meta from "../components/Meta.jsx";

const BASE = import.meta.env.BASE_URL;
const PORTRAIT_SRC = `${BASE}images/IMG_5133.jpg`;
const FRAMES = [0, 1, 2, 3];

function AboutLettering() {
  return (
    <svg className="about-lettering" viewBox="0 0 260 64" aria-hidden="true" focusable="false">
      <text x="4" y="46" fill="currentColor" fontSize="44" fontFamily="cursive" fontStyle="italic" letterSpacing="-2">about me</text>
    </svg>
  );
}

function PortraitGrid() {
  return (
    <div className="portrait-grid" aria-label="Four black-and-white portrait frames">
      {FRAMES.map((frame) => (
        <div className="portrait-frame" style={{ "--frame": frame }} key={frame}>
          <img src={PORTRAIT_SRC} alt="" aria-hidden="true" />
        </div>
      ))}
      <AboutLettering />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Meta title="Viviana Seibold — About" description="Viviana Seibold is a computer science student at Northwestern working across technology and creative strategy." />
      <div className="about-page">
        <div className="about-label">01 / INTRODUCTION</div>
        <section className="about-grid" aria-labelledby="about-heading">
          <div className="about-headline-wrap">
            <h1 id="about-heading">Technology,<br />design, and<br />culture—<br />thoughtfully<br />connected.</h1>
            <span className="headline-underline" aria-hidden="true" />
          </div>
          <div className="about-profile">
            <PortraitGrid />
            <p>I’m a computer science student at Northwestern working across technology and creative strategy.</p>
          </div>
        </section>
      </div>
    </>
  );
}
