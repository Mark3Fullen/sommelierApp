import '../css/cocktails.css';
import React from "react";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';


const HomePage = (props) => {

    const {activeUser ,popAlcohol, setFavAlcohol, favAlcohol} = props;

    console.log(popAlcohol)

    return (
        <div className='cd'>
            {Object.keys(popAlcohol).length > 0 ? popAlcohol.map((drink) => {
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
                        {Object.keys(activeUser).length > 0 ? <FavoriteBorderIcon onClick={() => {setFavAlcohol([...favAlcohol, popAlcohol.find(pop => pop.idDrink === drink.idDrink)])}}/> : null} 
                    </div>
                )
            }) : "Uh oh :/"}
        </div>
    )

}

export default HomePage