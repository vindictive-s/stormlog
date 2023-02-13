import { createContext, useEffect, useState } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

const StormlogContext = createContext();

const StormProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));

      setPosts(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              postedOn: doc.data().postedOn.toDate(),
              author: doc.data().author,
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  return (
    <StormlogContext.Provider value={{ posts, users }}>
      {children}
    </StormlogContext.Provider>
  );
};

export { StormlogContext, StormProvider };
