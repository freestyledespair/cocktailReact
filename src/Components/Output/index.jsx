import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Output = ({ drinks }) => {
    // console.log(drinks)
    return (
        <Stack justifyContent={"space-around"} direction="row" flexWrap={"wrap"}>
            {
                drinks ?
                    drinks?.map(el => (
                        <Card key={el?.idDrink} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={el?.strDrinkThumb}
                                    alt={el?.strDrink}
                                />
                                <CardContent>
                                    <Typography title={el?.strDrink} gutterBottom variant="h5" component="div">
                                        {el?.strDrink.length > 20 ? el?.strDrink.slice(0, 20) + "..." : el?.strDrink}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={`/detail/${el?.idDrink}`}>
                                    <Button size="large" color="primary">
                                        More...
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))
                    :
                    <h1>Empty</h1>
            }
        </Stack>
    );
};

export default Output;