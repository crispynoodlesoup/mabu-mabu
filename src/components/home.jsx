import style from "../style.module.css";

function Home() {
    return (
        <div className={style.home}>
        <nav>
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <main>
          <div className={style.contentBubble}>
            <h1>MABU - MABU</h1>
          </div>
        </main>
      </div>
    );
}

export default Home;
