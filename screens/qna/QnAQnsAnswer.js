import React from 'react'
import { View, Text ,ScrollView, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../../components/UI/PrimaryButton'


const AnswerHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.ansInput}>
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
            <View style={styles.questionContainer}>
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
        <View style={styles.answerContainer}>
            <Text >{name}</Text>
            <Text>Replied {date}</Text>
            <Text>{answerInput}</Text>
        </View>
    )
}




const QnAQnsAnswer = () => {
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
          <View style={styles.primaryButton}>
                <PrimaryButton text= "Ask Your Question" onPress={'onAskQnPressed'} type="Primary"/>
          </View>
          
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
    }

})

export default QnAQnsAnswer