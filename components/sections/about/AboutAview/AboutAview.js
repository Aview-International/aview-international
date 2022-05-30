import styles from "./AboutAview.module.css";

function AboutAview() {
  return <React.Fragment>
       <section class="about-aview m-horizontal">
        <div>
          <h1 class="section-title">
            About <span class="gradient-text">Aview</span>
          </h1>
          <p class="section-description">
            Aview is a multimedia translation company designed to help content creators 
            and entertainers expand their fan base through social media platforms. Aview 
            focuses on content creators who have developed a loyal fan base in their local 
            market and seek international expansion.
          </p>
        </div>
        <img src="asset/img/about.png" alt="" class="about-image" />
      </section>
  </React.Fragment>;
}

export default AboutAview;
