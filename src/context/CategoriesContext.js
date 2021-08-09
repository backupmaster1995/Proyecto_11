import React,{createContext, useState, useEffect} from 'react'
import axios from "axios"

export const CategoriesContext = createContext();

const CategoriesProvider = (props) => {
    
    const [categories,setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            try {
                const response = await axios.get(URL)
                setCategories(response.data.drinks)
            } catch (error) {
                console.error(error)
            }
        }
        getCategories()
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}
export default CategoriesProvider
