import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Signin from './component/Signin';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='signin' element={<Signin/>}/>
    </Routes>
    </>
  );
}

export default App;
