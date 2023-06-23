import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Store2 from './pages/Store2/Store2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/store2' element={<Store2/>}/>
      </Routes>
    </div>
  );
}

export default App;
