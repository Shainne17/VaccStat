import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/index';
import { Home, Certificate } from './container/index';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/certificate" element={<Certificate add={false} />}/>
          <Route path="/admin" element={<Certificate add={true} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
