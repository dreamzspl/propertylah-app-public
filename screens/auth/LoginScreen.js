import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles, textStyles, helperStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import FormButton from "../../components/UI/FormButton";

function LoginScreen({ onChoose }) {
  const [formValues, setFormValues] = useState({});

  function signUpBtnHandler() {
    console.log("sign up");
  }

  function signupLinkHandler() {
    onChoose("signup");
  }

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
          />
        </View>
        <Text style={customStyles.labelText}>Password</Text>
        <View style={[customStyles.inputField, helperStyles.mb20]}>
          <TextInput
            style={customStyles.inputText}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
        <View style={customStyles.buttonsContainer}>
          <FormButton>Reset</FormButton>
          <FormButton onPress={signUpBtnHandler}>Log In</FormButton>
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
