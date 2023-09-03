import "./inPage.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function InPage(props) {
  let [show_medel_icon, setShowMedelIcon] = useState(false);

  let params = useParams();
  function toggel_scale_icon() {
    setShowMedelIcon(!show_medel_icon);
  }
  function minimal_toggel() {
    props.minimal_app(props.text);
  }

  function closeHandel() {
    props.close_app(props.text);
    props.setRender((old) => !old);
  }

  return (
    <div
      className={`inPage ${show_medel_icon ? "full_size" : ""} ${
        props.minimal ? "minimall" : ""
      }`}
      style={{
        display: props.text && !props.minimal ? "block" : "none",
        top: !show_medel_icon ? `${props.top + Math.floor(Math.random() * 20)}px` : null,
        left: !show_medel_icon ? `${props.left + Math.floor(Math.random() * 30)}px` : null,

      }}
    >
      <div className="inPge_header">
        <div className="title">
          <h3>{props.text}</h3>
        </div>

        <div className="file_root_bar">
          <p>C:\home\{props.text}</p>
        </div>

        <div className="inpage_controles">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-circle inpage_clouser"
            viewBox="0 0 16 16"
            color="red"
            onClick={closeHandel}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>

          {/* ----------------------------------------------------------------------------- */}
          <svg
            display={show_medel_icon === false ? "none" : null}
            onClick={toggel_scale_icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-aspect-ratio-fill scale_up"
            viewBox="0 0 16 16"
          >
            <path d="M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1h-3zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1h3z" />
          </svg>
          {/* ------------------------------------------------------------------------------------------- */}
          <svg
            display={show_medel_icon === true ? "none" : null}
            onClick={toggel_scale_icon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-aspect-ratio scale_down"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
            <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
          </svg>
          {/* ---------------------------------------------------------------------------------- */}
          <svg
            onClick={minimal_toggel}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-down-left-circle minimal_icon"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
