import Nav from "../nav/nav.jsx";
import style from "../../style.module.css";
import homeStyle from "./home.module.css";

function Home() {
  return (
    <div className={homeStyle.home}>
      <Nav></Nav>
      <main>
        <div className={`${style.contentBubble} ${homeStyle.titleBubble}`}>
          <div className={style.contentWrapper}>
            <div className={homeStyle.titleStripe}>
              <div></div>
              <div></div>
            </div>
            <h1 className={homeStyle.heroTitle}>MABU - MABU</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
