import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


function EditEvent(props){
    const [event, setEvent] = useState({
        event_name: '',
        location: '',
        date: '',
        created_by: '',
        price: '',
        genre: '',
    })

    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios
          .get(`http://localhost:5000/edit/event/${id}`)
          .then((res) => {
            setEvent({
                event_name: res.data.event_name,
                location: res.data.location,
                date: res.data.date,
                created_by: res.data.created_by,
                price: res.data.price,
                genre: res.data.genre,
            });
          })
          .catch((err) => {
            console.log('Error from EditEvent');
          });
      }, [id]);



const onChange = (e) => {

    setEvent({
         ...event, [e.target.name]: e.target.value  })
};

const onSubmit = (e) => {
    e.preventDefault();

    const eventData = {
        event_name: event.event_name,
        location: event.location,
        date: event.date,
        created_by: event.created_by,
        price: event.price,
        genre: event.genre,
    }

    axios
    .patch(`http://localhost:5000/edit/event/${id}`, eventData)
    .then((res) => {
        navigate(`/view/event/${id}`)
    })
    .catch((err) => {
        console.log('Error in EditEvent')
    })
}
    return (
<div>
        <Link to='/view/events/'> View Events</Link>

        <h1>Edit Event</h1>
        <form noValidate onSubmit={onSubmit}>
            <input type='text'
             placeholder={'Name of the event'} 
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

            <button type='submit'> Update Event</button>

        </form>
        </div>
    )

} 

export default EditEvent;
