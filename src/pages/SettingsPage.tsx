import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>

            <Text style={styles.subTitle}>Language:</Text>
            <Button title="Change Language" onPress={() => {}} />

            <Text style={styles.subTitle}>Notifications:</Text>
            <Button title="Manage Notifications" onPress={() => {}} />

            <Text style={styles.subTitle}>Support:</Text>
            <Button title="Contact Support" onPress={() => {}} />

            <Button
                title="Back to Account"
                onPress={() => navigation.navigate("Account")}
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
});

export default Settings;
