import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState('startup');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
      setUserType(JSON.parse(user).userType);
    }
  }, []);

  const login = (user) => {
    setIsAuthenticated(true);
    setUserType(user.userType);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('state',isAuthenticated)
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType('startup');
    localStorage.removeItem('user');
  };

  const updateUserType = (newUserType) => {
    setUserType(userType);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      user.userType = userType;
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  return (
    <UserContext.Provider value={{ userType, isAuthenticated, login, logout, updateUserType }}>
      {children}
    </UserContext.Provider>
  );
};
