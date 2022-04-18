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