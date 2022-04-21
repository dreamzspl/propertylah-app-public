import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const customStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  bgImage: {
    justifyContent: "center",
    width: "100%",
    height: 400,
    marginVertical: 5,
  },
  ctaContainer: {
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  dropdownContainer: {
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    width: 350,
    maxWidth: "100%",
    padding: 10,
    marginVertical: 5,
  },  
  icon: {
    color: "#333",
    fontSize: 28,
    paddingTop: 20,
    paddingRight: 10,
    alignSelf: "flex-end",
    // position: "absolute",
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
  qnContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  qnName: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "rubik",
    color: Colors.grey500,
    paddingVertical: 3, 
  },
  qnMeta: {
    fontSize: 13,
    fontFamily: "rubik",
    color: "grey",
    paddingTop: 3, 
    paddingBottom: 10,
  },
  qnBody: {
    width: "95%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#f1f1f1",
    borderWidth: 1,
  }
});


export default customStyles;