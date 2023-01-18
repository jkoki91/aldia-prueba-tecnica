import logo from './logo.svg';
import './App.css';
import React from 'react';
import Reloj from './components/reloj';
import Imagen from './components/imagen';
import ModalComponent from './components/modal';

function App() {
  return (
    
    <React.Fragment>
      <Reloj></Reloj>
      {/* <Imagen></Imagen> */}
      <ModalComponent></ModalComponent>
    </React.Fragment>
  );
}

export default App;
