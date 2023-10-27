// src/components/accordion/Accordion.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleAccordion}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white', // Header remains white
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'red', // Add a border at the bottom of the header
          }}
        >
          <Text>{title}</Text>
          <Icon
            name={isExpanded ? 'ios-arrow-up' : 'ios-arrow-down'}
            size={20}
          />
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordion;
