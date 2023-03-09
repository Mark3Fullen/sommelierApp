import '../css/cocktails.css';

import React from "react";

import Button from '@mui/material/Button';


const UserPage = (props) => {

    const { user, favAlcohol, setFavAlcohol, showInstructions, setShowInstructions} = props;

    console.log(user, favAlcohol);

    return (
        <div>
            <div>
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="alcoholContainer">
                {Object.keys(favAlcohol).length > 0 ? favAlcohol.map(fav => {
                    const isInstructions = showInstructions.some((item) => item.idDrink === fav.idDrink);
                    return (
                        <div onClick={() => {
                            if (!isInstructions) {
                                setShowInstructions([...showInstructions, favAlcohol.find(pop => pop.idDrink === fav.idDrink)])
                            } else {
                                setShowInstructions(prevIns => prevIns.filter(item => item.idDrink !== fav.idDrink))
                            }
                        }}>
                            {!isInstructions ? <div>
                                <div className='alcoholItem' key={fav.idDrink}>
                                    <div className='alcoholItemInfo'>
                                        <h2>{fav.strDrink}</h2>
                                        <h4>{fav.strCategory}</h4>
                                    </div>
                                <img className='alcoholItemIMG' src={fav.strDrinkThumb} alt={fav.strDrinkThumb}/>
                                <br/>
                                <br/>
                                <p className='alcoholItemING'>Main Ingredients: {fav.strIngredient1}, {fav.strIngredient2}, {fav.strIngredient3}{fav.strIngredient4 ? ',' : null} {fav.strIngredient4}</p>
                                </div>
                            </div> 
                            : 
                            <div>
                                <h2>Instructions:</h2>
                                <p>{fav.strInstructions}</p>
                            </div>}
                            <Button variant="contained" onClick={() => {setFavAlcohol(favAlcohol.filter(item => item.idDrink !== fav.idDrink))}}>Remove Favorite</Button>
                        </div>
                    )
                }) : "Add some Favorites!"}
            </div>
        </div>
    )

}

export default UserPage