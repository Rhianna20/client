import React, { useState, useEffect } from 'react';
import {Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ViewEventDetails(props) {
    const [event, setEvent] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`http://localhost:5000/view/event/${id}`)
        .then((res) => {
            setEvent(res.data);
        })
        .catch((err) => {
            console.log('Error from ViewEvent')
        })
    }, [id]
    )
    const onDeleteClick = (id) => {
        axios
        .delete(`http://localhost:5000/delete/event/${id}`)
        .then((res) => {
            navigate('/view/events')
        })
        .catch((err) => {
            console.log('Error from ViewEvent onDeleteClick')
        })
    }

    const EventItem = ( 
        <div>
            <table>
            <tbody>
                <tr>
                <th scope='row'>1 </th>
                    <td> Event Name</td>
                    <td>{event.event_name}</td>
                </tr>

                <tr>
                <th scope='row'>2 </th>
                    <td> Location</td>
                    <td>{event.location}</td>
                </tr>

                <tr>
                <th scope='row'>3 </th>
                    <td> Genre</td>
                    <td>{event.genre}</td>
                </tr>

                <tr>
                <th scope='row'>4 </th>
                    <td> Date</td>
                    <td>{event.date}</td>
                </tr>

                <tr>
                <th scope='row'>5 </th>
                    <td> Price</td>
                    <td>{event.price}</td>
                </tr>

                <tr>
                <th scope='row'>6 </th>
                    <td> Created by</td>
                    <td>{event.created_by}</td>
                </tr>

            </tbody>
            </table>
            </div>
    )
    return (
        <div>
            <Link to='/view/events'>
                View Event List
            </Link>

            <h1> Event details</h1>
            <p> View Event details</p>
           {EventItem} 
            <button type='button' onClick={() => {
                onDeleteClick(event.id)
            }}
            >Delete Event</button>

            <Link to={`/edit/event/${id}`} >
                Edit Event
            </Link>
        </div>
    )
}

export default ViewEventDetails;