import navStyle from "./nav.module.css";
import homeButton from "../../assets/home_selected.svg";
import shopButton from "../../assets/shop.svg";
import aboutButton from "../../assets/about.svg";
import contactButton from "../../assets/contact.svg";
import iceCream from "../../assets/ice-cream.svg"

function Nav() {
  return (
    <nav>
      <ul>
        <li className={`${navStyle.navLink} ${navStyle.selected}`}>
          <img src={homeButton} alt="" />
        </li>
        <li className={navStyle.navLink}>
          <img src={shopButton} alt="" />
        </li>
        <img className={navStyle.iceCream} src={iceCream} alt="" />
        <li className={navStyle.navLink}>
          <img src={aboutButton} alt="" />
        </li>
        <li className={navStyle.navLink}>
          <img src={contactButton} alt="" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
