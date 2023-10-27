import React from 'react';
import { View } from 'react-native';
import Accordion from '../../components/Accordion';

const FAQScreen = () => {
  return (
    <View>
      <Accordion title="Section 1" content="Content for Section 1" />
      <Accordion title="Section 2" content="Content for Section 2" />
      {/* Add more accordion sections as needed */}
    </View>
  );
};

export default FAQScreen;