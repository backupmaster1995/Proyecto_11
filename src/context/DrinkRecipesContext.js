import React,{createContext, useState, useEffect} from 'react'
import axios from "axios"

export const RecipesContext = createContext()

const RecipesProvider = (props) => {

    const [userSearch, setUserSearch ] = useState({
        ingredient:"",
        category:""
    })
    const {ingredient,category} = userSearch
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        if(ingredient && category) {
            const getRecipes = async () => {
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
                try {
                    const response = await axios.get(URL)
                    setRecipes(response.data.drinks)
                } catch (error) {
                    console.error(error)
                }
            }
            getRecipes()
        }    
    }, [userSearch])

    return (
        <RecipesContext.Provider
            value={{
                recipes,
                setUserSearch
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}
export default RecipesProvider


