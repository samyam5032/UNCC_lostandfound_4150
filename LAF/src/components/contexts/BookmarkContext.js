import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from AsyncStorage when the component mounts
  useEffect(() => {
    const loadBookmarks = async () => {
      const storedBookmarks = await AsyncStorage.getItem('bookmarks');
      if (storedBookmarks) {
        setBookmarks(JSON.parse(storedBookmarks));
      }
    };

    loadBookmarks();
  }, []);

  // Save bookmarks to AsyncStorage when they change
  useEffect(() => {
    const saveBookmarks = async () => {
      await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };

    saveBookmarks();
  }, [bookmarks]);

  // Function to add a bookmark
  const addBookmark = (product) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = [...prevBookmarks, product];
      AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  // Function to remove a bookmark
  const removeBookmark = (productName) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.filter(
        (bookmark) => bookmark.name !== productName
      );
      AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
