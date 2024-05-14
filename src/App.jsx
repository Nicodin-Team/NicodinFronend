import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Error from './components/error';
import EditProfile from './components/Edituser';
import Landing from './pages/Landing';
import { AuthProvider } from './context/AuthContext';
import SearchPaginationUsers from './pages/SearchPaginationUsers';


function App() {
  
  return(
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route path='/profile' element={<EditProfile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/users' element={<SearchPaginationUsers/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router></AuthProvider>
    </div>
  )
}

export default App;
