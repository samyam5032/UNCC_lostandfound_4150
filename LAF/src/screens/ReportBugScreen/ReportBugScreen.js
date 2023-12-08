// ReportBugScreen.js
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker'; // You may need to install this package
import { COLORS } from '../../../constants/Theme';

const ReportBugScreen = () => {
  const [bugDescription, setBugDescription] = useState('');
  const [bugImage, setBugImage] = useState(null);

  const handleChooseImage = () => {
    // Use ImagePicker to pick an image from the gallery
    ImagePicker.showImagePicker({}, (response) => {
      if (!response.didCancel && !response.error) {
        setBugImage(response.uri);
      }
    });
  };

  const handleReportBug = () => {
    // Implement your logic to report the bug, including bugDescription and bugImage
    // For now, let's just log the information
    console.log('Bug Description:', bugDescription);
    console.log('Bug Image URI:', bugImage);
    // You can add further logic like sending the bug report to a server, etc.
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Report a Bug</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Describe the bug..."
          multiline
          value={bugDescription}
          onChangeText={(text) => setBugDescription(text)}
        />

        <TouchableOpacity onPress={handleChooseImage}>
          <View style={styles.chooseImageBtn}>
            <Text style={styles.chooseImageText}>Choose Image</Text>
          </View>
        </TouchableOpacity>

        {bugImage && (
          <Image source={{ uri: bugImage }} style={styles.previewImage} />
        )}

        <TouchableOpacity onPress={handleReportBug}>
          <View style={styles.reportBugBtn}>
            <Text style={styles.reportBugText}>Report Bug</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  content: {
    paddingHorizontal: 24,
  },
  descriptionInput: {
    height: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
  chooseImageBtn: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  chooseImageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  previewImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  reportBugBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  reportBugText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ReportBugScreen;
