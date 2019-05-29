import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../../src';

const classes={
  fontSize:12,
  color:'red',
  width:'100%',
  margin:'0 auto',
  padding:10
}

const App = () => {
  return <HelloWorld classes={classes} greetings={"Hello IRC"} />;
};

ReactDOM.render(<App />, document.getElementById('root'));