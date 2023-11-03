// eslint-disable-next-line
import navStyle from "./nav.module.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li className={navStyle.navLink}>HOME</li>
        <li className={navStyle.navLink}>SHOP</li>
        <li className={navStyle.navLink}>ABOUT</li>
        <li className={navStyle.navLink}>CONTACT</li>
      </ul>
    </nav>
  );
}

export default Nav;
