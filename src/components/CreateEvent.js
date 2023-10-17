import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreateEvent = (props) => {
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        event_name: '',
        location: '',
        date: 'yay',
        created_by: '',
        price: '',
        genre: '',
        
    })
const onChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value})
}
const onSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/create/event', event)
    .then((res) =>{
        setEvent({
            event_name: '',
            location: '',
            date: '',
            created_by: '',
            price: '',
            genre: '',
        })
        // push to
        navigate('/view/events')
    })
    .catch((err) => {
        console.log('Error in CreateEvent')
    })
}

return (

    <div className='CreateEvent'>
        <Link to='/view/events'> View Events</Link>
        <h1>Create new event </h1> 
        <form noValidate onSubmit={onSubmit}>
            <input type='text'
             placeholder='Name of the event' 
             name='event_name' 
             defaultValue={event.event_name}
              onChange={onChange}
              required />
          

            <input type='text'
             placeholder='Location' 
             name='location' 
             defaultValue={event.location}
              onChange={onChange} 
              required
              />

                  <input type='date'
             placeholder='Date' 
             name='date' 
             defaultValue={event.date}
              onChange={onChange}
              required
               />

                <input type='text'
             placeholder='Created by' 
             name='created_by' 
             defaultValue={event.created_by}
              onChange={onChange} 
              required
              />
              
                  <input type='text'
             placeholder='Genre' 
             name='genre' 
             defaultValue={event.genre}
              onChange={onChange} 
              required
              />

            <input type='text'
             placeholder='Price' 
             name='price' 
             defaultValue={event.price}
              onChange={onChange} 
              required
              />

            <input type='submit'/>
        </form>
        
    </div>
    
)

  }
  
  export default CreateEvent;

