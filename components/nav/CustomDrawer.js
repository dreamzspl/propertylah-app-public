import { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { AuthContext } from "../../store/auth-context";
import Colors from "../../constants/colors";

function CustomDrawer(props) {
  const authCtx = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        {authCtx.isAuthenticated && (
          <View
            style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={require("../../assets/images/nav/avatar-ironman.jpeg")}
              style={customStyles.avatar}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={customStyles.nameText}>{authCtx.firstName}</Text>
              <View
                style={[
                  customStyles.roleContainer,
                  { backgroundColor: Colors[authCtx.role] },
                ]}
              >
                <Text style={customStyles.roleText}>{authCtx.role}</Text>
              </View>
            </View>
          </View>
        )}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          marginBottom: 20,
          borderTopWidth: 1,
          borderTopColor: "#eee",
        }}
      >
        <Image
          source={require("../../assets/images/nav/propertylahlogoV2.png")}
          style={{ width: 93.6, height: 53.6, marginRight: 20 }}
        />
        <View>
          <Text style={{ fontFamily: "rubik", fontSize: 14 }}>PropertyLah</Text>
          <Text style={{ fontFamily: "rubik", fontSize: 14 }}>App v1.0.0</Text>
        </View>
      </View>
    </View>
  );
}

export default CustomDrawer;

const customStyles = StyleSheet.create({
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  nameText: {
    fontFamily: "rubik-bold",
    color: Colors.grey500,
    fontSize: 24,
    marginBottom: 10,
  },
  roleContainer: {
    backgroundColor: "#ffe3e3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    width: 80,
    textAlign: "center",
  },
  roleText: {
    fontFamily: "rubik-bold",
    textAlign: "center",
    color: Colors.grey500,
  },
});
