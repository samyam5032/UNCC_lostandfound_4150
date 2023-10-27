// src/components/accordion/Accordion.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
   
    <View style={styles.container}>
      
       
      <TouchableOpacity onPress={toggleAccordion}>
        <View style={[styles.accordionBox, isExpanded && styles.expandedAccordionBox]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Icon
              name={isExpanded ? 'ios-arrow-up' : 'ios-arrow-down'}
              size={20}
            />
          </View>
          {isExpanded && (
            <View style={styles.content}>
              <Text>{content}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
   
    
  );
};

const styles = StyleSheet.create({
  outerBox: {
    backgroundColor:'#ffffff', // Set a fixed width for the sections
    width:300,
    paddingVertical:20,
    paddingHorizontal:10,
    
  },
  
  container: {
    
    width: 370, // Set a fixed width for the sections
    borderRadius: 9,
  },
  accordionBox: {
    backgroundColor: 'rgba(255, 255, 255, .7);', // Low-opacity gold background
    borderRadius: 9, // Add rounded corners to the box
    
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(150, 118, 3, .6);',
    borderRadius: 4
  },
  title: {
    flex: 1,
  },
  content: {
    
    padding: 10,
  },
});

export default Accordion;
