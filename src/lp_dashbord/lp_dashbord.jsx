import Bara_activity from "./bara_activity";
import "./lp_dashbord.css";
import SingelApp from "./singelApp";
import { useState } from "react";

export default function Lp_dashbord() {
  let [open_apps_list, setOpenAppsList] = useState([
    { src: "/img/gmail.png", text: "Email" },
    { src: "/img/setting.png", text: "Setting" },
    { src: "/img/power-on.png", text: "OFF" },
    
  ]);
  // setOpenAppsList(['/img/tme.png','/img/man.png'])
  return (
    <div id="lp_dashbord">
      <div id="lesApps">
        <SingelApp
          img="/img/tme.png"
          alt="tme"
          text="Convoi lourd"
          width="104px"
        />
        <SingelApp img="/img/man.png" alt="tme" text="About Me" width="32px" />
        <SingelApp
          img="/img/online-library.png"
          alt="tme"
          text="Biblio-App"
          width="32px"
        />
        <SingelApp img="/img/chat.png" alt="tme" text="chat-app" width="32px" />
        <SingelApp
          img="/img/skills.png"
          alt="tme"
          text="Soft-Skills"
          width="32px"
        />
        <SingelApp
          img="/img/infrastructure.png"
          alt="tme"
          text="Hard-Skills"
          width="32px"
        />
        <SingelApp
          img="/img/game-console.png"
          alt="tme"
          text="Game"
          width="32px"
        />
        <SingelApp img="/img/cv.png" alt="tme" text="CV" width="32px" />
        <SingelApp
          img="/img/letter.png"
          alt="tme"
          text="Motivation letter"
          width="32px"
        />
      </div>
      <Bara_activity open_apps_list={open_apps_list} />
      <div id="show_tv">
      </div>
    </div>
  );
}
