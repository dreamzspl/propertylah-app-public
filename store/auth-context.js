import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "react-native-reanimated";

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

  useEffect(() => {
    async function fetchAuthDetails() {
      const storedAuthDetails = JSON.parse(
        await AsyncStorage.getItem("authDetails")
      );

      if (storedAuthDetails) {
        setAuthDetails(storedAuthDetails);
      }
    }

    fetchAuthDetails();
  }, []);

  function authenticate(id, firstName, role, token) {
    setAuthDetails({ id, firstName, role, token });
    AsyncStorage.setItem(
      "authDetails",
      JSON.stringify({ id, firstName, role, token })
    );
  }

  function logout() {
    setAuthDetails(defaultAuthDetails);
    AsyncStorage.removeItem("authDetails");
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
