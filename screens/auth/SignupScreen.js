import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles, textStyles, helperStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import FormButton from "../../components/UI/FormButton";

function SignupScreen({ onChoose }) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function formValuesHandler(value) {
    // to update form value
    console.log(value);
  }

  function signUpBtnHandler() {
    console.log("sign up");
  }

  function loginLinkHandler() {
    onChoose("login");
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={textStyles.headerText}>Sign Up</Text>
        <Text style={[textStyles.bodyText, helperStyles.mb20]}>
          For access to more personalized functions and saved searches, sign up
          for a FREE account today!
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
            onChangeText={formValuesHandler}
          />
        </View>
        <Text style={customStyles.labelText}>Last Name</Text>
        <View style={[customStyles.inputField, helperStyles.mb20]}>
          <TextInput
            style={customStyles.inputText}
            placeholder="Enter your last name"
            autoCorrect={false}
          />
        </View>
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
