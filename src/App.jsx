import style from "./style.module.css";

function App() {
  let backgroundLength = 9;
  let backgroundArray = [];
  for (let i = 0; i < backgroundLength; i++) backgroundArray.push(i);

  return (
    <div className={style.pageContainer}>
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
      <div className={style.background}>
        {backgroundArray.map((panelNum) => (
          <div key={panelNum}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
