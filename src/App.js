import './App.css';
import Projects from './Components/Projects'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/" element={<Projects/>}/>
     </Routes>
     </Router>
  );
}

export default App;
