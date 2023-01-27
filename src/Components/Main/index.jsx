import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from '../Detail';
import Home from '../Home';
import Ingredients from '../Ingredients';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/ingredients/:name" element={<Ingredients />} />
                <Route path="*" element={<h1>Not found 404</h1>} />
            </Routes>
        </div>
    );
};

export default Main;