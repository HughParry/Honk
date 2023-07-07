import React from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    Dimensions,
    TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import books from "../static/books.json";

const categories = [
    { id: "1", title: "Animals" },
    { id: "2", title: "Magic" },
    { id: "3", title: "Space" },
    { id: "4", title: "Nature" },
];

const HomePage = () => {
    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

    const renderCategory = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Button
                title="View"
                onPress={() =>
                    navigation.navigate("Category", {
                        categoryId: item.title.toLowerCase(),
                    })
                }
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.topbar}>
                <Button
                    title="Account"
                    onPress={() => navigation.navigate("Account")}
                />

                <Button
                    title="Settings"
                    onPress={() => navigation.navigate("Settings")}
                />
            </View>
            <TextInput style={styles.searchInput} placeholder="Search..." />
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                numColumns={2} // set number of columns
                columnWrapperStyle={styles.row} // style for row
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: Dimensions.get("window").width - 20,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    topbar: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    row: {
        flex: 1,
        justifyContent: "space-around",
    },
    item: {
        flex: 1,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        backgroundColor: "#f9c2ff",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    itemText: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default HomePage;
