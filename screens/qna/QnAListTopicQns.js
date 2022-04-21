import { Text, View, ScrollView , StyleSheet, ImageBackground, Alert, Pressable , TouchableOpacity} from "react-native";
import { styles, textStyles } from "../../styles/common";
import Colors from "../../constants/colors";
import customStyles from "./QnAStyles";
import PrimaryButton from "../../components/UI/PrimaryButton"
import ModalPopUp from "../../components/UI/ModalPopUp";
import QuestionForm from "./QuestionForm";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from '@react-navigation/native';
import API from "./API";

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
    setLoading(false);
  }
  // create form values
  // const { control, handleSubmit, formState: { errors } } = useForm({
  //   defaultValues: {
  //     question: '',
  //     topic: '',
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
      
            <QuestionForm />
          </View>
        </ModalPopUp>
      </ImageBackground>
    </ScrollView>
  )
}

// QnList fetches from API
const QnList = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const onTopicPressed = async () => {
    navigation.navigate("QnAQnsAnswer");
  }
  const navigation = useNavigation();

  useEffect( async () => {
    try {
      const res = await API.get('/questions');
      setData(res.data.data);
      setLoading(false);
      return;
    } catch (err) {
      console.log(err);
    }
  }, []);

  function formattedDate(d = new Date) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return `${day}/${month}/${year}`;
  }
  const timestamp = Date.now()
  return (
    <View style={customStyle.container}>
      {
        loading ? <Text>Loading ...</Text> : (
          data.map((qn) => (
            <View key={qn.id}>
              <View style={customStyle.questionContainer}>
                <View style={customStyle.sectionOne}>
                  <Text>
                    {qn.firstName} {qn.lastName} in 
                  </Text>
                  <TouchableOpacity style={customStyle.qnTouchableOpacity}>
                    <Text style={{ color: '#961b12' }}>
                        {qn.category} 
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={customStyle.sectionOne}>
                  <Text style={{ color: 'grey', fontSize: 13 }}>asked on {qn.createdAt}
                  </Text>
                </View>
                <View style={customStyle.sectionTwo}>
                  <Text>{qn.question}</Text>
                </View>

                <View style={customStyle.sectionThree}>      
                  <Text style={{ color: 'grey' }}>25 views</Text>
                  <Pressable> 
                  <Text onPress={onTopicPressed} style={{ color:'red'}}>0 answers</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))
        )
      }
    </View>
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
            <Pressable  onPress={onTopicPressed}> 
              <Text style={{ color:'red'}}>{answers} answers</Text>
            </Pressable>
          </View>
                
        </View>
      </ScrollView>
    )
}

const ListTopicQns = () => {
  return (
    <ScrollView>
      <QuestionHeader />
          <QnList />
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
        marginVertical: 5,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderBottomWidth: 0.5,
    },
    sectionOne: {
        padding: 5  ,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    sectionTwo: {
        padding: 5,
        flexDirection: 'row',
        paddingBottom: 5,

    },
    sectionThree: {
        flexDirection: 'row',
        padding:8,
        justifyContent: 'space-between'
        
    },
    qnTouchableOpacity:{
        backgroundColor: '#e03d3120',
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        marginTop: -2,
        borderRadius: 5,
        alignContent: "center",
        justifyContent: "center",
    },

})

export default ListTopicQns;