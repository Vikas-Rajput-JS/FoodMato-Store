import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Card from './Components/Card';
import Cart from './Components/Cart';
import ProductDetail from './Components/ProductDetail';


function App() {

 

  

  return (
    <div className="App w-[100%] h-[100vh] bg-orange-400 flex  items-center flex-col">
     <Header/>
     <div className='w-[100%] h-93vh] bg-transparent overflow-auto flex justify-center items-center  '>

     
<BrowserRouter>
<Routes>

 

<Route path='/Cart' element={<Cart/>}/>
<Route path='/' element={<Card/>}/>
<Route path='/Cart/:id' element={<ProductDetail/>}/>











</Routes>
</BrowserRouter>

</div>
    </div>
  );
}

export default App;
