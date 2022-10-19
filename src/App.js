import './App.css';
import { Route, Routes } from 'react-router-dom';
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
