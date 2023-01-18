import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginCallback } from '@okta/okta-react';
import { RequiredAuth } from './SecureRoute';
import Home from '../pages/Home';
import Loading from './Loading';
import Profile from '../pages/Profile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<RequiredAuth/>}/>
      <Route path="login/callback" element={<LoginCallback loadingElement={<Loading/>}/>}/>      
      <Route path="/profile" element={<RequiredAuth/>}>
        <Route path="" element={<Profile/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;