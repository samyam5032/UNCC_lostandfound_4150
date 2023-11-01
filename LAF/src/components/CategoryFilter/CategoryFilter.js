import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a category:</Text>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text>{selectedCategory}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalBackground}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <Picker
              selectedValue={selectedCategory}
              onValueChange={(itemValue) => {
                setModalVisible(false);
                onSelectCategory(itemValue);
              }}
            >
              {categories.map((category, index) => (
                <Picker.Item label={category} value={category} key={index} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
  },
});

export default CategoryFilter;
