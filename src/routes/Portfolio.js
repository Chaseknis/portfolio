import React from 'react';

function Portfolio() {
  return (
    <section id="home">
      <div className="home_container">
        <div className="home_wrapper">

          <div className="home_image" />

          <div className="information_container">
            <h1>Chase</h1>

            <h3>Fullstack Developer</h3>

            <p>
              I&apos;m an experienced full stack developer based in Kigali,
              Rwanda, crafting innovative web solutions for businesses worldwide.
            </p>

            <a href="/contact" className="home_button">
              Say hi!
              <i className="uil uil-message" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
