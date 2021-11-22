import React from 'react';
import  { NavBar }  from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';




function App() {

  return (
    <>
      <BrowserRouter>

      <NavBar/>
    <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:catId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
        <Route path="/cart" element={ <CartView /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
      
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
