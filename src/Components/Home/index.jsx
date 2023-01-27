import React, { useEffect, useState } from 'react';
import { ALLCOCTAILS_API, FILTER, SEARCH_COCTAIL_BY_NAME } from '../../api';
import Header from '../Header';
import Output from '../Output';

const Home = () => {
    const [drinks, setDrinks] = useState([])

    const getAllCocktails = async () => {
        const req = await fetch(ALLCOCTAILS_API)
        const res = await req.json()
        setDrinks(res.drinks)
    }

    const search = async (name) => {
        const req = await fetch(SEARCH_COCTAIL_BY_NAME + name)
        const res = await req.json()
        setDrinks(res?.drinks)
    }

    const filter = async (value) => {
        const req = await fetch(FILTER + value)
        const res = await req.json()
        setDrinks(res?.drinks)
    }

    useEffect(() => {
        getAllCocktails()
    }, [])

    return (
        <div>
            <Header search={search} getAllCocktails={getAllCocktails} filter={filter} />
            <Output drinks={drinks} />
        </div>
    );
};

export default Home;