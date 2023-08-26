import "./bara_activity.css";

export default function Bara_activity(props) {
  function minimal_toggel_bar(text ){
    props.minimal_app(text)
    props.goToTheTOp(text)
          }

  let open_apps_list = props.open_apps_list.map((element) => {
    return (
      element.text ? (
        <div className="open_one_app" key={element.text}  onClick={()  => minimal_toggel_bar(element.text)}>
          <img src={element.img} alt="" width={"24px"} />
          <h5>{element.text}</h5>
        </div>
      ) : null
    );
  });
  
  return (
    <div id="bara_activity">
      {open_apps_list}


    </div>
  );
}
