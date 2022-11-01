import { useContext, useEffect } from "react"
import { CategoryContext } from "../../contexts/categories/categories.context"
import CategoryItem from "../category/category-item"
import { CategoriesContainer } from "./categories.styles"

const Categories = () => {
    const { categories, fetchCategories } = useContext(CategoryContext)

    useEffect(() => {
        fetchCategories()
    })

    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <CategoryItem category={category} />
            ))}
        </CategoriesContainer>
    )
}

export default Categories