import styles from "./CoreValues.module.css";

function CoreValues() {
  return <React.Fragment>
          <section class="core-value m-horizontal">
        <div class="value-header">
          <h1 class="section-title">
            Our <span class="gradient-text">Core Values</span>
          </h1>
          <p class="section-description">
            Aview focuses on three main items when it comes to our service. We know every 
            creator is different and tailor our approach.
          </p>
        </div>
        <div class="value-info-header">
            <ul class="value-info">
                <li class="section-title"><span class="gradient-text">Fast Turnaround</span></li>
                <li class="section-title"><span class="gradient-text">Taliored for Crators</span></li>
                <li class="section-title"><span class="gradient-text">Flexable Payment Plans</span></li>
            </ul>
        <div class="value-info-content">
            <ul class="value-info">
                <li class="section-description">
                    Aview will guarantee a 24-hour turnaround on subtitle work and 48 hours 
                    turnaround on dubbed content. We understand the importance of being timely 
                    to maximize views. 
                </li>
                <li class="section-description">
                    Aview understands each creator is different and will work closely with your 
                    team to find the best service and languages. No one service fits all. We will 
                    ensure you receive what is best for you and your brand. 
                </li>
                <li class="section-description">
                    Aview creates personalized payment plans for each creator to ensure your needs 
                    and ROI is met. We will work closely with you and your brand to find a plan that 
                    works for you. 
                </li>
            </ul>
        </div>
        </div>
      </section>
  </React.Fragment>;
}

export default CoreValues;
