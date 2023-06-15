import React, {useContext} from 'react'
import CartItem from './CartItem'
import classes from "./Cart.module.css"
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'

function Cart(props) {
    const cartCtx=useContext(CartContext) ;

    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length > 0;

    const cartItemRemoveHandler=(id)=>{
      cartCtx.removeItem(id);
    }
   
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({
          id: item.id,
          name: item.name,
          amount: 1, // Always add one item at a time
          price: item.price
        });
      };
    

    const cartItems=<ul className={classes['cart-items']}> 
    {cartCtx.items.map((item)=>(
        <CartItem 
        key={item.id}
        name={item.name} 
        amount={item.amount}
        price={item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}/>
    ))}</ul>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
        
      </div>
    </Modal>
  )
}
 
export default Cart
