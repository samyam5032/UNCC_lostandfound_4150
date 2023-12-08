import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const SubmitClaimScreen = () => {
  const [claimDetails, setClaimDetails] = useState({
    category: '',
    phoneNumber: '',
    lossDate: '',
    itemDetails: '',
    email: '',
    emailConfirm: '',
    name: '',
  });

  const handleSubmit = () => {
    console.log(claimDetails);

    // Show the toast notification
    Toast.show({
      type: 'success',
      text1: 'Claim Filed',
      text2: 'Your claim has been filed successfully.',
    });

    // Reset the form if needed
    setClaimDetails({
      category: '',
      phoneNumber: '',
      lossDate: '',
      itemDetails: '',
      email: '',
      emailConfirm: '',
      name: '',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>File your claim</Text>
        <TextInput
          style={styles.input}
          placeholder="Item Category"
          value={claimDetails.category}
          onChangeText={(text) => setClaimDetails({ ...claimDetails, category: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Item Details"
          value={claimDetails.itemDetails}
          onChangeText={(text) => setClaimDetails({ ...claimDetails, itemDetails: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={claimDetails.name}
          onChangeText={(text) => setClaimDetails({ ...claimDetails, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={claimDetails.email}
          onChangeText={(text) => setClaimDetails({ ...claimDetails, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Email"
          value={claimDetails.emailConfirm}
          onChangeText={(text) => setClaimDetails({ ...claimDetails, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={claimDetails.phoneNumber}
          onChangeText={(text) => setClaimDetails({ ...claimDetails, phoneNumber: text })}
        />
        {/* input fields  */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Claim</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '85%',
    alignSelf:'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SubmitClaimScreen;
