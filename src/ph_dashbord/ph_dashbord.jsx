import SingelApp from "../lp_dashbord/singelApp";
import "./ph_dashbord.css";
import { Link } from "react-router-dom";

export default function Ph_dashbord() {
  return (
    <div id="ph_dashbord">
      <header>
        <Link to={'/'} id="return_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </Link>

        <div id="phone_bar">
            <p>
             

            </p>
        </div>
      </header>


      <div id="show_tv">
      <p className="temporary_text">Mobile feature in progress! For now, enjoy the desktop version. 👨‍💻📱</p>
      </div>


      <div id="four_apps">
        <Link>
      <SingelApp
          img="/img/skills.png"
          alt="tme"
          text="Soft-Skills"
          width_icon="32px"
          />
        </Link>

        <Link>
        <SingelApp
          img="/img/infrastructure.png"
          alt="tme"
          text="Hard-Skills"
          width_icon="32px"
          />
          </Link>

          <Link to={'/ph/dashbord/projects'}>
        <SingelApp img="/img/planning.png" alt="tme" text="Projects" width_icon="32px" />
          </Link>

          <Link >
        <SingelApp img="/img/man.png" alt="tme" text="About Me" width_icon="32px" />
          </Link>

      </div>
      <Link className="btn contactMe">
        <h3>Contact Me</h3>
      </Link>
    </div>
  );
}
