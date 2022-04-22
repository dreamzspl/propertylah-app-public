import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState, useContext, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { styles, textStyles, helperStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import FormButton from "../../components/UI/FormButton";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";

const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const API_URL = "http://68.183.183.118:4088/api/v1/users/";

function ProfileScreen() {
  const authCtx = useContext(AuthContext);
  const [inputs, setInputs] = useState(initValues);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUserData() {
      try {
        setIsLoading(true);
        const res = await axios.get(`${API_URL}${authCtx.id}`);
        const { firstName, lastName, email } = res.data.data;
        setInputs({ firstName, lastName, email });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

  function updateUpBtnHandler() {
    console.log("update");
  }

  if (isLoading) return <LoadingOverlay message="Loading..." />;
  else
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Text style={textStyles.headerText}>My Profile</Text>

          <Text style={[textStyles.bodyText, helperStyles.mb20]}>
            Welcome, {authCtx.firstName}!
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
          <FormButton onPress={updateUpBtnHandler}>Update</FormButton>
        </KeyboardAwareScrollView>
      </View>
    );
}

export default ProfileScreen;

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
