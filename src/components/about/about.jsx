import Nav from "../nav/nav.jsx";
import aboutStyle from "./about.module.css";
// import ContentBubble from "../contentBubble/ContentBubble.jsx";
import PageHeader from "../pageHeader/PageHeader.jsx";

function About() {
  return (
    <div className={aboutStyle.about}>
      <Nav/>
      <PageHeader text={"ABOUT US"}/>
    </div>
  );
}

export default About;
