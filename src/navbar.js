import React from 'react'

 function navbar(props) {
    return (
        <ul className="list">
            {props.x.map (el =>
             <li className="down">{el.title}
             <ul className="drop">
             {!el.drop?null:el.drop.map(el =>
             <li>{el}</li>)}
             </ul>
             </li> )}    
        </ul> 
    );
}

export default navbar;
