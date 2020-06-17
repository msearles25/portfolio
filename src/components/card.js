import React from 'react';

import '../css/projectCard.css'
import curio from '../images/curio.png'

const Card = props => {
    return (
       <div className='card'>
           <div className='imageContainer'>
                <img src={curio}/>
           </div>

           <div className='contentContainer'>
                <h4>Curio</h4>
                
                <p>React</p>
                <p>CSS/Sass</p>
                <p>Node</p>
           </div>
       </div>
    )
}

export default Card;