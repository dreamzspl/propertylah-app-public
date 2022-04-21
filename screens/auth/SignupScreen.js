import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState, useContext } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles, textStyles, helperStyles } from "../../styles/common";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import Colors from "../../constants/colors";
import FormButton from "../../components/UI/FormButton";
import { signupUser } from "../../utils/auth";
import { AuthContext } from "../../store/auth-context";

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function SignupScreen({ navigation }) {
  const [isSigningUp, setIsSigningUp] = useState(false);
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

  async function signUpBtnHandler() {
    // validate inputs
    if (
      inputs.firstName.length === 0 ||
      inputs.lastName.length === 0 ||
      inputs.password.length === 0
    )
      return Alert.alert("Validation Error", "Fields cannot be empty!");

    setIsSigningUp(true);
    // sign up
    try {
      const { id, firstName, role, token } = await signupUser(inputs);
      authCtx.authenticate(id, firstName, role, token);
      // resetFormHandler();
      // Alert.alert("Sign Up Success!", "Logging you in");
    } catch (error) {
      Alert.alert("Sign Up Error!", error.message);
      setIsSigningUp(false);
    }
  }

  function loginLinkHandler() {
    navigation.replace("Login");
  }

  if (isSigningUp) return <LoadingOverlay message="Signing up..." />;
  else
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Text style={textStyles.headerText}>Sign Up</Text>
          <Text style={[textStyles.bodyText, helperStyles.mb20]}>
            For access to more personalized functions and saved searches, sign
            up for a FREE account today!
          </Text>
          <Text style={[textStyles.bodyText, helperStyles.mb20]}>
            Already a member?
            <Text style={textStyles.linkText} onPress={loginLinkHandler}>
              {" "}
              Log in{" "}
            </Text>
            instead.
          </Text>
          <Text style={customStyles.labelText}>First Name</Text>
          <View style={[customStyles.inputField, helperStyles.mb20]}>
            <TextInput
              style={customStyles.inputText}
              placeholder="Enter your first name"
              autoCorrect={false}
              onChangeText={(text) => inputHandler("firstName", text)}
              name="firstName"
              value={inputs.firstName || ""}
            />
          </View>
          <Text style={customStyles.labelText}>Last Name</Text>
          <View style={[customStyles.inputField, helperStyles.mb20]}>
            <TextInput
              style={customStyles.inputText}
              placeholder="Enter your last name"
              autoCorrect={false}
              onChangeText={(text) => inputHandler("lastName", text)}
              name="lastName"
              value={inputs.lastName || ""}
            />
          </View>
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
            <FormButton onPress={signUpBtnHandler}>Sign Up</FormButton>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
}

export default SignupScreen;

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
