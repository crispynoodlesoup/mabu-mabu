import PropTypes from "prop-types";
import pageHeaderStyle from "./pageHeader.module.css";

function PageHeader({ text }) {
  return (
    <header className={pageHeaderStyle.shadow}>
      <div className={pageHeaderStyle.bubble}>
        <div className={pageHeaderStyle.titleStripe}>
          <div></div>
          <div></div>
        </div>
        <h1 className={pageHeaderStyle.heroTitle}>{text}</h1>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  text: PropTypes.string,
}

PageHeader.defaultProps = {
  text: "MABU-MABU",
}

export default PageHeader;
