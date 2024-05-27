
import './App.css';
import ChangePassword from './Components/Auth/ChangePassword';
import Login from './Components/Auth/Login';
import Logout from './Components/Auth/Logout';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuestionBank from './Components/QuestionBank/QuestionBank';
import UserProfile from './Components/Auth/UserProfile';
import CreateUser from './Components/Auth/CreateUser';
import GetAllUsers from './Components/Admin/GetAllUsers';
import ChangeUserType from './Components/Admin/ChangeUserType';
import Topic from './Components/Topics/Topic';
import GetUserByID from './Components/Admin/GetUserByID';
import DeleteUser from './Components/Admin/DeleteUser';
import AddTopic from './Components/Topics/AddTopic';
import OwnerTopicList from './Components/Topics/OwnerTopicList';
import DeleteTopic from './Components/Topics/DeleteTopic';
import AddUser from './Components/Admin/AddUser';
import Dashboard from './Components/Admin/Dashboard';
import EditTopic from './Components/Topics/EditTopic';
import AddQuestion from './Components/QuestionBank/AddQuestion';
import AddQuestionChoiceForm from './Components/QuestionBank/AddQuestionChoiceForm';
import DeleteQuestion from './Components/QuestionBank/DeleteQuestion';
import UserAcessLevelList from './Components/Topics/UserAcessLevelList';
import UserUpdateForm from './Components/Admin/EditUser';
import GetAllTopicsList from './Components/Admin/GetAllTopicsList';
import ProvideAccess from './Components/Topics/ProvideAccess';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Auth Path */}
          <Route path='/' element={<Login />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/changepassword' element={<ChangePassword />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/profile/:id' element={<UserProfile />}></Route>
          <Route path='/signup' element={<CreateUser />}></Route>


          {/* Admin routes */}
          <Route path='/getallusers' element={<GetAllUsers />}></Route>
          <Route path='/changeusertype/:id' element={<ChangeUserType />}></Route>
          <Route path='/getuserbyid/:id' element={<GetUserByID />}></Route>
          <Route path='/delete/:id' element={<DeleteUser />}></Route>
          <Route path='/adduser' element={<AddUser />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='edituser/:id' element={<UserUpdateForm />}></Route>
          <Route path='/getalltopics' element={<GetAllTopicsList/>}></Route>

          {/* Topic Routes */}
          <Route path='/topic' element={<Topic />}></Route>
          <Route path='/addtopic' element={<AddTopic />}></Route>
          <Route path='/deletetopic/:id' element={<DeleteTopic />}></Route>
          <Route path='/edittopic/:id' element={<EditTopic />}></Route>

          {/* Question bank path */}
          <Route path='/questionbank' element={<QuestionBank />}></Route>
          <Route path='/addquestion' element={<AddQuestion />}></Route>
          <Route path='/qestionchoices' element={<AddQuestionChoiceForm />}></Route>
          <Route path='/deletequestion/:id' element={<DeleteQuestion />}></Route>


          {/* User-Topic table routes */}
          <Route path='/ownerlist' element={<OwnerTopicList />}></Route>

          {/* Users Access levels list route */}
          <Route path='/usersaccesslevel' element={<UserAcessLevelList />}></Route>

<Route path='/provideaccess/:id' element={<ProvideAccess/>}></Route>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
