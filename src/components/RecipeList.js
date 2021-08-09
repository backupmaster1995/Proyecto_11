import React,{useContext} from 'react'
import {RecipesContext} from "../context/DrinkRecipesContext"
import Recipe from "./Recipe"

export default function RecipeList() {

    const {recipes} = useContext(RecipesContext)

    return (
        <div className="row mt-5">
            {
                recipes.map((recipe)=> (
                    <Recipe 
                        key={recipe.idDrink}
                        recipe={recipe}
                    />
                ))
            }
        </div>
    )
}
