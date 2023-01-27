import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail';
import { SEARCH_BY_INGR } from '../../api/index';

const Ingredients = () => {
    const { name } = useParams()
    const [ingredient, setIngredient] = useState({})

    const getIngredientInfo = async () => {
        const req = await fetch(SEARCH_BY_INGR + name)
        const res = await req.json()
        setIngredient(res.ingredients[0])
    }
    console.log(ingredient)
    useEffect(() => {
        getIngredientInfo()
    }, [name])

    return (
        <div>
            <h1>Name of ingredient: {ingredient.strIngredient}</h1>
            <h2>Alcohol: {ingredient.strAlcohol}</h2>
            <h3>Description: {ingredient.strDescription ? ingredient.strDescription : "None description"}</h3>
        </div>
    );
};


export default Ingredients;