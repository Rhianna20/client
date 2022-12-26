import React from 'react';
import { Link } from 'react-router-dom';



const Event = (props) => {

    return (
        <div>
             <h2>
            <Link to={`/view/event/${props.event._id}`}>{props.event.event_name}  </Link>
            </h2>
           <h3>{props.event.location}</h3>
             
        </div>
    )
}

export default Event ;