import "./cs.css";
import Meta from "../components/Meta";

const COURSES = [
  {
    classNum: "CS 110",
    title: "Introduction to Computer Programming",
    description:
      "Intro to programming with Python: learn to analyze design, and formulate systematically. ",
  },
  {
    classNum: "CS 111",
    title: "Fundamentals of Computer Programming I",
    description:
      "Intro to the fundamentals of coding with Racket: focusing on recursion, and functional, imperative, and object oriented programming with emphasis on abstraction and modularity.",
  },
  {
    classNum: "CS 150",
    title: "Fundamentals of Computer Programming 1.5",
    description:
      "Takes core lessons from 111 of OOP and transfers them to Python, and a brief touch into C++ and AI/ML concepts.",
  },
  {
    classNum: "CS 211",
    title: "Fundamentals of Computer Programming II",
    description:
      "Foundational software design in C and C++: imperative programming, memory management, classes, and templates, with basic UNIX shell usage and testing.",
  },
  {
    classNum: "CS 212",
    title: "Mathematical Foundations of CS (Part 1)",
    description:
      "Discrete math for CS: logic, sets, propositional and predicate calculi, and graph theory, applied to CS through sequential machines, formal grammar, and software design.",
  },
  {
    classNum: "CS 214",
    title: "Data Structures & Algorithms",
    description:
      "Abstract data types, structure and algorithms, spanning topics on lists, stacks, queues and heaps, search trees, sorting, hash tables, graphs, and least-cost path calculations.",
  },
];

export default function CS() {
  return (
    <>
      <Meta
        title="Viviana Seibold — CS"
        description="History of personal computer science experience and coursework."
      />

      <div className="cs-page">
        {/* Header */}
        <header className="cs-header">
          <h1 className="cs-title">Computer Science</h1>
          {/* Intro */}
          <p className="cs-intro">
            As a Computer Science student in Northwestern University's Weinberg School of Art and Sciences, I am dedicated to building usable, accessible software.
            Specifically, I greatly enjoy web development, design systems, and data-driven projects. Check out some of my skills, past coursework, and web projects below!
          </p>

          {/* Skills */}
          <ul className="cs-tags" aria-label="Skills">
            <li key={"Python"} className="cs-tag">{"Python"}</li>
            <li key={"Racket"} className="cs-tag">{"Racket"}</li>
            <li key={"C"} className="cs-tag">{"C"}</li>
            <li key={"C++"} className="cs-tag">{"C++"}</li>
            <li key={"JavaScript"} className="cs-tag">{"JavaScript"}</li>
            <li key={"React"} className="cs-tag">{"React"}</li>
            <li key={"HTML"} className="cs-tag">{"HTML"}</li>
            <li key={"CSS"} className="cs-tag">{"CSS"}</li>
            <li key={"Bootstrap"} className="cs-tag">{"Bootstrap"}</li>
            <li key={"Git"} className="cs-tag">{"Git"}</li>
          </ul>
        </header>

        {/* Coursework Cards */}
        <section className="cs-section">
          <h2 className="cs-section__title">Coursework</h2>
          <div className="course-grid" role="list" aria-label="Computer science courses">
            {COURSES.map((c) => (
              <article key={c.classNum} role="listitem" className="course-card">
                <div className="course-head">
                  <span className="course-classNum">{c.classNum}</span>
                  <h3 className="course-title">{c.title}</h3>
                </div>
                <p className="course-description">{c.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Example Project - TheF1Files */}
        <section id="thef1files" className="cs-section">
          <div className="cs-section__head">
            <h2 className="cs-section__title">Featured Project — The F1 Files</h2>
            <a
              className="btn btn--accent"
              href="https://vivianaseibold.github.io/thef1files/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Site
            </a>
          </div>

          <p className="cs-blurb">
            A beginner-friendly Formula 1 site I designed to serve as a responsive and accessible introduction to the sport of Formula 1.
            Check out the live preview below or open the full site for the ultimate experience.
          </p>

          <div className="embed-card">
            <iframe
              className="embed-frame"
              title="The F1 Files — embedded preview"
              src="https://vivianaseibold.github.io/thef1files/"
              loading="lazy"
              allow="clipboard-write; fullscreen"
            />
            <p className="embed-note">
              If the preview doesn’t appear, your browser or the host may block embedding.
              Use the “Open Full Site” button above.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
