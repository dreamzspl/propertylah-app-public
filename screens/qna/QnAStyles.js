import { StyleSheet } from "react-native";

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
});


export default customStyles;