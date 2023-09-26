import "./welcome.css";
import Buttons from "../tools_side/lang-panel";
import { Link } from "react-router-dom";
import App_controle_UpPanel from "../tools_side/app_controle_UpPanel";

export default function welcome({ props }) {
  function go_to_lp_dashbord() {
    history.push("/lp/dashbord");
  }
  return (
    <div className="welcome_laptop">
      <div id="title_square">
        <h1 className="title">EL AMRANI Hassan</h1>
      </div>
      <br />
      <br />
      <br />
      <main>
        <div className="welcome_text">
          <p>
            👋 Hi there, I'm Hassan, a full stack developer who loves crafting
            digital wonders.
            <br />
            <br />
            🚀 I'm a highly skilled developer over both front-end and back-end
            technologies. My versatility, agility, and deep respect for coding
            principles define my approach.
              🌟 I'm not just proficient; I'm a polymath, ready to tackle any
              application, from streaming apps to complex systems.
            
            <br />
            <p className="addetional_para">
              Curious to learn more about me? Just tap that "Start" button and
              let's explore together!
            </p>
          </p>
        </div>

        <div className="welcome_side_button">
          <Link to={"/"} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
            <h2>Share</h2>
          </Link>
          <br />
          <br />
          <br />
          <Link to={"/lp/dashbord"} className="btn">
            <h2>START</h2>
          </Link>
        </div>
        {/* ---------------------------------phone side buttons-------------------------------- */}
        <div className="welcome_phone_side_button">
          <Link to={"/"} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
            <h2>Share</h2>
          </Link>

          <Link to={"/"} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-file-earmark-person"
              viewBox="0 0 16 16"
            >
              <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
            <h2>CV</h2>
          </Link>
        </div>
      </main>

      {/* news bar ----------------------------- */}

      {/* <div className="news_bar">
        <Link to={"/lp/dashbord"} className="btn">
          <h2>START</h2>
        </Link>

        <p className="news_bar_text">
          Communication: Bridging code and understanding.
        </p>
      </div> */}

      {/* -------------------------------------------phone actions---------------------------- */}

      <div className="phone_actions">
        <Link to={"ph/dashbord"} className="btn">
          <h1>START</h1>
        </Link>
      </div>
      <App_controle_UpPanel />
    </div>
  );
}
