import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import InvestSignUp from '../Pages/InvestorSignUp/InvestSignUp';
import { CreateProject } from '../Pages/CreateProject/CreateProject';
import Details from '../Pages/Details';
import Withdraw from '../Pages/Withdraw';
import PrivateRoute from './PrivateRoute';

export default function IndexRoutes() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/InvestSignUp" element={<InvestSignUp />} />
            <Route path="/CreateProject" element={<CreateProject />} />
            <Route path="/details" element={<Details />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/withdraw" element={<Withdraw />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
