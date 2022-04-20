import React, { useState, useEffect } from "react";
import { Modal, Animated, Alert, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const ModalPopUp = ( { visible, children } ) => {
  const [ showModal, setShowModal ] = useState(visible);

  const scaleValue = React.useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue : 1,
        duration : 1000,
        useNativeDriver : true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 350);
      Animated.timing(scaleValue, {
        toValue : 0,
        duration : 2000,
        useNativeDriver : true,
      }).start();
    }
  };
  return (
    
      <Modal
        animationType="slide" 
        transparent
        visible={showModal}
        keyboard={false}
        // onRequestClose={() => {
        //   Alert.alert("Modal closed");
        //   setShowModel(false);
        // }}
        // show={props.show}
        // onHide={props.buttonClicked}
      >
        <ScrollView contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between'
        }}>
        <View style={styles.modalView}>
          <Animated.View style={[ styles.modalContainer, { transform : [{ scale : scaleValue }]}]}>
            {/* <Pressable onPress={handleClose}>
              <Text style={{ alignSelf: "flex-end", paddingRight: 10 }}>
                <Ionicons style={styles.icon} name="close-circle-outline"/>
              </Text>
            </Pressable> */}
            {children}
          </Animated.View>
        </View>
        </ScrollView>
      </Modal>
    
  )

};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 2,
    backgroundColor: "#fff",
  },
  modalContainer: {
    paddingVertical: 10,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  icon: {
    color: "#333",
    fontSize: 28,
    paddingRight: 10,
    alignSelf: "flex-end",
    zIndex: 1,
  },
});

export default ModalPopUp;