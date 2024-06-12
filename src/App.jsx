import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Error from './components/error';
import EditProfile from './components/Edituser';
import Landing from './pages/Landing';
import { AuthProvider } from './context/AuthContext';

import AnnouncementPage from './components/Announcement/AnnouncementPage';

import SearchPaginationUsers from './pages/SearchPaginationUsers';

import Crud from './components/CRUD/CRUD';
// import AnnouncementDetailsDialog from './components/announcement_detail/AnnouncementDetailsDialog';



function App() {
  
  return(
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route path='/announcement' element={<AnnouncementPage/>}/>
          <Route path='/profile' element={<EditProfile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/users' element={<SearchPaginationUsers/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/crud' element={<Crud/>}/>
          <Route path='*' element={<Error/>}/>
          {/* <Route path='/dialog' element={<AnnouncementDetailsDialog/>}/> */}
        </Routes>
      </Router></AuthProvider>
    </div>
  )
}

export default App;
