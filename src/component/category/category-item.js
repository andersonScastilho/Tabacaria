import React from "react"
import { CategoryContainer } from "./category-item.styles"

const CategoryItem = ({ category }) => {
    return (
        <CategoryContainer>
            <p>{category.displayName}</p>
        </CategoryContainer>
    )
}
export default CategoryItem