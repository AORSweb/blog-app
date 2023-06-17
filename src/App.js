import React, {useState} from 'react';
import './sass/App.scss';
// import Login from './components/login';
// import Register from './components/Register';
import AppRoutes from '../src/routes/route'

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
