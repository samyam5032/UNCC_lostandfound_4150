import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Item({ imageUrl, altText, itemName, status }) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => alert('Bookmark pressed!')} style={styles.bookmarkButton}>
                <FontAwesome name="bookmark" size={24} color="black" />
            </TouchableOpacity>
            <Image source={imageUrl} style={styles.itemImage} />
            <Text style={styles.itemName}>{itemName}</Text>
            <View style={styles.bookmarkContainer}>
                <Text style={styles.bookmark}>{status}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 0,
        width: '90%', 
    },
    bookmarkButton: {
        marginRight: 10,
    },
    itemImage: {
        width: 50,
        height: 50,
        marginRight: 50, 
    },
    itemName: {
        flex: 1,
        marginRight: 30,
        color: 'black',
        fontSize: 16, 
    },
    bookmarkContainer: {
        padding: 2,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft:30,
    },
    bookmark: {
        color: 'red',
    },
});

export default Item;
