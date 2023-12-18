import Nav from "../nav/nav.jsx";
import contactStyle from "./contact.module.css";
// import ContentBubble from "../contentBubble/ContentBubble.jsx";
import PageHeader from "../pageHeader/PageHeader.jsx";

function Contact() {
  return (
    <div className={contactStyle.contact}>
      <Nav/>
      <PageHeader text={"CONTACT US"}/>
    </div>
  );
}

export default Contact;
