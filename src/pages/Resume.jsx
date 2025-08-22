import "./resume.css";
import Meta from "../components/Meta.jsx";

const RESUME_URL = `${import.meta.env.BASE_URL}docs/resume.pdf`; // turn pdf into a public link

export default function Resume() {
  return (
    <>
    <Meta
      title= "Viviana Seibold Resume"
      description= "Link to and in-page viewable pdf of resume."
    />
    <div className="resume-page">
      <header className="resume-header">
        <h1 className="resume-title">Resume</h1>

        {/* button to open the pdf in a new tab if it doesn't load in the preview */}
        <div className="resume-actions">
          <a className="btn btn--accent" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            Open in a New Tab 
          </a>
        </div>
      </header>

      <div className="resume-viewer">
        <object
          data={RESUME_URL}
          type="application/pdf"
          className="resume-embed"
          aria-label="Résumé PDF"
        >
          {/* if pdf is not viewable in the preview, display a message to open the link instead */}
          <p className="resume-fallback">
            Your browser can’t display PDFs inline.{" "}
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Open the resume in a new tab
            </a>
            .
          </p>
        </object>
      </div>
    </div>
    </>
  );
}
