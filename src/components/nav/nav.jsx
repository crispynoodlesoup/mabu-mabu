import navStyle from "./nav.module.css";
// eslint-disable-next-line
import homeButton from "../../assets/home.svg";
import shopButton from "../../assets/shop.svg";
import aboutButton from "../../assets/about.svg";
import contactButton from "../../assets/contact.svg";

function Nav() {
  return (
    <nav>
      <ul>
        <li className={`${navStyle.navLink} ${navStyle.selected}`}>
            HOME
        </li>
        <li className={navStyle.navLink}><img src={shopButton} alt="" /></li>
        <li className={navStyle.navLink}><img src={aboutButton} alt="" /></li>
        <li className={navStyle.navLink}><img src={contactButton} alt="" /></li>
      </ul>
    </nav>
  );
}

export default Nav;
