import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Error from './components/error';
import EditProfile from './components/Edituser';

function App() {
  
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/profile' element={<EditProfile/>}/>
          <Route path='/login' 
              element={
              
                <Login/>
              
               }
          />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
