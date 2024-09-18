import data from "../../data/index.json";

export default function Testimonial() {
  return (

    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/4.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">Backend</p>
          <h1 className="skills-section--heading">Backend Development</h1>
          <div className="lg:w-[35rem]" style={{ fontFamily: "auto" }}>
            <p className="hero--section-description">
              Creating application using React with other most popular state management library Mobx.
            </p>
            <p className="hero--section-description">
              Building responsive website frontend using React JS, Bootstrap, JavaScript, CSS, TailwindCSS, and Next JS.
            </p>
            <p className="hero--section-description">
              Experience to develop application using different types of routing techniques and easily syntaxial data fetching libraries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}