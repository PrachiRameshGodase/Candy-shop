import {useState} from "react"
import CandyForm from "./CandyForm"
import Availablecandies from "./Availablecandies"

function Candies() {
const [enteredData,setEnteredData]=useState([])

const addItemHandler=(name, description, price)=>{
    setEnteredData((prevData)=>{
        return [...prevData,{
            id:Math.random().toString(),
            name:name,
            description:description,
            price:price
        }]
    })
  }
  return (
    <>
    <CandyForm onAddItem={addItemHandler}/>
    <Availablecandies item={enteredData}/>
    </>
  )
}

export default Candies
