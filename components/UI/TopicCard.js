import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import API from "../../screens/qna/API";
import customStyles from "../../screens/qna/QnAStyles";

const TopicCard = ({ onPress }) => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect( async (props) => {
    //--- fetching API via a function call (another method)
    // const fetchData = async () => {
    //   setLoading(true);
    //   const res = await API.get('/questions');
    //   const arr = res.data.data;
    //   setData(arr);
    //   // console.log(data)
    //   setLoading(false)
    // }
    // fetchData();

    //--- fetching API (using this method)
    const res = await API.get('/questions');
    const arr = res.data.data;
    // setData(arr)
    // console.log(data);

    
    let cat = arr.reduce(function (x, cur) {
      let item = cur.category
      if (!x[item]) x[item] = 0;
      x[item] = x[item] + 1
      return x
    }, {})
    const results = []

    for (const key in cat) {
      const count = cat[key];
      const category = key.slice();
      results.push({
        category: category,
        count: count,
      })
    }

    setData(results);
    console.log(data);

    //--- Previous method which did not really work (for reference)
    // try {
      // console.log(res.data.data)
      // for (const el of res.data.data ) {
      //   console.log(el.category)
      //   if (el.category === category) {
      //     setData(el);
      //     console.log(`hello`, data.length)

      //     // props.setNoOfQuestions(data.length);  
      //     setLoading(false);
      //     return;
      //   } 
      // }
    // } catch (err) {
    //   console.log(err);
    // }
    // console.log(`Bye`, data.length)

  }, []);

  return (
    <View style={customStyles.container}>
    {data.map((el) => {
      return (
    <Pressable key={el.category} onPress={onPress} style={styles.topicCard}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.textContainer}>
          <Text style={styles.topicTitle}>{el.category}</Text>
          <Text style={styles.counter}>{el.count} Questions</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons style={styles.icon} name="arrow-forward-circle-outline" />
        </View>
      </View>
    </Pressable>
    
      )
    })}
    </View>
  )
}

const styles = StyleSheet.create({
  topicCard: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    marginHorizontal: "2%",
    marginBottom: "4%",
    width: "45%",
    maxWidth: "45%",
    textAlign: "center",
    // flexDirection: "row",
  },
  textContainer: {
    maxWidth: "90%",
    flexDirection: "column",
  },  
  topicTitle: {
    color: "#000",
    fontWeight: "bold",
    maxWidth: "100%",
    fontSize: 14,
  },
  counter: { 
    color: "#bbb",
    fontSize: 13,
  },
  iconContainer: {
    alignSelf: "center",
    // position: "absolute",
    // right: 10,
    marginLeft: "auto",
    marginBottom: "auto",
},
  icon: {
    color: "red",
    fontSize: 20,
    paddingLeft: 5,
  }
});

export default TopicCard;