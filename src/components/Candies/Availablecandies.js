import React, {useEffect,useState} from 'react'
import CandyItem from './CandyItem/CandyItem'
import Card from '../UI/Card'
import classes from "./AvailableCandies.module.css"
import axios from "axios"


function Availablecandies() {

    const [candyList,setCandyList]=useState([])

    async function fetchItems() {
        const response = await axios.get("https://crudcrud.com/api/836784d939394b7085392d04d2f93722/candyshop");
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
       }, [fetchItems]);
      

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
