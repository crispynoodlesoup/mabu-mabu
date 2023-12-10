import Nav from "../nav/nav.jsx";
// eslint-disable-next-line
import style from "../../style.module.css";
import homeStyle from "./home.module.css";
import ContentBubble from "../contentBubble/ContentBubble.jsx";
import PageHeader from "../pageHeader/PageHeader.jsx";

function Home() {
  return (
    <div className={homeStyle.home}>
      <Nav/>
      <PageHeader text={"MABU - MABU"}/>
      <main>
        <div className={homeStyle.gridWrapper}>
          <ContentBubble>
            <h2>Title One</h2>
          </ContentBubble>
          <ContentBubble>
            <h2 style={{color: "#ff99b8"}}>Title Two</h2>
          </ContentBubble>
        </div>
      </main>
    </div>
  );
}

export default Home;
