import { useState } from "react";

import SignupScreen from "./SignupScreen";
import LoginScreen from "./LoginScreen";

function AuthScreen() {
  const [authScreen, setAuthScreen] = useState("signup");

  function chooseScreenHandler(screen) {
    setAuthScreen(screen);
  }

  let chosenScreen;
  if (authScreen === "signup")
    chosenScreen = <SignupScreen onChoose={chooseScreenHandler} />;
  else if (authScreen === "login")
    chosenScreen = <LoginScreen onChoose={chooseScreenHandler} />;

  return <>{chosenScreen}</>;
}

export default AuthScreen;
