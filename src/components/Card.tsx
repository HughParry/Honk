import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const Card = ({ item, navigation }) => {
    console.log(item, navigation);

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const openBook = () => {
        navigation.navigate("Book", { book: item });
    };

    return (
        <TouchableOpacity
            onPress={toggleExpanded}
            style={expanded ? styles.cardExpanded : styles.card}
        >
            <Text style={styles.title}>{item.title}</Text>
            {expanded && (
                <>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.author}>Author: {item.author}</Text>
                    <Text style={styles.releaseDate}>
                        Release Date: {item.releaseDate}
                    </Text>
                    <Text style={styles.ageRange}>
                        Age Range: {item.ageRange}
                    </Text>
                    <TouchableOpacity onPress={openBook}>
                        <Text style={styles.openButton}>Open</Text>
                    </TouchableOpacity>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        padding: 10,
        backgroundColor: "#f9c2ff",
        marginBottom: 10,
    },
    cardExpanded: {
        width: Dimensions.get("window").width, // full width
        padding: 10,
        backgroundColor: "#f9c2ff",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        marginTop: 10,
    },
    author: {
        marginTop: 10,
    },
    releaseDate: {
        marginTop: 10,
    },
    ageRange: {
        marginTop: 10,
    },
    openButton: {
        marginTop: 10,
        color: "blue",
    },
});

export default Card;
