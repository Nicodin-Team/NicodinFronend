import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Landing from './component/landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
