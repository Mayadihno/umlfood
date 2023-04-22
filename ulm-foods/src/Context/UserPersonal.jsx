import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserPersonal = ({ children }) => {
  const [person, setPerson] = useState(true);
  const login = (person) => {
    setPerson(person);
  };
  const logout = () => {
    setPerson(null);
  };
  const value = { login, logout, person };

  return (
    <React.Fragment>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </React.Fragment>
  );
};

export default UserPersonal;
