import React, { useState } from "react";
import { Alert, ImageBackground, View, Text, Pressable, StyleSheet, ScrollView, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { styles, textStyles } from "../../styles/common";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaProvider } from "react-native-safe-area-context";
import QuestionForm from "./QuestionForm";
import TopicCard from "../../components/UI/TopicCard";
import PrimaryButton from "../../components/UI/PrimaryButton";
import ModalPopUp from "../../components/UI/ModalPopUp";
import CustomInput from "../../components/UI/CustomInput";
import Input from "../../components/UI/Input";
import Dropdown from "../../components/UI/Dropdown";

import customStyles from "./QnAStyles";

export default function QnAHome() { 
  const [ loading, setLoading ] = useState(false);
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  // Topic cards function
  const onTopicPressed = async () => {
    navigation.navigate("ListTopicQns");
    // console.warn("Topic pressed.");
  }

  // 'Ask question' button function
  const onAskQnPressed = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      setIsModalVisible(true);
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    // console.warn("'Ask Your Question' button pressed");
    setLoading(false);
  }

  // create form values
  // const { control, handleSubmit, formState: { errors } } = useForm({
  //   defaultValues: {
  //     question: '',
  //     topic: '',
  //     email: '',
  //     projName: '',
  //     displayName: '',
  //   }
  // });
  // const onSubmit = data => console.log(data);

  // 'Submit' button function
  // const onSubmitBtnPressed = (data) => {
  //   console.log(data);
  //   setIsModalVisible(false);
  //   console.warn("'Submit' button pressed");
  // }

  // Close button to close modal
  const handleClose = () => setIsModalVisible(false);

  const navigation = useNavigation();


  return (
    <SafeAreaProvider>
      <ScrollView>
        <View style={styles.container}>
          <Text style={textStyles.headerText}>Q & A Screen</Text>
          <Text style={textStyles.bodyText}>Lorem ipsum</Text>
          <Pressable onPress={() => navigation.navigate(`ListTopicQns`)}><Text>Press</Text></Pressable>
        </View>
        <ImageBackground source={require("../../assets/images/askguru/askguru-hero.jpg")} style={customStyles.bgImage} resizeMode="contain">
          <View style={customStyles.ctaContainer}>
            <Text style={[textStyles.headerText, { flexWrap: "wrap", }]}>AskGuru Community</Text>
            <Text style={[textStyles.bodyText, { flexWrap: "wrap", width: "60%" }]}>Get answers from PropertyLah experts in 24 hours</Text>

            <PrimaryButton text={loading ? "Loading..." : "Ask Your Question"} onPress={onAskQnPressed} type="Primary" />
          </View>
        </ImageBackground>
        <ModalPopUp visible={isModalVisible}>
          
          <Pressable onPress={handleClose}>
            <Text style={{ alignSelf: "flex-end", paddingRight: 10, paddingTop: 10 }}>
              <Ionicons style={customStyles.icon} name="close-circle-outline"/>
            </Text> 
          </Pressable>
          <View style={customStyles.formContainer}>
            <Text style={[textStyles.headerText, { flexWrap: "wrap" }]}>Ask Your Question</Text>
            <Text style={[textStyles.bodyText, { marginVertical: 10 }]}>Our PropertyLah experts will answer you within 24 hours! 😎</Text>
    
            <QuestionForm />
            {/* <PrimaryButton text="Submit" onPress={handleSubmit(onSubmitBtnPressed)} /> */}


          </View>
        </ModalPopUp>


        <View style={customStyles.container}>
          <TopicCard topic="Condo Questions" noOfQuestions="18856 Questions" onPress={onTopicPressed}/>
          <TopicCard topic="Home Buying Schemes" noOfQuestions="13860 Questions" onPress={onTopicPressed} />
          <TopicCard topic="HDB Questions" noOfQuestions="11245 Questions" />
          <TopicCard topic="Renting Property" noOfQuestions="7286 Questions" />
          <TopicCard topic="General Questions" noOfQuestions="6195 Questions" />
          <TopicCard topic="Home Selling" noOfQuestions="3947 Questions" />
          <TopicCard topic="Home Financing" noOfQuestions="3016 Questions" />
          <TopicCard topic="Property Agents" noOfQuestions="2386 Questions" />
        </View>

        <ImageBackground source={require("../../assets/images/askguru/askguru-banner-event-template.jpg")} style={customStyles.bgImage} resizeMode="contain">
          <View style={[customStyles.ctaContainer, { alignItems: 'center', paddingTop: 60 }]}>
            <Text style={[textStyles.bodyText, { flexWrap: "wrap" }]}>Thinking of upgrading your home?</Text>

            <PrimaryButton text={loading ? "Loading..." : "Ask Guru Now"} onPress={onAskQnPressed} type="Primary" />
          </View>
        </ImageBackground>

      </ScrollView>
    </SafeAreaProvider>
  );
}