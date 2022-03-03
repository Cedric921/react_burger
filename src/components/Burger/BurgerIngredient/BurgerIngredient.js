import React from 'react';
import classes from './BurgerIngredient.css';


const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom'):
       ingredient = <div className={classes.BreadBottom}></div>
      break;
  
    default:
      break;
  }
};

export default BurgerIngredient;