import { Text, View, ScrollView , StyleSheet, ImageBackground, Alert, Pressable , TouchableOpacity} from "react-native";
import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import customStyles from "./QnAStyles";
import PrimaryButton from "../../components/UI/PrimaryButton"
import ModalPopUp from "../../components/UI/ModalPopUp";
import React, { useState } from "react";
import CustomInput from "../../components/UI/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';

const QuestionHeader = () => {
const [ loading, setLoading ] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const handleClose = () => setIsModalVisible(false);

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
    console.warn("'Ask Your Question' button pressed");
    setLoading(false);
  }
  // create form values
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      question: '',
      topic: '',
      projName: '',
      displayName: '',
    }
  });
  // const onSubmit = data => console.log(data);

  // 'Submit' button function
  const onSubmitBtnPressed = (data) => {
    console.log(data);
    setIsModalVisible(false);
    console.warn("'Submit' button pressed");
  }

    return (
     <ScrollView style={customStyle.container}>
            <ImageBackground
                source={require("../../assets/images/askguru/askguru-question-hero.jpg")}
                style={customStyle.bgImage}
                resizeMode="contain">
            <View style={customStyle.headerContainer}>
                <PrimaryButton text= "Ask Your Question" onPress={onAskQnPressed} type="Primary"/>
                    <Text style={[textStyles.bodyText, styles.bgText]}>Condo Questions</Text> 
          </View>
          <ModalPopUp visible={isModalVisible}>
          
          <Pressable onPress={handleClose}>
            <Text style={{ alignSelf: "flex-end", paddingRight: 10, paddingTop: 10 }}>
              <Ionicons style={customStyles.icon} name="close-circle-outline"/>
            </Text> 
          </Pressable>
          <View style={customStyles.formContainer}>
            <Text style={[textStyles.headerText, { flexWrap: "wrap" }]}>Ask Your Question</Text>
            <Text style={[textStyles.bodyText, { marginVertical: 10 }]}>Our PropertyLah experts will answer you within 24 hours! 😎</Text>
            <View>
              <CustomInput label="Question" name="question" control={control} rules={{required: 'Please ask a question 😊'}} placeholder="Start with 'How', 'What', 'Where', 'Why', etc" numberOfLines={5} />

              <CustomInput label="Your email" name="email" control={control} rules={{required: 'Please provide a valid email address.'}} placeholder="email@example.com" numberOfLines={1} />

              <CustomInput label="Project Name" name="projName" control={control} placeholder="8 Riversuites" numberOfLines={1} />

              <CustomInput label="Your name" name="displayName" control={control} placeholder="e.g. Jason Teo" numberOfLines={1} />

              <PrimaryButton text="Submit" onPress={handleSubmit(onSubmitBtnPressed)} />

            </View>
          </View>
        </ModalPopUp>
            </ImageBackground>
            
           
        </ScrollView>
)
}


const QuestionList = ({ name = 'anonymous', category, dateOfQuestion, input, views, answers }) => {
    
    const showMessage = () => {
 
    Alert.alert('onPress Called...');
 
    }
    
    const onTopicPressed = async () => {
    navigation.navigate("QnAQnsAnswer");
    console.warn("Topic pressed.");
  }
  const navigation = useNavigation();
    return (
        <ScrollView style={customStyle.container}>
            <View style={customStyle.questionContainer}>
                <View style={customStyle.sectionOne}>
                    <Text onPress={showMessage}>{name}</Text>
                    <Text style={{ paddingLeft: 5 }}>in</Text>
                    <TouchableOpacity>
                    <Text style={{ color: 'red' , paddingLeft:5}} onPress={showMessage}> {category}</Text>
                    </TouchableOpacity>
                </View>
                <View style={customStyle.sectionOne}>
                    <Text style={{ color: 'grey', fontSize: 13 }}>asked on {dateOfQuestion}</Text>
                
                </View>
                <View style={customStyle.sectionTwo}>
                    <Text>
                   {input}
                </Text>
                </View>
                
                <View style={customStyle.sectionThree}>
                    
                    <Text style={{ color: 'grey' }}>{views} views</Text>
            <Pressable  onPress={onTopicPressed}><Text style={{ color:'red'}}>{answers} answers</Text></Pressable>
                </View>
                
            </View>
            </ScrollView>
    )
}

const ListTopicQns = () => {
  return (
    <ScrollView>
      <QuestionHeader />
          <QuestionList
              name='anynomous'
              category='Condo Question'
              dateOfQuestion='15 apr 2022'
              input='This is a test question, just tyring it out'
              views='5'
              answers='2'
          />
    </ScrollView>
  )
}
const customStyle = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
     bgImage:{
        justifyContent: "center",
        width: "100%",
        height: 400,
    },
    bgText: {
        alignItems:'center',
        flexWrap: "wrap",
        textAlign: 'center',
        fontSize: 25,
        color: 'grey',
        
    },
    questionContainer: {
        justifyContent: 'flex-start',
        padding: 20,
        marginTop: 10,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderBottomWidth: 1,
    
    },
    sectionOne: {
        padding: 8  ,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    sectionTwo: {
        padding: 8,
        flexDirection: 'row',
        paddingBottom: 5,

    },
    sectionThree: {
        flexDirection: 'row',
        padding:8,
        justifyContent: 'space-between'
        
    }
     

})

export default ListTopicQns;