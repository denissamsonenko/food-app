import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getMealById} from "../api";
import Preloader from "../components/Preloader";

function Recipe() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});

    const prev = useNavigate();
    const goBack = () => prev(-1);


    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]));
    }, [id])

    return (
        <>
                <button style={{margin: "1rem 0"}} className="btn" onClick={goBack}>Go Back</button>
            {!recipe.idMeal ? <Preloader/> : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>
                    <table className="centered">
                        <thead>
                        <tr>
                            <th>Ingredients</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(recipe).map(key => {
                            if (key.includes('strIngredient') && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                )
                            }
                            return null;
                        })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5>Video:</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                    allowFullScreen/>
                        </div>

                    ) : null}
                </div>
            )}
        </>
    )
}

export default Recipe;