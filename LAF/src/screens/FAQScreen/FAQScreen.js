import React from 'react';
import { View, ImageBackground, StyleSheet,Text } from 'react-native';
import Accordion from '../../components/Accordion';
import Design from '../../../assets/images/uncc.jpg';

const FAQScreen = () => {
  return (
    <ImageBackground
      source={Design}
      style={styles.background}
    >
       <View style={styles.title}>
        <Text>Frequently Asked Questions</Text>
        </View>
       <View style={styles.box}>
      <View style={styles.root}>
        <Accordion title="What do I do when I find an item?" content="Please turn the item in to the Lost & Found office. 
The Lost and Found office is located in the 
University Police building" />
        <Accordion title="How long are found items held ?" content="They are held all year long" />
        <Accordion title="Can I pick up my found items after hours?" content="No the Union closes at 11pm .You would have to pick it up the next day" />
        <Accordion title="Can I pick up my friend's found item?" content="No ,for security and identification purposes" />
        <Accordion title="What should i bring with me if I am picking up ?" content="Bring your Student Id" />
        <Accordion title="Where can I drop off lost items after hours ?" content="At the police building located near North Deck" />
        <Accordion title="Are there any other Lost&Found Collection sites?" content="No ,just this one" />

        {/* Add more accordion sections as needed */}
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  root: {
    alignItems: 'center',
    padding: 20,
    
  },
  box: {
    backgroundColor:'rgba(255, 255, 255, .7)', // Set a fixed width for the sections
    width:400,
    height:500
    
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
    margin: 70,
    alignItems: 'center',
    
  },
});

export default FAQScreen;
