import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomePage from "./src/screens/welcome";
import LoginPage from "./src/screens/login";
import SingInPage from "./src/screens/singin";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SingIn" component={SingInPage} />
    </Stack.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
