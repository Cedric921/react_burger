import React from 'react';
import Aus from '../../../hoc/Aus';

const OrderSummary = (props) => {
    const ingrdientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
        });

    return (
        <Aus>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingrdientSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aus>
    )
};

export default OrderSummary