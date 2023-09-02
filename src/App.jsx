import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import TaskList from './pages/TaskList/TaskList';
import PostTask from './pages/PostTask/PostTask';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profileData, setProfileData] = useState({});

  const API_URL = process.env.REACT_APP_BACKEND_URL;



  useEffect(() => {
    if (!sessionStorage.authToken) {
      return;
    }
    const authorization = { headers: { Authorization: sessionStorage.authToken } };
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
        <Route path='tasks/:id' element={<TaskDetail />} />
        <Route path='post-task' element={<PostTask profileData={profileData} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
