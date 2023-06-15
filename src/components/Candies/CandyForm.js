import React,{useState} from 'react'

function CandyForm(props) {
    const [enteredName,setEnteredName]=useState("");
    const [enteredDescription,setEnteredDescription]=useState("")
    const [enteredPrice,setEnteredPrice]=useState("")

    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    }

    const descriptionChangeHandler =(event)=>{
       setEnteredDescription(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()

        const enteredData={
            name:enteredName,
            description:enteredDescription,
            price:enteredPrice
        }
        // console.log(enteredData)
        props.onAddItem(enteredData.name,enteredData.description,enteredData.price)
        setEnteredName("")
        setEnteredDescription("")
        setEnteredPrice("")
    }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='name'>Candy Name:</label>
      <input type='text' id='name' value={enteredName} onChange={nameChangeHandler}/>
      <label htmlFor='description'>Description:</label>
      <input type='text' id='description' value={enteredDescription} onChange={descriptionChangeHandler}/>
      <label htmlFor='price'>Price:</label>
      <input type='number' id='price' value={enteredPrice} onChange={priceChangeHandler}/>
      <button>Add Candy</button>
    </form>
  )
}

export default CandyForm
