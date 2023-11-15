// eslint-disable-next-line
import pageHeaderStyle from "./pageHeader.module.css";

// eslint-disable-next-line
function PageHeader({children}) {
  return (
    <header className={pageHeaderStyle.shadow}>
      <div className={pageHeaderStyle.bubble}>
        {children}
      </div>
    </header>
  );
}

export default PageHeader;
