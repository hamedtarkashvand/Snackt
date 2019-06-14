import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Snackt from '../../src/component/snackbar/index';
// import "./style.css"



const App = () => {
  
  const setting = {
    text: "خطای رخ داده است ",
    styles :{
      color: "red",
      backgroundColor : " black",
      width :"calc(100% - 100px)",
      borderRadius:"10px",
      margin:"auto",
      padding:"10px",
      direction:"rtl"
    },
    thems:"",
    duration: 5000,
    actionButton: true,
    actionButtonText: "OK",
    icon: "warning",
  }
  return <Snackt setting = {setting} />;
};

ReactDOM.render(<App />, document.getElementById('root'));