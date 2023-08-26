import './singelApp.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
let [double,setDouble] = useState(false)
function clickHandel() {
    props.open_app(props.text)
    props.minimal_app(props.text)

    props.goToTheTOp(props.text)
    props.setposition_inPage()
}

    return (
        <div to={`${props.text}`} id='singelApp' onClick={clickHandel}>
            <div className='app_icon'>
                <img src={props.img} alt={props.alt} width={props.width_icon}/>
            </div>

            <div className='app_text'>
                <h5>
                    {props.text}
                </h5>
            </div>
        </div>
    )
}
 