/**
 * Container for Want To Go Global? section of homepage
 */
import Border from "../../../UI/Border/Border";
import Button from "../../../UI/Button/Button";
import style from "./GoGlobal.module.css";
import { useState } from "react";

const GoGlobal = () => {
  const [mail, setMail] = useState("");
  return (
    <section className={`section ${style.section}`}>
      <h2 className={`section-title  ${style.desktop_text}`}>
        Want To Go Global?
      </h2>
      <h2 className={`section-title ${style.mobile_text}`}>
        Stay Up to Date with the Latest News
      </h2>
      <p className={`section-description`}>
        Give us your email. We will do the rest.
      </p>
      <form autoComplete="on" className={style.form}>
        <Border>
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Your email address"
          />
        </Border>
        <p>
          By signing up you agree to receive communications via email. For more
          information please refer to our Privacy Policy.
        </p>
        <Button type="tertiary">Subscribe</Button>
      </form>
    </section>
  );
};

export default GoGlobal;
