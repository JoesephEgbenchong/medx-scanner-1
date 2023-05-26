import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Scan from './pages/Scan';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new-scan' element={<Scan />}></Route>
        <Route path='*' element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
