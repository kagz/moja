import React from 'react';
import './App.css';
 import HelloWorld from './components/Hello';
// import CounterExample from './components/CounterExample'
function App() {
  return (
    <div className="App">
 <HelloWorld name="Ozil" secondName="Mesut"/>

 {/* <CounterExample/> */}
    </div>

  );
}

export default App;
