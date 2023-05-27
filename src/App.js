import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Scan from './pages/Scan';
import NoPage from './pages/NoPage';
import Feedback from './pages/Feedback';
import Successful from './pages/Successful';
import Failed from './pages/Failed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new-scan' element={<Scan />}></Route>
        <Route path='/scanning' element={<Feedback />}></Route>
        <Route path='/verified' element={<Successful />}></Route>
        <Route path='/verification-failed' element={<Failed />}></Route>
        <Route path='*' element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
