import React from 'react';


export default function Todo(props){

    return(
        <div>
            <li id={props.id} className="li_element">
                {props.name}
                <button type="button" onClick={() => props.deleteTask(props.id)}>
                    Delete
                </button>
            </li>
        </div>
        
    )
}