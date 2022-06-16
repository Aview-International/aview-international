import styles from './GradientFullWidth.module.css';

/**
 * Container for full-width sections with a gradient background
 *
 * @prop children: Content to be put into the gradient section
 *
 * @author Andrew Qiao
 */
function GradientFullWidth({ children }) {
  return <div className={styles['gradient-container']}>{children}</div>;
}

export default GradientFullWidth;
