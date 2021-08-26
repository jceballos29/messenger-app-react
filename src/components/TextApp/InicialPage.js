import React from 'react'
import '../../css/TextApp/InicialPage.css'
import ChatImage from '../../img/undraw_ideas_s70l.svg'

function InicialPage() {
    return (
        <div className="InicialPage">
            <img alt="Keep your world connected" src={ChatImage}/>
            <div>
                <h1>Keep your world connected.</h1>
                <h3>Start communicating.</h3>
            </div>
            
        </div>
    )
}

export default InicialPage
