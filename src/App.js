import logo from './logo.svg';
import './App.css';
import LauderMain from './pages/lauderPage';
import Header from './pages/Header';
import Home from './pages/Home/index';
import Reports from './pages/Reports/index';
import Navbar from './components/NavBar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Menu } from 'antd';
import MainPage from './pages/MainPage';
import SignInpage from './pages/SignInPage';

function App() {
  return (
    <>
      <div>
        <Routes>
          {/* <Route path='/' element={<MainPage />} />
          <Route path='/option1' element={<Home />} />
          <Route path='/option2' element={<Reports />} /> */}

          {/* <Route path ='/' element={<MainPage />} />
          <Route path='/signIn' element={<SignInpage />} /> */}

          <Route path='/' element={<SignInpage />} />
          <Route path='/home' element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
