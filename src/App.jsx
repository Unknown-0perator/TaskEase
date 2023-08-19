import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
