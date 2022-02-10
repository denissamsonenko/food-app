import React from "react";
import {useLocation, useNavigate, useParams, useMatch} from "react-router-dom";

function Movie() {
    const {id} = useParams();
    const value = useNavigate(); // instead History
    const routerMatch = useMatch('/movies');
    const location = useLocation();

    console.log(routerMatch)
    console.log(location)

    const goBack = () => value(-1);

    return (
        <>
            <button onClick={goBack} className="btn">Go back</button>
            <h1> Some movie {id}</h1>
        </>
    );
}

export default Movie;