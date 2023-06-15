import React, {useEffect,useState} from 'react'
import CandyItem from './CandyItem/CandyItem'
import Card from '../UI/Card'
import classes from "./AvailableCandies.module.css"
import axios from "axios"


function Availablecandies() {

    const [candyList,setCandyList]=useState([])

    async function fetchItems() {
        const response = await axios.get("https://crudcrud.com/api/9abad6ba985e48069f1845d09124a1dd/sh");
        console.log(response.data)
        const candyList = response.data.map((item) => {
          return {
            id: item.id,
            description:item.description,
            name: item.name,
            price: item.price,
            
            
        };
          
        });
        setCandyList(candyList);
        console.log(candyList);
      } 

      useEffect(() => {   
        fetchItems();
       }, []);
      

    const candiesList=<ul>
        {candyList.map((candy)=>(
            <CandyItem key={candy.id}
                id={candy.id}
                name={candy.name}
                description={candy.description}
                price={candy.price}
                ></CandyItem>
        ))}
    </ul>
  return (
    <section  className={classes.meals}>
      
      <Card>{candiesList}</Card>
    </section>
  )
}

export default Availablecandies
