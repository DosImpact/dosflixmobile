import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        title: "TAB",
        headerShown: false,
        headerBackTitleVisible: false,
        headerTitleAlign: "center"
      }
    },
    Detail: DetailScreen
  },
  {
    mode: "modal",
    headerMode: "screen"
  }
);

export default createAppContainer(MainNavigation);
