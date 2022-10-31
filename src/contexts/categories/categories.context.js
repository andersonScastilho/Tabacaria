import { createContext, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { useEffect } from "react"

export const CategoryContext = createContext({
    categories: [],
    fetchCategories: () => Promise.resolve()
})

const CategoryContextProvider = ({ children }) => {

    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        try {
            const categoriesFromFirestore = []

            const querySnapshot = await getDocs(collection(db, 'Categories'))

            querySnapshot.forEach((doc) => {
                categoriesFromFirestore.push(doc.data())
            })

            setCategories(categoriesFromFirestore)
        } catch (error) {
            console.log({ error })
        }
    }
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <CategoryContext.Provider value={{ categories, fetchCategories }}>
            {children}
        </CategoryContext.Provider>
    )
}
export default CategoryContextProvider