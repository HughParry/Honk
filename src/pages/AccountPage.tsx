import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Account = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Account</Text>

            <Text style={styles.subTitle}>User Information:</Text>
            <Text style={styles.text}>Username: DummyUser</Text>
            <Text style={styles.text}>Email: dummyuser@example.com</Text>

            <Button title="Change Password" onPress={() => {}} />

            <Text style={styles.subTitle}>Purchase History:</Text>
            <Text style={styles.text}>Really cool active subscription</Text>

            <Button
                title="Logout"
                onPress={() => navigation.replace("Login")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default Account;
