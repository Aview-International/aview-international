/**
 * Hover shadow for elemnets
 * To use, add global shadow-parent class to parent and add shadow as a child
 */
function Shadow({ children }) {
  return <div className="shadow">{children}</div>;
}

export default Shadow;
