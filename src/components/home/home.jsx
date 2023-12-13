import Nav from "../nav/nav.jsx";
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
            <h2>Welcome to Mabu-Mabu!</h2>
            <p>Your one-stop ice cream shop is awaiting your order with all the flavors, from mousse to mango! Be sure to try our specialty items shipped from across the world!</p>
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
