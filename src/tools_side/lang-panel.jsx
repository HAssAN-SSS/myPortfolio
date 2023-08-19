import "./lang-panel.css";

export default function Lang_panel(props) {
  return (
    <div className="lang-panel">
      <p>{props.lang}</p>
    </div>
  );
}
