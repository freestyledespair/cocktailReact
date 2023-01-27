import { Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const Header = ({ search, getAllCocktails, filter }) => {
    const [input, setInput] = useState("")

    return (
        <header>
            <Stack spacing={3} direction="row" justifyContent={"center"} alignItems="center">
                <img width={100} src="https://img.freepik.com/free-vector/colorful-cocktail-neon-sign_23-2147825749.jpg?w=2000" alt="logo" />
                <h1>Cocktails | React</h1>
                <TextField value={input} onChange={(e) => setInput(e.target.value)} label="Cocktail Name" id="fullWidth" />
                <select onChange={(e) => filter(e.target.value)}>
                    <option value="Alcoholic">Alcoholic</option>
                    <option value="Non_Alcoholic">Non_Alcoholic</option>
                </select>
                <button onClick={() => {
                    search(input)
                    setInput("")
                }}>Search</button>
                <button onClick={getAllCocktails}>ALL COCKTAILS</button>
            </Stack>
        </header>
    );
};

export default Header;