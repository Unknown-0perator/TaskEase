import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import TaskList from './pages/TaskList/TaskList';
import TaskDetail from './pages/TaskDetail/TaskDetail';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import PostTask from './pages/PostTask/PostTask';
import Profile from './pages/Profile/Profile';




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profileData, setProfileData] = useState({});
  const [error, setError] = useState('')


  const API_URL = process.env.REACT_APP_BACKEND_URL;



  useEffect(() => {
    if (!sessionStorage.authToken) {
      return;
    }
    const authorization = { headers: { Authorization: sessionStorage.authToken } };
    axios.get(`${API_URL}/auth/profile`, authorization)
      .then(({ data }) => {
        setIsLoggedIn(true);
        setProfileData(data[0])
      })
      .catch(err => setError(err.message))
  }, [API_URL])

  return (
    <BrowserRouter>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='tasks' element={<TaskList />} />
        <Route path='tasks/:taskId' element={<TaskDetail
          API_URL={API_URL}
          profileData={profileData}
          isLoggedIn={isLoggedIn}
        />} />
        <Route path='sign-up' element={<SignUp
          API_URL={API_URL}
          isLoggedIn={isLoggedIn}
          setProfileData={setProfileData}
          setIsLoggedIn={setIsLoggedIn}
        />} />
        <Route path='login' element={<Login
          API_URL={API_URL}
          isLoggedIn={isLoggedIn}
          setProfileData={setProfileData}
          setIsLoggedIn={setIsLoggedIn}
        />} />
        <Route path='post-task' element={<PostTask
          isLoggedIn={isLoggedIn}
          profileData={profileData}
        />} />
        <Route path='profile' element={<Profile
          isLoggedIn={isLoggedIn}
          profileData={profileData}
          API_URL={API_URL}
        />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
