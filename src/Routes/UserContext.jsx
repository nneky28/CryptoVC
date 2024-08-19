import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState('startup');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setIsAuthenticated(true);
      setUserType(user.userType || 'startup'); 
      setCurrentUser(user);
    } else {
      setIsAuthenticated(false);
      setUserType('startup');
      setCurrentUser(null);
    }
  }, []);

  const login = (user) => {
    if (user.userType) {
      setIsAuthenticated(true);
      setUserType(user.userType);
      setCurrentUser(user);

      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      console.error("User type is missing");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType('startup');
    setCurrentUser(null);
    localStorage.clear();
  };

  const updateUserType = (newUserType) => {
    setUserType(newUserType);

    if (currentUser) {
      const updatedUser = { ...currentUser, userType: newUserType };
      setCurrentUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider value={{ userType, isAuthenticated, currentUser, login, logout, updateUserType }}>
      {children}
    </UserContext.Provider>
  );
};
