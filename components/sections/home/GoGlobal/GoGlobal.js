import GradientFullWidth from "../../../../components/layout/GradientFullWidth/GradientFullWidth";
import Form from "../../../../components/form/Form/Form";
import Button from "../../../../components/UI/Button/Button";
import Input from "../../../form/Input/Input";

import styles from "./GoGlobal.module.css";

/**
 * Container for Want To Go Global? section of homepage
 */
function GoGlobal() {
  return (
    <section className={`section`}>
      <GradientFullWidth>
        <h2 className={`section-title ${styles["section-title"]}`}>
          Want to Go Global?
        </h2>
        <p className={`section-description ${styles["section-description"]}`}>
          Give us your email. We will do the rest.
        </p>
        <Form>
          <Input
            type="email"
            placeholder="Your email address"
            bgColor="light"
          />
          <p className={styles.agreement}>
            By signing up you agree to receive communications via email. For
            more information please refer to our Privacy Policy.
          </p>
          <Button type="tertiary" isLink={false} isSubmit={true}>
            Subscribe
          </Button>
        </Form>
      </GradientFullWidth>
    </section>
  );
}

export default GoGlobal;
