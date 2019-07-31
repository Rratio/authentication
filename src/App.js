import React from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

// import the different screens
import LoadingScreen from "./component/Loading";
import SignUpScreen from "./component/SignUp";
import LoginScreen from "./component/Login";
import MainScreen from "./component/Main";

// create our app's navigation stack

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createSwitchNavigator({
  /*
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  Loading: LoadingScreen,
  SignUp: SignUpScreen,
  Login: LoginScreen,
  Main: MainScreen
});

const AppContainer = createAppContainer(AppNavigator);
// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       LoadingScreen,
//       SignUpScreen,
//       LoginScreen,
//       MainScreen
//     },
//     {
//       initialRouteName: "LoadingScreen"
//     }
//   )
// );
