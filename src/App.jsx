import style from "./style.module.css";

function App() {
  let backgroundLength = 9;
  let backgroundArray = [];
  for(let i = 0; i < backgroundLength; i++)
    backgroundArray.push(i);

  return (
    <div className={style.home}>
      <div className={style.background}>
        {backgroundArray.map((panelNum) => <div key={panelNum}></div>)}
      </div>
    </div>
  );
}

export default App;
