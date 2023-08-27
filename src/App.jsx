import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import TaskList from './pages/TaskList/TaskList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profileData, setProfileData] = useState({});

  const API_URL = process.env.REACT_APP_BACKEND_URL;



  useEffect(() => {
    if (!sessionStorage.bearerToken) {
      return;
    }
    const authorization = { headers: { Authorization: sessionStorage.bearerToken } };
    axios.get(`${API_URL}/user/profile`, authorization)
      .then(({ data }) => {
        setIsLoggedIn(true);
        setProfileData(data)
      })
      .catch(err => console.log(err))
  }, [])
  return (

    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} profileData={profileData} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='login' element={<Login isLoggedIn={isLoggedIn} setProfileData={setProfileData} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='tasks' element={<TaskList />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
