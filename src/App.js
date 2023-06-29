import React from 'react';
import './sass/App.scss';
import Navbar from '../src/components/Navbar'
import AppRoutes from '../src/routes/route'


function App() {

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
