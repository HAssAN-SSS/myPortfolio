import { useState } from "react";
import Welcome from "./welcome/welcome";
import Lang_panel from "./tools_side/lang-panel";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Lp_dashbord from "./lp_dashbord/lp_dashbord";
import Ph_dashbord from "./ph_dashbord/ph_dashbord";

function App() {
  let [dark, setDark] = useState(false);
  let [lang_dark, setLangDark] = useState("block");
  let params = useParams();
  let [ph_lp,setPhLp] = useState(null)
  
  function pohne_o_laptop(
    ) {

      if (window.innerWidth < 870) {
        setPhLp('phone')
      }else{
        setPhLp('laptop')
      }
    }
  
  // alert(window.location.pathname)
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome setDark={setDark} />} />
          <Route path="/lp/dashbord" element={<Lp_dashbord />} />
          (<Route path="/ph/dashbord" element={<Ph_dashbord />} />)
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
