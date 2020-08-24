import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RegisterForm from './components/RegisterForm';
import './App.css';

const App = () => {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  });
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <code>WORN</code>
        </p>
        <RegisterForm />
      </header>
    </div>
  );
};

export default App;
