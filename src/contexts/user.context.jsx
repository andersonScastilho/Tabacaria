import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({
  currentUser: null,
  isAuthenticated: false,
  LoginUser: () => {},
  LogoutUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const isAuthenticated = currentUser !== null;

  const LoginUser = (user) => {
    setCurrentUser(user);
  };

  const LogoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        LoginUser,
        LogoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
