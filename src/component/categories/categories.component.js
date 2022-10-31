import { useContext, useEffect } from "react"
import { CategoryContext } from "../../contexts/categories/categories.context"
import { CategoriesContainer } from "./categories.styles"

const Categories = () => {
    const { categories, fetchCategories } = useContext(CategoryContext)

    useEffect(() => {
        fetchCategories()
    })

    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <p key={category.id}>{category.displayName}</p>
            ))}
        </CategoriesContainer>
    )
}

export default Categories