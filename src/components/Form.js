import React, {useContext, useState} from 'react'
import {CategoriesContext} from "../context/CategoriesContext"
import {RecipesContext} from "../context/DrinkRecipesContext"
import Error from "./Error"

export default function Form() {

    const [values, setValues] = useState({
        ingredient:"",
        category:""
    })
    const [error, setError] = useState(false)
    const {ingredient,category } = values

    const {categories} = useContext(CategoriesContext)
    const {setUserSearch} = useContext(RecipesContext)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!ingredient || !category) {
            return setError(true)
        }
        setError(false)
        setUserSearch(values)
    }
    
    return (
        <form
            className="col-12"
            onSubmit={handleSubmit}
        >
            <div className="text-center">
                <h3>Busca bebidas por Categoría o Ingredientes</h3>
            </div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        className="form-control"
                        name="ingredient"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={handleChange}
                    />
                </div>
                
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={handleChange}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {
                            categories.map((category)=>(
                                <option 
                                value={category.strCategory} 
                                key={category.strCategory}
                                >{category.strCategory}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="col-md-4">
                    <button
                        type="submit"
                        className="btn btn-block btn-primary"
                    >Buscar Bebidas</button>
                </div>
            </div>
            <div className="text-center mt-3">
                {error && <Error message="Debes completar todos los campos" />}
            </div>
        </form>
    )
}
