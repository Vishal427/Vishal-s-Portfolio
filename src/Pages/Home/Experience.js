import React, { useEffect } from 'react';
import './Experience.css';


const Experience = () => {

  useEffect(() => {
    const summaryCollection = document.getElementsByTagName('summary');
    const signsCollection = document.getElementsByClassName('faq-open-icon');

    for (let i = 0; i < summaryCollection.length; i++) {
      summaryCollection[i].onclick = function () {
        if (signsCollection[i].innerHTML === '+') signsCollection[i].innerHTML = '—';
        else signsCollection[i].innerHTML = '+';
      }
    }
  }, []);

  return (
    <div>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--img">
          <img src="./img/Expimg.png" alt="Hero Section" />
        </div>
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Experience</span>
            </h1>
            <p className="section--title">Work Experience</p>

            <p className="hero--section-description">
              As a Front-End Engineer with around 3 years of experience, I started my journey with a well-established company, where I honed my skills in developing responsive and user-friendly website frontends. My role involved working in Agile methodologies, which allowed me to adapt to dynamic project requirements and collaborate effectively with cross-functional teams.

            </p>
          </div>
        </div>
      </section>

      <details className="faq-card">
        <summary>Work <span className="faq-open-icon">+</span></summary>
        <span className="faq-card-spoiler">
          <div className="experience-list-item" style={{ marginTop: '30px' }}>
            <div className="react-reveal experience-card-logo-div" style={{ animationFillMode: 'both', animationDuration: '2000ms', animationDelay: '0ms', animationIterationCount: 1, opacity: 1, animationName: 'react-reveal-259094158728357-7' }}>
              <img className="experience-card-logo" src="./static/media/qmetry.264bfd87.png" alt="" />
            </div>
            <div className="experience-card-stepper"></div>
            <div className="react-reveal" style={{ display: 'flex', flexDirection: 'row', animationFillMode: 'both', animationDuration: '2000ms', animationDelay: '0ms', animationIterationCount: 1, opacity: 1, animationName: 'react-reveal-259094158728357-5' }}>
              <div className="arrow-left" style={{ borderRight: '10px solid rgb(237, 249, 254)' }}></div>
              <div className="experience-card" style={{ background: 'rgb(237, 249, 254)' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <div>
                    <h3 className="experience-card-title" style={{ color: 'rgb(0, 28, 85)' }}>Front-End Engineer</h3>
                    <p className="experience-card-company" style={{ color: 'rgb(0, 28, 85)' }}>
                      <a href="https://www.qmetry.com/" target="_blank" rel="noopener noreferrer">N D Techland Pvt Ltd</a>
                    </p>
                  </div>
                  <div>
                    <div className="experience-card-heading-right">
                      <p className="experience-card-duration" style={{ color: 'rgb(127, 141, 170)' }}>May 2022 - Present</p>
                      <p className="experience-card-location" style={{ color: 'rgb(127, 141, 170)' }}>Noida, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
                  <div className="repo-description"></div>
                  As a Front-End Engineer with over 3 years of experience, I have played a crucial role in developing and enhancing several key products at N D Techland Pvt Ltd. My expertise includes crafting dynamic and responsive user interfaces that are both intuitive and visually appealing. I specialize in a tech stack that includes React.js, JavaScript, HTML, CSS, Bootstrap, jQuery, and Next.js.

                  In my current role, I am deployed on the client side, working at the Ministry of Chemicals and Fertilizers, Department of Chemicals and Petrochemicals. My responsibilities involve integrating frontend designs with backend logic, ensuring that applications are highly performant, scalable, and deliver a seamless user experience. I am committed to building scalable frontends that meet the needs of end-users while enhancing usability and accessibility.
                </div>
              </div>
            </div>
          </div>
        </span>
      </details>

      <p style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
        Made with 💖 by Vishal Mishra
      </p>
    </div>
  );
}

export default Experience;
