import React, { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity, Modal, StyleSheet, SafeAreaView } from "react-native";
import API from "./API";

import Input from "../../components/UI/Input";
import PrimaryButton from "../../components/UI/PrimaryButton";
// import Dropdown from "../../components/UI/Dropdown";
import Colors from "../../constants/colors";

import { ModalPicker } from "../../components/UI/DropdownModalPicker";

const Dropdown = () => {
  const [ chooseCat, setChooseCat ] = useState('Select Category');
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  }

  const setData = (option) => {
    setChooseCat(option)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.labelText}>Category</Text>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => changeModalVisibility(true)}
      >
        <Text>{chooseCat}</Text>
      </TouchableOpacity>

      <Modal
        // transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker 
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  )
}



const QuestionForm = ({error, setOption}) => {
  const [ data, setData ] = useState({
    question: "",
    category: "",
    email: "",
    firstName: "",
    lastName: "",
    check_textInputChange: false,
    isValidUser: true,
    isLoading: true,
  })

  const [ err, setErr ] = useState(false);

  const onChangeQuestionHandler = (q) => {
    if (q) {
      setData({
        ...data,
        question: q,
        check_textInputChange: true,
        isValidUser: true
      })
    } else {
      setData({
        ...data,
        question: q,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  };

  const onChangeCategoryHandler = (cat) => {
    if (cat) {
      setData({
        ...data,
        category: cat,
        check_textInputChange: true,
        isValidUser: true
      })
    } else {
      setData({
        ...data,
        category: cat,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  };

  const onChangeEmailHandler = (email) => {
    if (email) {
      setData({
        ...data,
        email: email,
        check_textInputChange: true,
        isValidUser: true
      })
    } else {
      setData({
        ...data,
        email: email,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  };

  const onChangeFirstNameHandler = (firstName) => {
    if (firstName) {
      setData({
        ...data,
        firstName: firstName,
        check_textInputChange: true,
        isValidUser: true
      })
    } else {
      setData({
        ...data,
        firstName: firstName,
        check_textInputChange: false,
        isValidUser: false
      });
    }  };

  const onChangeLastNameHandler = (lastName) => {
    if (lastName) {
      setData({
        ...data,
        lastName: lastName,
        check_textInputChange: true,
        isValidUser: true
      })
    } else {
      setData({
        ...data,
        lastName: lastName,
        check_textInputChange: false,
        isValidUser: false
      });
    }  };

  const onSubmitFormHandler = async (e) => {
    if (!data.question.trim()) {
      alert("Question field cannot be empty.")
      setErr(true);
      return;
    } else if (!data.category.trim()) {
      alert("Please select a category.")
      setErr(true);
      return;
    } else if (!data.email.trim()) {
      alert("Please input your email.")
      setErr(true);
      return;
    } else if (!data.firstName.trim()) {
      alert("Please provide your first name.")
      setErr(true);
      return;
    } else if (!data.lastName.trim()) {
      alert("Please provide your last name.")
      setErr(true);
      return;
    }

    setData({ isLoading : true });

    try {
      const res = await API.post(`/questions`, {
        "question" : data.question,
        "category" : data.category,
        "email" : data.email,
        "firstName" : data.firstName,
        "lastName" : data.lastName
      });
      if ( res.status === 200 ) {
        alert(`You have created a question: ${JSON.stringify(res.data)}`);
        setData({ isLoading : false });  
        setData({ question : "" });
        setData({ category : "" });
        setData({ email : "" });
        setData({ firstName : "" });
        setData({ lastName : "" });
      } else {
        throw new Error("Oops, something went wrong. Please try again.");
      } 
    } catch (error) {
      alert("An error has occurred.", error.message)
      setData({ isLoading : true });
    }
  }

  return (
    <View>
      <Input
        onChangeText={onChangeQuestionHandler}
        label="Question"
        value={data.question}
        placeholder="Start with 'How', 'What', 'Where', 'Why', etc"
        numberOfLines={3}
        error={error}
      />

      <Dropdown onPress={onChangeCategoryHandler} value={data.category} />

      <Input
        onChangeText={onChangeCategoryHandler}
        label="Category"
        value={data.category}
        placeholder="Condo Questions"
        error={error}
      />

      <Input
        onChangeText={onChangeEmailHandler}
        label="Email"
        value={data.email}
        placeholder="myemail@email.com"
      />

      <Input
        onChangeText={onChangeFirstNameHandler}
        label="First Name"
        value={data.firstName}
        placeholder="First Name"
      />

      <Input
        onChangeText={onChangeLastNameHandler}
        label="Last Name"
        value={data.lastName}
        placeholder="Last Name"
      />

      <PrimaryButton 
        text="Submit Question"
        onPress={onSubmitFormHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingVertical: 20,
  },
  labelText: {
    color: "#333",
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.grey500,
    paddingTop: 10,
  },
  touchableOpacity: {
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    width: 350,
    maxWidth: "100%",
    padding: 10,
    marginVertical: 5,
    textAlignVertical: 'top', 
    alignSelf: "stretch",   
  },  
});


export default QuestionForm;