import './app_controle_UpPanel.css'
import Lang_panel from './lang-panel'
import { useState } from 'react';

export default function App_controle_UpPanel(){

  let [dark, setDark] = useState(false);
  let [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );
  function dark_mode() {
    console.log(dark);
    if (dark === false) {
      document.documentElement.style.setProperty("--blanco", "#3C4A51");
      document.documentElement.style.setProperty("--black_100", "#F2F5F7");
      document.getElementById("sun").style.setProperty("display", "none");
      document.getElementById("moon").style.setProperty("display", "block");
      setDark(true);
    } else {
      document.documentElement.style.setProperty("--blanco", "#F2F5F7");
      document.documentElement.style.setProperty("--black_100", "#3C4A51");
      document.getElementById("sun").style.setProperty("display", "block");
      document.getElementById("moon").style.setProperty("display", "none");
      setDark(false);
    }
  }
    return (
        <div id='app_controle_UpPanel' style={{display:'block'}}>
            <Lang_panel lang="EN"/>
            <div className="dark_mode">
            <svg
              onClick={dark_mode}
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              fill="currentColor"
              className="bi bi-brightness-low"
              id="sun"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
            </svg>

            {/* ---------------------------------dark mod */}

            <svg
              onClick={dark_mode}
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              fill="currentColor"
              className="bi bi-brightness-low-fill"
              id="moon"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
            </svg>
          </div>
    </div>

        
    )
}