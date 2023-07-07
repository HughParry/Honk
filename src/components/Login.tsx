// Login.tsx

import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const handleLogin = () => {
        // In a real app, you'd use these values to log in
        console.log(username, password);

        // Navigate to the home page
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <Button title="Log In" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
});

export default Login;
