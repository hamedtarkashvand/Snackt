import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Snackt from '../../src/component/snackbar/index';

const App = () => {
  
  const setting = {
    text: "Notification Message",
    color: "white",
    bgColor: "black",
    duration: 5000,
    actionButton: true,
    actionButtonText: "OK",
    icon: "warning",
  }
  return <Snackt setting = {setting} />;
};

ReactDOM.render(<App />, document.getElementById('root'));