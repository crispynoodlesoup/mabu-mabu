import navStyle from "./nav.module.css";
import homeButton from "../../assets/home_selected.svg";
import shopButton from "../../assets/shop.svg";
import aboutButton from "../../assets/about.svg";
import contactButton from "../../assets/contact.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/" className={`${navStyle.navLink} ${navStyle.selected}`}>
          <img src={homeButton} alt="" />
        </Link>
        <Link to="/shop" className={navStyle.navLink}>
          <img src={shopButton} alt="" />
        </Link>
        <Link to="/about" className={navStyle.navLink}>
          <img src={aboutButton} alt="" />
        </Link>
        <Link to="/contact" className={navStyle.navLink}>
          <img src={contactButton} alt="" />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
