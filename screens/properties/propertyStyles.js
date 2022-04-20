import { StyleSheet, Dimensions } from "react-native"; 
import { styles } from "../../styles/common";


const windowWidth = Dimensions.get('window').width;

const customStyles = StyleSheet.create({  
    backgroundColor:{
        backgroundColor: 'white'
    },
    imageContainer:{
        width: '100%',
        height: undefined,
        aspectRatio: 1.25,
    },
    image:{
        width: windowWidth-styles.container.paddingHorizontal*2,
        height: '100%',
        resizeMode: 'contain'
    },
    horizontal:{
        display: 'flex',
        flexDirection: "row",
        alignItems: 'flex-end',
    },
    detailsFont:{
        fontSize: 14,
    },
    textPadding:{
        paddingRight: 10,
    },
    fontBig:{
        fontSize: 24,
        paddingRight: 10,
    },
    fontSmall:{
        fontSize: 14,
        paddingRight: 10,
    },
    borderBottomWidth:{
        paddingVertical: 10,
        borderBottomWidth: 1,
    },
    borderNoTop:{
        borderBottomWidth: 1,
        paddingVertical: 10,
        width: '100%'
    },
    widthHalf:{
        width: '50%',
    },  
    width13:{
        width: '33%',
    },  
    contactButton:{
        width: '90%',
        alignSelf: 'center',
        fontSize: 15,
        paddingVertical: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    contactButtonSpecificProperty:{
        width: '90%',
        alignSelf: 'center',
        fontSize: 13,
        paddingVertical: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    justifyContainerMid:{
        display: 'flex',
        flexDirection: "row",
        width: '100%',
        padding: 10,
    },
    textContainer:{
        paddingHorizontal: 10,
    },
    bold:{
        fontWeight: 'bold'
    },
    filterPageFont:{
        fontSize: 18,
    },
    resultButton:{
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
        fontSize: 15,
        paddingVertical: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    filterHorizontalContainer:{
        display:'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        borderBottomWidth: 1,
    },
    list:{
        width: (windowWidth-styles.container.paddingHorizontal*2)/2,
    },
    inputText:{
        width: (windowWidth-styles.container.paddingHorizontal*2)/2,
        height: 70,
    },
    CRUDButton:{
        width: '90%',
        alignSelf: 'center',
        fontSize: 15,
        paddingVertical: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
    },
    ListTextInput:{
        width: (windowWidth-styles.container.paddingHorizontal*2)/2,
        height: 60,
        fontSize: 18,
        padding: 5,
        borderWidth: 1,
        marginVertical: 1,
    },
    headerButtonsContainer:{
        display: 'flex',
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    headerButtons:{
        width: '50%',
        alignSelf: 'center',
        fontSize: 15,
        paddingVertical: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
    },
});

export default customStyles