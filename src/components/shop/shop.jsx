import Nav from "../nav/nav.jsx";
import shopStyle from "./shop.module.css";
// import ContentBubble from "../contentBubble/ContentBubble.jsx";
import PageHeader from "../pageHeader/PageHeader.jsx";

function Home() {
  return (
    <div className={shopStyle.shop}>
      <Nav/>
      <PageHeader text={"THE SHOP"}/>
    </div>
  );
}

export default Home;
