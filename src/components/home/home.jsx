import Nav from "../nav/nav.jsx";
// eslint-disable-next-line
import style from "../../style.module.css";
import homeStyle from "./home.module.css";
import ContentBubble from "../contentBubble/ContentBubble.jsx";

function Home() {
  return (
    <div className={homeStyle.home}>
      <Nav></Nav>
      <main>
        <div className={homeStyle.gridWrapper}>
          <ContentBubble>
            <div className={homeStyle.titleStripe}>
              <div></div>
              <div></div>
            </div>
            <h1 className={homeStyle.heroTitle}>MABU - MABU</h1>
          </ContentBubble>
        </div>
      </main>
    </div>
  );
}

export default Home;
