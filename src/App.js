import React from 'react';
import HelloWorld from './components/Hello';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Header ></Header>
      <HelloWorld name="Ozil"/>
      <Footer></Footer>
    </div>

  );
}

export default App;
