import React from 'react'

function CandyList(props) {
  return (
    <div>
      {props.item.map((candy)=>(
        <li key={candy.id}>
            {`${candy.name} ${candy.description} ${candy.price}`}
            {<button>Buy One</button>}
            {<button>Buy Two</button>}
            {<button>Buy Three</button>}

        </li>
      ))}
    </div>
  )
}

export default CandyList
