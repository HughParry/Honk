import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import books from "../static/books.json";
import Card from "../components/Card";

const Categories = ({ route }) => {
    const navigation = useNavigation();
    const { categoryId } = route.params;
    const filteredBooks = books.filter((book) => book.category === categoryId);

    console.log(filteredBooks);
    console.log(route.params);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredBooks}
                renderItem={({ item }) => (
                    <Card item={item} navigation={navigation} />
                )} // Use Card component instead of renderBook
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default Categories;
