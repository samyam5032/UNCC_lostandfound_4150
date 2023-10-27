import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Footer() {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={() => { /* \navigation link */ }}>
                <Text style={styles.linkText}>Privacy</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkText: {
        color: '#007AFF',  
        textDecorationLine: 'underline',
    },
});

export default Footer;
