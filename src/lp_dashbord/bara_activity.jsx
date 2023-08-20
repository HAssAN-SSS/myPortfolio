import "./bara_activity.css";

export default function Bara_activity(props) {
  function open_apps() {}
  let open_apps_list = props.open_apps_list.map((element) => {
    return (
      <div className="open_one_app">
        <img src={element.src} alt="" width={"24px"} />
        <h5>{element.text}</h5>
      </div>
    );
  });
  console.log(props.open_apps_list);
  return (
    <div id="bara_activity">
      {open_apps_list}


    </div>
  );
}
