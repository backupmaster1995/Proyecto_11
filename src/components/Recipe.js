import React,{useState, useContext} from 'react'
import {ModalContext} from "../context/ModalContext"
import {getModalStyle, useStyles} from "./theme/Recipe-theme"
import Modal from '@material-ui/core/Modal';

export default function Recipe({recipe}) {

    const [modalStyle] = useState(getModalStyle)
    const [open,setOpen] = useState(false)
    
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const {strDrink, strDrinkThumb,idDrink} = recipe

    const {setRecipeId,recipeInfo} = useContext(ModalContext)

    const showIngredients = (information) => {
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if( information[`strIngredient${i}`] ) {
                ingredientes.push(
                    <li key={information[`strIngredient${i}`]}> {information[`strIngredient${i}`]}  {information[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
   
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>

                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrinkThumb}`}/>

                <div className="card-body">
                    <button
                        className="btn btn-block btn-primary"
                        onClick={(e)=> {
                            setRecipeId(idDrink)
                            handleOpen()
                        } }
                    >Ver Receta</button>

                    <Modal
                        open={open}
                        onClose={(e)=> {
                            handleClose()
                            setRecipeId(null)
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeInfo.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {recipeInfo.strInstructions}
                            </p>

                            <img src={recipeInfo.strDrinkThumb} className="img-fluid my-4"/>

                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                {showIngredients(recipeInfo)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
