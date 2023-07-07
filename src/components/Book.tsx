import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

// Just a placeholder image
const placeholderImage = require("../static/placeholder.png");

// This would be passed in as a prop in a real app
const book = {
    pages: [
        {
            topText: "Page 1 Top",
            bottomText: "Page 1 Bottom",
            image: placeholderImage,
        },
        {
            topText: "Page 2 Top",
            bottomText: "Page 2 Bottom",
            image: placeholderImage,
        },
        // More pages...
    ],
};

const Book = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const goForward = () => {
        if (currentPage < book.pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const exitBook = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text>{book.pages[currentPage].topText}</Text>
            <Image
                source={book.pages[currentPage].image}
                style={styles.image}
            />
            <Text>{book.pages[currentPage].bottomText}</Text>
            <Text>
                Page {currentPage + 1} of {book.pages.length}
            </Text>
            <View style={styles.buttons}>
                <Button title="Back" onPress={goBack} />
                <Button title="Exit" onPress={exitBook} />
                <Button title="Forward" onPress={goForward} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
});

export default Book;
