
import './App.css';
import ChangePassword from './Components/Auth/ChangePassword';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuestionBank from './Components/Topics/QuestionBank';
import UserProfile from './Components/Auth/UserProfile';
import CreateUser from './Components/Auth/CreateUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Auth Path */}
          <Route path='/' element={<Login />}></Route>
          <Route path='/changepassword' element={<ChangePassword />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/profile' element={<UserProfile />}></Route>
          <Route path='/signup' element={<CreateUser />}></Route>

          {/* Question bank path */}
          <Route path='/questionbank' element={<QuestionBank />}></Route>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
