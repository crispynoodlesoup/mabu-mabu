// eslint-disable-next-line
import pageHeaderStyle from "./pageHeader.module.css";

// eslint-disable-next-line
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

export default PageHeader;
