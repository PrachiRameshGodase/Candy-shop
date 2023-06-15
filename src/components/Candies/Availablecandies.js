import React from 'react'
import CandyItem from './CandyItem/CandyItem'
import Card from '../UI/Card'
import classes from "./AvailableCandies.module.css"

function Availablecandies(props) {
    const candiesList=<ul>
        {props.item.map((candy)=>(
            <CandyItem key={candy.id}
                id={candy.id}
                name={candy.name}
                description={candy.price}
                price={candy.price}
            />
        ))}
    </ul>
  return (
    <section  className={classes.meals}>
      
      <Card>{candiesList}</Card>
    </section>
  )
}

export default Availablecandies
