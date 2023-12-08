// ContactUsScreen.js
import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { COLORS, FONTS } from "../../../constants/Theme";

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.infoText}>For any inquiries, please contact us at:</Text>
        <Text style={styles.contactInfo}>Email: LostNFound@Uncc.com</Text>
        <Text style={styles.contactInfo}>Phone: +1 (740) 456-7890</Text>
        {/* Add more contact information if needed */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#616161',
    marginBottom: 12,
  },
  contactInfo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
});

export default ContactUsScreen;
