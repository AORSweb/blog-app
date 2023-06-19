import React, {useState} from 'react';
import './sass/App.scss';
// import Login from './components/login';
// import Register from './components/Register';
import AppRoutes from '../src/routes/route'
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;
