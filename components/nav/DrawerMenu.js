import { DrawerActions, useNavigation } from "@react-navigation/native";

import IconButton from "../UI/IconButton";

function DrawerMenu() {
  const navigation = useNavigation();
  return (
    <IconButton
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      icon="menu"
      color="#fff"
    />
  );
}

export default DrawerMenu;
