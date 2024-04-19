import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserPanel from './component/userpanel';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<UserPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
