/* eslint-disable react/prop-types */
import "./pageDesc.css"

const PageDesc = ({ number, text }) => {
  return (
    <p className="pageDesc">
      <span>{number}</span>{text}
    </p>
  );
};

export default PageDesc;
