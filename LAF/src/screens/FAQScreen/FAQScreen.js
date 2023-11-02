import React from 'react';
import { View, ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';
import Accordion from '../../components/Accordion';
import Design from '../../../assets/images/uncc.jpg';

const FAQScreen = () => {
  return (
    <ImageBackground source={Design} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Frequently Asked Questions</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.root}>
            <Accordion
              title="What do I do when I find an item?"
              content="Please turn the item in to the Lost & Found office. The Lost and Found office is located in the University Police building"
            />
            <Accordion
              title="How long are found items held?"
              content="They are held all year long"
            />
            <Accordion
              title="Can I pick up my found items after hours?"
              content="No, the Union closes at 11 pm. You would have to pick it up the next day"
            />
            <Accordion
              title="Can I pick up my friend's found item?"
              content="No, for security and identification purposes"
            />
            <Accordion
              title="What should I bring with me if I am picking up?"
              content="Bring your Student ID"
            />
            <Accordion
              title="Where can I drop off lost items after hours?"
              content="At the police building located near North Deck"
            />
            <Accordion
              title="Are there any other Lost & Found Collection sites?"
              content="No, just this one"
            />
            {/* Add more accordion sections as needed */}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1,
  },
  root: {
    alignItems: 'center',
    padding: 20,
    paddingLeft:5,
   
    

  },
  box: {
    marginTop: 110,
    position:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Set a fixed width for the sections
    width: 430,
   
  },
  title: {
    alignItems: 'center',
   
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop:140,
  },
  
});

export default FAQScreen;
