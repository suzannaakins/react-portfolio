import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
