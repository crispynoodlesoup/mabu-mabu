// eslint-disable-next-line
import pageHeaderStyle from "./pageHeader.module.css";

// eslint-disable-next-line
function PageHeader({children}) {
  return (
    <div className={pageHeaderStyle.shadow}>
      <div className={pageHeaderStyle.bubble}>
        {children}
      </div>
    </div>
  );
}

export default PageHeader;
