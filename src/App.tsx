import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import FormContainer from './components/FormContainer';
import LoginFormContainer from './components/LoginFormContainer';

const cookie = document.cookie.split(';').filter((item) => item.trim().startsWith('token=')).length;

export const App: React.FC = () => {
  return (
    <div>
      {cookie ? <Redirect to='/profile' /> : <Redirect to='/login' />}
      <Route path='/profile' render={() => <FormContainer />} />
      <Route path='/login' render={() => <LoginFormContainer />} />
    </div>
  );
};
export default App;