import React, { useContext } from 'react'
import classes from "./CandyItem.module.css"
import CandyItemButton from './CandyItemButton'
import CartContext from '../../../store/cart-context'

function CandyItem(props) {
    const cartCtx=useContext(CartContext)
    const price =`$${props.price}`

    const addItemToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        {/* {`Candy Name:${props.name}---Description${props.description}---Price${price}`} */}
        </div>
      <div>
       <CandyItemButton onAddToCart={addItemToCartHandler}/>
      </div>
    </li>
  )
}

export default CandyItem
