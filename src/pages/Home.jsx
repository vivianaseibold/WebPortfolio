import "./home.css";
import Meta from "../components/Meta.jsx";

const BASE = import.meta.env.BASE_URL;
const ABOUT_IMAGE_SRC = `${BASE}images/About_Me_(1).png`;

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
            <img className="about-portrait" src={ABOUT_IMAGE_SRC} alt="About me portrait collage" />
            <p>
              I’m a computer science<br className="about-desktop-break" />
              student at Northwestern<br className="about-desktop-break" />
              working across technology<br className="about-desktop-break" />
              and creative strategy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
