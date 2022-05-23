import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Order from './Pages/Order/Order';

function App() {
  return (
    <div className="font">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/order/:id' element={<Order></Order>}></Route>
      </Routes>
    </div>
  );
}

export default App;
