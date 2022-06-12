/**
 * Hover shadow for elemnets
 * To use, add global shadow-parent class to parent and add shadow as a child
 *
 * @prop children: What has the shadow
 *
 * @author Andrew Qiao
 */
function Shadow({ children }) {
  return <div className="shadow">{children}</div>;
}

export default Shadow;
