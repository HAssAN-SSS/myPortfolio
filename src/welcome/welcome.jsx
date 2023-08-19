import './welcome.css'
import Buttons from '../tools_side/buttons'

export default function welcome() {
    return (
        <div className='welcome_laptop'>
            <div id='title_square'>
                <h1 className='title'>EL AMRANI Hassan</h1>
            </div>
            <main>

            <div className='welcome_text'>
                <p>

                    👋 Hi there, I'm Hassan, a full stack developer who loves crafting digital wonders.
                    <br />
                    <br />

                    Ready to embark on a journey through my projects?
                    Click "Start" below to discover captivating front-end designs, robust back-end systems, and the seamless blend of technology and creativity.
                    <br />
                    <br />
                    Curious to learn more about me? Just tap that "Start" button and let's explore together!
                </p>
            </div>
            <div className='welcome_side_button'>
                
                <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                    </svg>
                    <h2>share</h2>
                </button>
                <br />
                <br />
                <br />
                <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                    <h2>CV</h2>
                </button>

            </div>
            </main>

            {/* news bar ----------------------------- */}

            <div className='news_bar'>
                <button className='btn'>
                    <h2>
                        START
                    </h2>


                </button>
                
                
                    <p className='news_bar_text'>
                        Communication: Bridging code and understanding.
                        Communication: Bridging code and understanding.
                        Communication: Bridging code and understanding.
                    </p>

            </div>

        </div>
    )
}