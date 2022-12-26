import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Event from './Event';


function ViewEvents() {
    const [events, setEvents] = useState([])

    useEffect(() =>{
        axios
        .get('http://localhost:5000/view/events')
        .then((res) => {
            setEvents(res.data);
        
    })
    .catch((err) => {
        console.log('Error from ViewEvents')
    })
},[]);

const eventList = 
events.length === 0 ? 'There is no event record' : events.map((events, k) =>
 <Event event={events} 
 key={k}
  />)
return (
    <div>
    <div className="EventList">
        <h2>Events</h2>
        </div>
    
    
    <div>
        <h3>Create new event</h3>
        <Link to="/create/event" />
        </div>


    <div className="list">{eventList}</div>
    </div>
)
} 

export default ViewEvents