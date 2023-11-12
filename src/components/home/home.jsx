import Nav from "../nav/nav.jsx";
// eslint-disable-next-line
import style from "../../style.module.css";
import homeStyle from "./home.module.css";
import ContentBubble from "../contentBubble/ContentBubble.jsx";
import PageHeader from "../pageHeader/PageHeader.jsx";

function Home() {
  return (
    <div className={homeStyle.home}>
      <Nav></Nav>
      <main>
        <PageHeader>
          <div className={homeStyle.titleStripe}>
            <div></div>
            <div></div>
          </div>
          <h1 className={homeStyle.heroTitle}>MABU - MABU</h1>
        </PageHeader>
        <div className={homeStyle.gridWrapper}>
          <ContentBubble>
            <h2>woew</h2>
          </ContentBubble>
          <ContentBubble>
            <h2>woew 2</h2>
          </ContentBubble>
        </div>
      </main>
    </div>
  );
}

export default Home;
