import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DETAIL_COCTAIL_API } from './../../api/index';


const Detail = () => {
    const { id } = useParams()
    const [drink, setDrink] = useState({})

    const getDetailInfo = async () => {
        const req = await fetch(DETAIL_COCTAIL_API + id)
        const res = await req.json()
        setDrink(res.drinks[0])
    }

    console.log(drink)
    useEffect(() => {
        getDetailInfo()
    }, [id])

    return (
        <div>
            <h2>{drink?.strAlcoholic}</h2>
            <h2>{drink?.strDrink}</h2>
            <img width={350} src={drink?.strDrinkThumb} alt="" />

            {
                Object.keys(drink).map(ingredient => (
                    ingredient.includes("strIngredient") && drink[ingredient] != null ?
                        <Link key={drink[ingredient]} to={`/ingredients/${drink[ingredient]}`}>
                            <h3 style={{ color: "red", fontSize: 20 }}>{drink[ingredient]}</h3>
                        </Link>
                        : null
                ))
            }
        </div>
    );
};

export default Detail;