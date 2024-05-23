import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Error from './components/error';
import EditProfile from './components/Edituser';
import Landing from './pages/Landing';
import { AuthProvider } from './context/AuthContext';
import CRUD from './components/CRUD/CRUD';
import CreateEmployeeComponent from './components/CRUD/AddEmployee';
import UpdateEmployeeComponent from './components/CRUD/UpdateEmployee';



function App() {
  
  return(
    <div className="App">
      <AuthProvider>
      <Router>
        <Routes>
          <Route path='/profile' element={<EditProfile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/crud' element={<CRUD/>}/>
          <Route path="/add-employee" element={<CreateEmployeeComponent/>}/>
          <Route path="/update-employee/:id" element={<UpdateEmployeeComponent/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router></AuthProvider>
    </div>
  )
}

export default App;
