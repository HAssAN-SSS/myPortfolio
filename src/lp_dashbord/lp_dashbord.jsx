import Bara_activity from "./bara_activity";
import InPage from "./inPge";
import "./lp_dashbord.css";
import SingelApp from "./singelApp";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { data } from "../../data";

export default function Lp_dashbord() {
  // let [dataState, setData] = useState(data);
  let [deskTopApps, setDeskTopApps] = useState(data.slice(0,data.length -3));
  let [cpn_desktopApps,setCpn_desktopApps ] = useState();
  let [nativ_bar_app, setNativeBarApp] = useState(data.slice(data.length -3,data.length));
  let [acitve_apps,setActive_apps] = useState([])
  let [inPages_list,setInPages_list] = useState([])
  let [render, setRender] = useState(false)
  let [actualInpage,setActualInpage] = useState(inPages_list[inPages_list.length - 1])
  let [left,setLeft] = useState(304)
  let [top,setTop] = useState(32)
  // let [topZPos,setTopZPos] = useState(0)



  function showing_app() {
    //? this app is for affiching all app in the disktop

    cpn_desktopApps = deskTopApps.map((elt) => {
      // console.log(deskTopApps)
        return (
          <SingelApp
          minimal_app = {minimal_app}
          setposition_inPage = {setposition_inPage}
            goToTheTOp = {goToTheTOp} 
            open_app = {open_app}
            key={elt.text}
            img={elt.img}
            alt={elt.alt}
            text={elt.text}
            width_icon={elt.width_icon}
            minimal={elt.minimal}
          />
        );
        }
    );
  }


  function affiching_activity_bar() {
    //? this app is for affiching the activity bar


    
  }

  function open_app(text) {
    //! this function is for afiching the inPges
    let double = false
    for (let elt of acitve_apps) {
      if (elt.text === text) {
        double = true
      }
    }
    // this if up is testing that if it is alredy active the app
    if (!double) {
      for (let elt of data) {
        
        if (elt.text === text) {
          setActive_apps(old => {
            return [...old,elt];
          })
        }
      }
      
      // i use the map to create the inPages
      
      
      
      
    }
    
   
      // i set the active app data
      setRender(!render)
      console.log('active',acitve_apps)
    }
    
    useEffect(() => {
      console.log('effect',acitve_apps)
      setInPages_list (old => {
        return (
        
          acitve_apps.map(elt => {
            return (
              
              <InPage
              minimal_app = {minimal_app}
              setRender = {setRender}
              close_app = {close_app}
              setActive_apps ={setActive_apps}
              acitve_apps = {acitve_apps}
              // setTopZPos ={setTopZPos}
              // topZPos ={topZPos}
              inPages_list ={inPages_list}
              setInPages_list={setInPages_list}
              key={elt.text}
              img={elt.img}
              alt={elt.alt}
              text={elt.text}
              width_icon={elt.width_icon}
              minimal={elt.minimal}
              open={elt.open}
              close={elt.close}
              big_small={elt.big_small}
              left ={left}
              top ={top}
              // pos_z={elt.pos_z}
            />
            );
          })
          )
        }
        ) 
  },[acitve_apps])




    function minimal_app(text) {
    //? this function is for the minimilisation of th inPage
      for (let elt of acitve_apps) {
        if (elt.text === text) {
          setActive_apps(old => {
            return (
              old.map(elt => {
                if (elt.text === text) {
                  return (
                    {...elt,minimal:!elt.minimal}
                  )
                }
                return elt
              })
            )
          })
        }
      }

    
    
  }
  
  function close_app(text) {
    //!this app is for closing the inPage and removing from the active bar
    let list =[]
    let elTop = {}
    setActive_apps(old => {
      list = []
      for (let elt of old) {
        if (elt.text === text) {
          // elTop = elt
        }
        else {
          list.push(elt)
        }
      }
      list.push(elTop)
      return list
    })

  }


  function goToTheTOp(text) {
    //!this function is for get the inPage to the top of the zindex

    let list =[]
    let elTop = {}
    setActive_apps(old => {
      list = []
      for (let elt of old) {
        if (elt.text === text) {
          elTop = elt
        }
        else {
          list.push(elt)
        }
      }
      list.push(elTop)
      return list
    })

  }
  function setposition_inPage () {
    if (left < 450 && top < 50) {
      setLeft(old => old + 0.5)
      setTop(old => old + 0.5)

    }
    else {
      setLeft(304)
      setTop(32)
    }
  }
  showing_app();
  affiching_activity_bar();
  return (
    <div id="lp_dashbord">
      <div>

      {inPages_list[inPages_list.length - 2]}
      </div>
      {inPages_list[inPages_list.length - 1]}
      <div id="lesApps">{cpn_desktopApps}</div>
      <Bara_activity
        minimal_app={minimal_app}
        goToTheTOp={goToTheTOp}
        open_apps_list={acitve_apps.concat(nativ_bar_app)}
      />
      <div id="show_tv"></div>
    </div>
  );
}
