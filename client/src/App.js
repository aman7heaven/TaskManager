import React from 'react'
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import MyTasks from './screens/MyTasks/MyTasks';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import CreateTask from './screens/CreateTask/CreateTask'
import UpdateTask from './screens/updateTask/UpdateTasks.js'

const App = () => (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' Component={LandingPage}/>
      <Route path='/login' Component={LoginPage}/>
      <Route path='/register' Component={RegisterPage}/>
      <Route path='/mytasks' Component={MyTasks}/>
      <Route path='/createtask' Component={CreateTask}/>
      <Route path='/task/:id' Component={UpdateTask}/>
    </Routes>
    <Footer/>
  </BrowserRouter> 
);

export default App;
