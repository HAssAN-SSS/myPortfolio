import './singelApp.css'

export default function (props) {

    return (
        <div id='singelApp'>
            <div className='app_icon'>
                <img src={props.img} alt={props.alt} width={props.width}/>
            </div>

            <div className='app_text'>
                <h5>
                    {props.text}
                </h5>
            </div>
        </div>
    )
}
 