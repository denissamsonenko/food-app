import React from "react";
import Meal from "./Meal";

function MealList(props) {
    const {meals} = props;

    return (
        <div className="list">
            {meals.map(item => <Meal key={item.idMeal} {...item}/>)}
        </div>
    );
}

export default MealList;