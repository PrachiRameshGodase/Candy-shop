
import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import classes from "./CandyItemButton.module.css"


function CandyItemButton(props) {
  return (
    <Fragment>
      <Button variant="danger" className={classes.button} onClick={() => props.onAddToCart(1)}>Buy One</Button>
      <Button variant="danger" className={classes.button}  onClick={() => props.onAddToCart(2)}>Buy Two</Button>
      <Button variant="danger" className={classes.button} onClick={() => props.onAddToCart(3)} >Buy Three</Button>
    </Fragment>
  )
}

export default CandyItemButton
