import styles from "./Landing.module.css";

function Landing() {
  return 
  <React.Fragment>
    <section class="our-mission m-horizontal">
        <div>
          <h1 class="about-section-title">
            Our Mission
          </h1>
          <p class="about-section-description">
            To help build content creator brands globally through translated 
            subtitles and voiceovers; a client, a language, and
            <span class="gradient-text"> Aview </span> at a time.
          </p>
          <a href="#generate-aview" class="btn-primary"
            ><div class="shadow"></div>
            contact us</a>
        </div>
        <img src="./public/img/graphics/about-landing.png" alt="" class="about-landing-image" />
      </section>

  </React.Fragment>;
}

export default Landing;
