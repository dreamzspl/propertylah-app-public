import { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import {
  styles,
  textStyles,
  stackNavigatorScreenOptions,
  stackInitialScreenOptions,
  helperStyles,
} from "../../styles/common";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import Colors from "../../constants/colors";

const Stack = createNativeStackNavigator();
const API_URL = "http://68.183.183.118:4088/api/v1/users/";

function Screen1({ navigation }) {
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data.data);
    } catch (error) {
      Alert.alert("Error loading users!", error.message);
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    getUsers().then(() => setRefreshing(false));
  }, []);

  function renderUser(userData) {
    return (
      <View style={customStyles.gridItem}>
        <Text style={[customStyles.personName, helperStyles.mb5]}>
          {userData.item.firstName} {userData.item.lastName}
        </Text>
        <Text style={[textStyles.bodyText, helperStyles.mb5]}>
          {userData.item.email}
        </Text>
        <View style={styles.roleContainer}>
          <Text style={styles.roleText}>{userData.item.role}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Users</Text>
      <Text style={textStyles.bodyText}>Pull to refresh list.</Text>
      {users.length > 0 && (
        <FlatList
          data={users}
          renderItem={renderUser}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      )}
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={textStyles.headerText}>Sample Screen 2</Text>
      <Text style={textStyles.bodyText}>Lorem ipsum</Text>
      <Text
        style={[textStyles.bodyText, customStyles.customText]}
        onPress={() => navigation.navigate("Sample3")}
      >
        Go to 3
      </Text>
    </View>
  );
}

function AdminScreen() {
  return (
    <Stack.Navigator screenOptions={stackNavigatorScreenOptions}>
      <Stack.Screen
        name="User Management"
        component={Screen1}
        options={stackInitialScreenOptions}
      />
      <Stack.Screen name="Sample2" component={Screen2} />
    </Stack.Navigator>
  );
}

export default AdminScreen;

const customStyles = StyleSheet.create({
  customText: {
    color: "blue",
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 120,
    padding: 20,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  personName: {
    fontFamily: "rubik-bold",
    fontSize: 24,
    color: Colors.grey500,
  },
});
