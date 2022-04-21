import { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles, textStyles, helperStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import FormButton from "../../components/UI/FormButton";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { login } from "../../utils/auth";
import { AuthContext } from "../../store/auth-context";

const initValues = {
  email: "",
  password: "",
};

function LoginScreen({ navigation }) {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [inputs, setInputs] = useState(initValues);

  const authCtx = useContext(AuthContext);

  function resetFormHandler() {
    setInputs(initValues);
  }

  function inputHandler(field, value) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [field]: value,
      };
    });
  }

  async function loginBtnHandler() {
    // validate inputs
    if (inputs.email.length === 0 || inputs.password.length === 0)
      return Alert.alert("Validation Error", "Fields cannot be empty!");

    setIsLoggingIn(true);
    // login
    try {
      const { id, firstName, role, token } = await login(inputs);
      authCtx.authenticate(id, firstName, role, token);
      // Alert.alert("Log In Success!", "Logging you in");
    } catch (error) {
      Alert.alert("Log In Error!", error.message);
      setIsLoggingIn(false);
    }
  }

  function signupLinkHandler() {
    navigation.replace("Sign Up");
  }

  if (isLoggingIn) return <LoadingOverlay message="Logging in..." />;
  else
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Text style={textStyles.headerText}>Log In</Text>
          <Text style={[textStyles.bodyText, helperStyles.mb20]}>
            Not yet a member?
            <Text style={textStyles.linkText} onPress={signupLinkHandler}>
              {" "}
              Sign up here{" "}
            </Text>
            instead.
          </Text>

          <Text style={customStyles.labelText}>Email</Text>
          <View style={[customStyles.inputField, helperStyles.mb20]}>
            <TextInput
              style={customStyles.inputText}
              placeholder="Enter your email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => inputHandler("email", text)}
              name="email"
              value={inputs.email || ""}
            />
          </View>
          <Text style={customStyles.labelText}>Password</Text>
          <View style={[customStyles.inputField, helperStyles.mb20]}>
            <TextInput
              style={customStyles.inputText}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(text) => inputHandler("password", text)}
              name="password"
              value={inputs.password || ""}
            />
          </View>
          <View style={customStyles.buttonsContainer}>
            <FormButton onPress={resetFormHandler}>Reset</FormButton>
            <FormButton onPress={loginBtnHandler}>Log In</FormButton>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
}

export default LoginScreen;

const customStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  labelText: {
    fontSize: 22,
    fontFamily: "rubik-bold",
    color: Colors.grey500,
    marginBottom: 10,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputText: {
    fontSize: 24,
    fontFamily: "rubik",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
