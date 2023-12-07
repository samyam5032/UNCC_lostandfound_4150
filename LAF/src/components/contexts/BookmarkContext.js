import React, { createContext, useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const db = getFirestore(); // Initialize Firestore
  const auth = getAuth(); // Initialize Firebase Authentication

  // Load bookmarks from Firestore when the component mounts
  useEffect(() => {
    const loadBookmarks = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(collection(db, "users", user.uid, "bookmarks"));
        const querySnapshot = await getDocs(q);
        const loadedBookmarks = [];
        querySnapshot.forEach((doc) => {
          loadedBookmarks.push({ id: doc.id, ...doc.data() });
        });
        setBookmarks(loadedBookmarks);
      }
    };

    loadBookmarks();
  }, [auth.currentUser]);

  // Function to add a bookmark
  const addBookmark = async (product) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = await addDoc(collection(db, "users", user.uid, "bookmarks"), product);
      setBookmarks((prevBookmarks) => [...prevBookmarks, { id: docRef.id, ...product }]);
    }
  };

  // Function to remove a bookmark
  const removeBookmark = async (bookmarkId) => {
    const user = auth.currentUser;
    if (user) {
      await deleteDoc(doc(db, "users", user.uid, "bookmarks", bookmarkId));
      setBookmarks((prevBookmarks) => prevBookmarks.filter(bookmark => bookmark.id !== bookmarkId));
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
