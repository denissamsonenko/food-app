import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getFilteredCategory} from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
    const [meals, setMeals] = useState([])
    const {name} = useParams();

    const prev = useNavigate();
    const goBack = () => prev(-1);

    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals);
        })
    }, [name])

    return (
        <>
            <button className="btn" onClick={goBack}>Go back</button>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    )
}

export default Category;