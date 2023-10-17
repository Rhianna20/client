import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

// Components 
import CreateEvent from './components/CreateEvent'
import EditEvent from './components/EditEvent';
import ViewEvents from './components/ViewEvents';
import ViewEventDetails from './components/ViewEvent';
//import LogIn from './components/LoginIn';
// import SignUp from './components/SignUp';
class App extends Component {
  render(){
  return (
   
      <div>
        <BrowserRouter>
        <Routes>
          <Route exact path='/view/events' element={<ViewEvents/>} />
          <Route  path='/create/event' element={<CreateEvent/>} />
          <Route  path='/edit/event/:id' element={<EditEvent/>} />  
          <Route  path='/view/event/:id' element={<ViewEventDetails/>} />  
          {/* <Route  path='/signup' element={<SignUp/>} /> */}
          {/* <Route   path='/signup' element={<LogIn/>}  /> */}
        </Routes>
        </BrowserRouter>
      </div>
   

  )
}
}
export default App; 
