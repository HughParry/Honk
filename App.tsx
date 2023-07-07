// App.tsx

import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AccountPage from "./src/pages/AccountPage";
import SettingsPage from "./src/pages/SettingsPage";
import CategoryPage from "./src/pages/CategoryPage";
import Login from "./src/components/Login";
import HomePage from "./src/components/Homepage";
import Book from "./src/components/Book";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Account" component={AccountPage} />
                <Stack.Screen name="Settings" component={SettingsPage} />
                <Stack.Screen name="Category" component={CategoryPage} />
                <Stack.Screen name="Book" component={Book} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
