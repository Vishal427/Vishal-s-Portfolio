import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vishal</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack Developer</span>
          </h1>

          <div className='lg:w-[35rem] md:w-[20rem]' style={{fontFamily : "auto"}}>
          <p className="hero--section-description">
            A passionate individual who always thrives to work on end-to-end products, developing sustainable and scalable social and technical systems to create impact.
          </p>
          </div>
          <button className="btn  bg-sky-500 text-white">Get In Touch</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
