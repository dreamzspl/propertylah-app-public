import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import Colors from "../../constants/colors";

import { ModalPicker } from "./DropdownModalPicker";

const Dropdown = ({ onPress }) => {
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const [ visible, setVisible ] = useState(true);
  // const dropdownList = ["Condo Questions", "Home Buying", "HDB", "Renting", "General", "Home Selling", "Home Financing", "Property Agents"]

  // const dropdownListClick = index => {
  //   setVisible(index);
  // };

  // return (
  //   <>
  //   <Pressable style={[customStyles.dropdownContainer, ({ pressed }) => [
  //     { 
  //       backgroundColor: pressed ? Colors.accent500 : Colors.primary500
  //     }
  //     ]]} onPress={() => dropdownList[visible]}>
  //     <Text>{dropdownList[visible]}</Text>
  //     <Ionicons style={customStyles.icon} name="chevron-down-circle-outline" />
  //   </Pressable>
  //   <View>
  //     {dropdownList.map((value, index) => {
  //       return (
  //         <>
  //           <Pressable onPress={() => dropdownListClick (index)}
  //           key={index}>
  //           <Text>
  //             {value}
  //           </Text>
  //           </Pressable>
  //         </>
  //       )
  //     })}
  //   </View>
    
  //   </>
  // )
  

  
  
  
  
  
  
  
  
  // const toggleDropdown = () => {
  //   setVisible(!visible);
  // };

  // const renderDropdown = props.options.map(option) => {
  //   return (
  //     <List.Item key={option} title={option} onPress={() => {props.setOption(`${option}`)}} />
  //   )
  // })

  
  // return (
  //   <View>
  //   <Text>
  //     {renderDropdown}
  //   </Text>
  //   </View>

  // );



  // return (
    // <Pressable style={[customStyles.dropdownContainer, ({ pressed }) => [
    //   { 
    //     backgroundColor: pressed ? Colors.accent500 : Colors.primary500
    //   }
    //   ]]} onPress={toggleDropdown}>
    //   {renderDropdown}
    //   <Text>{props.label}</Text>
    //   <Ionicons style={customStyles.icon} name="chevron-down-circle-outline" />
    // </Pressable>


  //   <List.Section >
  //   <List.Accordion style={customStyles.list} title={props.dropOptions} >
  //       {renderDropdown}
  //   </List.Accordion>
  //   </List.Section>
  // )


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

export default Dropdown;