import React,{createContext,useEffect,useState} from 'react'
import axios from "axios"

export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [recipeId, setRecipeId] = useState(null)
    const [recipeInfo, setRecipeInfo] = useState({})

    useEffect(() => {
        if(recipeId) {
            const getRecipe = async () => {
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`
                try {
                    const response = await axios.get(URL)
                    setRecipeInfo(response.data.drinks[0])
                } catch (error) {
                    console.error(error)
                }
            }
            getRecipe()

            return ()=> {
                setRecipeInfo({})
            }
        }
    }, [recipeId])

    return (
        <ModalContext.Provider
            value={{
                recipeInfo,
                setRecipeId
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider
