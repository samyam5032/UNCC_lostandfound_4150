import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Item({itemName, itemDes, category, itemImageURL, itemLocation, altText, status, isBookmarked, onToggleBookmark, index}) {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => onToggleBookmark(index)} style={styles.bookmarkButton}>
                <FontAwesome name={isBookmarked ? "bookmark" : "bookmark-o"} size={24} color="black" />
            </TouchableOpacity>
            <Image source={itemImageURL} style={styles.itemImage} accessibilityLabel={altText} />
            <Text style={styles.itemName}>{itemName}</Text>
            <Text style={styles.status}>{status}</Text>
            <Text style={styles.itemDescription}>{itemDes}</Text>
            <Text style={styles.itemLocation}>{itemLocation}</Text>
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
        position: 'absolute',
        top: 10,
        right: 10,
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
