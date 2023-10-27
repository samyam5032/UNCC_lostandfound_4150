import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function SearchBar() {
    return (
        <View style={styles.search}>
            <TextInput style={styles.input} placeholder="Search Item" />
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
});

export default SearchBar;
