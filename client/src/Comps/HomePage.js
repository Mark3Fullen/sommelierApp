import '../css/cocktails.css';
import React, {useState} from "react";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';



const HomePage = (props) => {

    const {activeUser, latAlcohol, popAlcohol, setFavAlcohol, favAlcohol} = props;

    const [pop, setPop] = useState(true)

    const latest = () => {
        return Object.keys(latAlcohol).length > 0 ? latAlcohol.map((drink) => {

            const isFav = favAlcohol.some((item) => item.idDrink === drink.idDrink);

            return (
                <div className='alcoholItem' key={drink.idDrink}>
                    <div className='alcoholItemInfo'>
                        <h2>{drink.strDrink}</h2>
                        <h4>{drink.strCategory}</h4>
                    </div>
                    <img className='alcoholItemIMG' src={drink.strDrinkThumb} alt={drink.strDrinkThumb}/>
                    <br/>
                    <br/>
                    <p className='alcoholItemING'>Main Ingredients: {drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}{drink.strIngredient4 ? ',' : null} {drink.strIngredient4}</p>
                    {Object.keys(activeUser).length > 0 ? (
                        <Button onClick={() => {
                            if (!isFav) {
                                setFavAlcohol([...favAlcohol, latAlcohol.find(pop => pop.idDrink === drink.idDrink)]);
                            } else {
                                setFavAlcohol((prevFav) => prevFav.filter(item => item.idDrink !== drink.idDrink))
                            }
                        }}>
                            {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </Button>
                    ) : null} 
                </div>
            )
        }) : "Please Wait..."
    }

    const popular = () => {
        return Object.keys(popAlcohol).length > 0 ? popAlcohol.map((drink) => {

            const isFav = favAlcohol.some((item) => item.idDrink === drink.idDrink);

            return (
                <div className='alcoholItem' key={drink.idDrink}>
                    <div className='alcoholItemInfo'>
                        <h2>{drink.strDrink}</h2>
                        <h4>{drink.strCategory}</h4>
                    </div>
                    <img className='alcoholItemIMG' src={drink.strDrinkThumb} alt={drink.strDrinkThumb}/>
                    <br/>
                    <br/>
                    <p className='alcoholItemING'>Main Ingredients: {drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}{drink.strIngredient4 ? ',' : null} {drink.strIngredient4}</p>
                    {Object.keys(activeUser).length > 0 ? (
                        <Button onClick={() => {
                            if (!isFav) {
                                setFavAlcohol([...favAlcohol, popAlcohol.find(pop => pop.idDrink === drink.idDrink)]);
                            } else {
                                setFavAlcohol((prevFav) => prevFav.filter(item => item.idDrink !== drink.idDrink))
                            }
                        }}>
                            {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </Button>
                    ) : null} 
                </div>
            )
        }) : "Please Wait..."
    }

    return (
        <div>
            <div>
                <div>
                    <Button variant='contained' sx={{ "marginRight" : "2rem" }} onClick={() => {setPop(true)}}>Popular</Button>
                    <Button variant='contained' sx={{ "marginLeft" : "2rem" }} onClick={() => {setPop(false)}}>Latest</Button>
                </div>
            </div>
            <div className='alcoholContainer'>
                {pop ? popular() : latest()}
            </div>
        </div>
    )

}

export default HomePage