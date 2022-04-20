
import { View, Text ,ScrollView, StyleSheet, Alert, Pressable, Modal, TouchableWithoutFeedback , Keyboard} from 'react-native'
import PrimaryButton from '../../components/UI/PrimaryButton'
import ModalPopUp from "../../components/UI/ModalPopUp";
import React, { useState } from "react";
import CustomInput from "../../components/UI/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import { styles, textStyles } from "../../styles/common";
import customStyles from "./QnAStyles";
import { MaterialIcons } from '@expo/vector-icons' 
import AnswerForm from './AnswerForm';
import FlatButton from '../../components/UI/FlatButton';

const AnswerHeader = () => {
    return (
        <View style={customstyles.headerContainer}>
            <View style={customstyles.ansInput}>
            <Text style={{fontSize: 13}}>AskGuru Q&A Community</Text>
            <Text style={{ fontSize: 20 }}>Get answers from PropertyGuru Experts</Text>
            <Text style={{ color: 'red', fontSize: 20 }}>in 24 Hours</Text>  
            </View>    
        </View>
    )
}

//show the list of questions from the API
const QuestionList = ({ category, name, date, questionAsked, views }) => {
    
    const showMessage = () => {
        Alert.alert('Onpress called')
    }
    return (
            <View style={customstyles.questionContainer}>
                <Text style={{color:'red', fontSize:14}}  onPress={showMessage}>{category}</Text>
                <Text>Asked by {name} on {date}</Text>
                <Text>{questionAsked}</Text>
                <Text>{ views} views</Text>
            </View>
    )
}

//show the list of answers link as foreign key to question from the api
const AnswerList = ({name, date , answerInput}) => {
    return (
        <View style={customstyles.answerContainer}>
            <Text >{name}</Text>
            <Text>Replied {date}</Text>
            <Text>{answerInput}</Text>
        </View>
    )
}



const QnAQnsAnswer = () => {
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

    const [modalOpen, setModalOpen] = useState(false);
    const addAnswer = (answer) => {
        answer.key = Math.random().toString();
        setModalOpen(false);
    }
  return (
    <ScrollView>
          <AnswerHeader />
          <QuestionList
              category='Condo Question'
              name='Tino'
              date='12 Apr 2022'
              questionAsked='This is the question asked'
              views='2' />
          <AnswerList
              name='Ryan'
              date='13 Apr 2022'
              answerInput='This is the answer for the question' />
          <View style={customstyles.primaryButton}>
                <PrimaryButton text= "Ask Your Question" onPress={onAskQnPressed} type="Primary"/>
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
          
        <View style={customstyles.primaryButton}>
          <Modal visible={modalOpen} animationType='slide'>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
              <View style={customstyles.modalContent}>
                   <MaterialIcons
              name='close'
              size={24}
              style={{...customstyles.modalToggle, ...customstyles.modalClose}}
              onPress={() => setModalOpen(false)}
          />
                  <AnswerForm addAnswer={addAnswer}/>
                  </View>
                  </TouchableWithoutFeedback>
              </Modal>
              <PrimaryButton
                  text='Answer this Question'
                    onPress={() => setModalOpen(true)}
          />
              </View>

    </ScrollView>
  )
}

const customstyles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        width: '100%',
        height: 150,
        paddingLeft: 20,
    },
    answerContainer: {
        justifyContent: 'flex-start',
        padding: 30,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderBottomWidth: 1,
    },
    questionContainer: {
        justifyContent: 'flex-start',
        padding: 30,
        backgroundColor: 'white',
        borderColor: 'grey',
    },
    ansInput: {
        paddingTop: 10,
        margin: 5
    },
    primaryButton: {
        alignItems:'center'
    },
    modalContent: {
        flex: 1,
        marginTop: 40,
        padding: 20
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }

})

export default QnAQnsAnswer