import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { BookmarkContext } from '../../components/contexts/BookmarkContext';

const ProfileScreen = () => {
  const { bookmarks } = useContext(BookmarkContext);

  const renderBookmarkItem = ({ item }) => (
    <View style={styles.bookmarkItem}>
      <Image source={item.image} style={styles.bookmarkImage} />
      <Text style={styles.bookmarkName}>{item.name}</Text>
      <Text style={styles.bookmarkStatus}>{item.status}</Text>
      {}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookmarks</Text>
      <FlatList
        data={bookmarks}
        renderItem={renderBookmarkItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookmarkItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  bookmarkImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  bookmarkName: {
    fontSize: 18,
    flex: 1,
  },
  bookmarkStatus: {
    fontSize: 16,
    color: 'grey',
  },
  // Add more styles as needed
});

export default ProfileScreen;
