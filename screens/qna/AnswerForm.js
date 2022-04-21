import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import PrimaryButton from "../../components/UI/PrimaryButton";

const reviewSchema = yup.object({
    firstName: yup.string()
        .required(),
    lastName: yup.string()
        .required(),
    email: yup.string()
        .required(),
    category: yup.string()
        .required(),
    answer: yup.string()
        .required()
        
})

const AnswerForm = ({addAnswer}) => {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', category:'' , answer:''  }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addAnswer(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput                           
                            style={styles.input}
                            placeholder="Your First Name"
                            onChangeText={props.handleChange('firstName')}
                            value={props.values.firstName}
                            onBlur={props.handleBlur('firstName')}
                        />
                        <Text style={styles.errorText}>{props.touched.firstName && props.errors.firstName}</Text>
                        <TextInput                          
                            style={styles.input}
                            placeholder="Your Last Name"
                            onChangeText={props.handleChange('lastName')}
                            value={props.values.lastName}
                            onBlur={props.handleBlur('lastName')}
                        />
                        <Text style={styles.errorText}>{props.touched.lastName && props.errors.lastName}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Email"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            onBlur={props.handleBlur('email')}
                        />
                        <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Category"
                            onChangeText={props.handleChange('category')}
                            value={props.values.category}
                            onBlur={props.handleBlur('category')}
                        />
                        <Text style={styles.errorText}>{props.touched.category && props.errors.category}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Answer"
                            onChangeText={props.handleChange('answer')}
                            value={props.values.answer}
                            onBlur={props.handleBlur('answer')}
                        />
                        <Text style={styles.errorText}>{props.touched.answer && props.errors.answer}</Text>
                        <PrimaryButton text='Submit' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    titleText: {
        fontFamily: 'nunito-black',
        fontSize: 20,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight:20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 20,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})


export default AnswerForm