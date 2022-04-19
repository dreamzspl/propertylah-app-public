import { createContext, useState } from "react";

const defaultAuthDetails = {
  id: "",
  firstName: "",
  role: "",
  token: "",
};

export const AuthContext = createContext({
  id: "",
  token: "",
  firstName: "",
  role: "",
  isAuthenticated: false,
  authenticate: (id, token, firstName, role) => {},
  logout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState(defaultAuthDetails);

  function authenticate(id, firstName, role, token) {
    setAuthDetails({ id, firstName, role, token });
  }

  function logout() {
    setAuthDetails(defaultAuthDetails);
  }

  const contextValue = {
    id: authDetails.id,
    token: authDetails.token,
    firstName: authDetails.firstName,
    role: authDetails.role,
    isAuthenticated: !!authDetails.token,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
