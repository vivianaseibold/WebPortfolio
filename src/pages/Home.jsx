import "./home.css"; 
import Meta from "../components/Meta.jsx";

export default function Home() {
  return (
    <>
      <Meta
        title= "Viviana Seibold Home"
        description= "Home page and About section."
      />
      <div className="home-page">
       <header className="about-header">
         <h1 className="about-title">About</h1>
          <p>
           I am a rising junior, from Chicago, studying Computer Science at Northwestern University's Weinberg School of Arts and Sciences. 
           My experiences and education have shaped me into someone who is passionate about <strong> building creative, accessible, and impactful digital
           encounters</strong>, spanning across <strong> computer science, art, and digital marketing</strong>.
          </p>
         <p>
           At Northwestern University, I focus on computer science and design. I enjoy
           combining technical tools and development with personal creativity and aesthetics.
            Outside of academics, I explore <strong> art, fashion, and culture</strong>, tying it all in through social media storytelling and
            using design and technology to bring ideas to life.
          </p>
        </header>
        <img 
          className="home-image" 
          src={"public/images/homepageimg.jpg"} a
          lt={"image of my artwork at a city-wide school exhbition"} 
        />
      </div>
    </>
  );
}
