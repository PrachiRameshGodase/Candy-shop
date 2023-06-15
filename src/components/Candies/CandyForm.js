import React,{useState} from 'react';
import classes from "./CandyForm.module.css"
import axios from "axios"



const CandyForm=(props) =>{
    const [enteredName,setEnteredName]=useState("");
    const [enteredDescription,setEnteredDescription]=useState("");
    const [enteredPrice,setEnteredPrice]=useState("");
   
    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const descriptionChangeHandler=(event)=>{
        setEnteredDescription(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value)
    }

    
    async function submitHandler(event){
        event.preventDefault();

        const enteredData={
            name:enteredName,
            description:enteredDescription,
            price:enteredPrice,
            
        }
        // props.onAddItem(enteredData.name, enteredData.description, enteredData.price);

        try{
        const response=await axios.post("https://crudcrud.com/api/9abad6ba985e48069f1845d09124a1dd/sh",enteredData)
        console.log(response.data)
        }catch(error){
            console.log('AxiosError:', error)
        }

        setEnteredName("");
        setEnteredDescription("");
        setEnteredPrice("");
       
    }
  return (
    <div className={classes.container}>
        <form onSubmit={submitHandler}>
        <div className={classes.items}>
        <div className={classes.item}>
        <label htmlFor='name'>Candy Name:</label>
        <input type='text' value={enteredName} onChange={nameChangeHandler}/>
        </div>

        <div className={classes.item}>
        <label htmlFor='description'>Description:</label>
        <input type='text' value={enteredDescription} onChange={descriptionChangeHandler}/>
      </div>

      <div className={classes.item}>
        <label htmlFor='price'>Price:</label>
        <input type='number' value={enteredPrice} onChange={priceChangeHandler}/>
      </div>

      <div className={classes.item}>
        <button type='submit'>ADD CANDY</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default CandyForm
