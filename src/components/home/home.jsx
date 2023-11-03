import Nav from "../nav/nav.jsx"
import style from "../../style.module.css";
import homeStyle from "./home.module.css";

function Home() {
  return (
    <div className={homeStyle.home}>
      <Nav></Nav>
      <main>
        <div className={`${style.contentBubble} ${style.titleBubble}`}>
          <h1>MABU - MABU</h1>
        </div>
      </main>
    </div>
  );
}

export default Home;
