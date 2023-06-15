import React from 'react'
import classes from "./CandyItem.module.css"

function CandyItem(props) {
    const price =`$${props.price}`
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
      <div>
        {/* <MealItemForm onAddToCart={addToCartHandler}/> */}
      </div>
    </li>
  )
}

export default CandyItem
