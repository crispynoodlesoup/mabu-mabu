import style from "./style.module.css";
import Nav from "./components/nav/nav";
import { Outlet } from "react-router-dom";

function App() {
  let backgroundLength = 9;
  let backgroundArray = [];
  for (let i = 0; i < backgroundLength; i++) backgroundArray.push(i);

  return (
    <div className={style.pageContainer}>
      <div className={style.pageContent}>
        <Nav/>
        <Outlet />
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
