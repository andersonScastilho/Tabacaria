import { createContext, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";

export const CategoryContext = createContext({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve(),
});

const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const categoriesFromFirestore = [];

      const querySnapshot = await getDocs(collection(db, "Categories"));

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });
      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{ categories, isLoading, fetchCategories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryContextProvider;
