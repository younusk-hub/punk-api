import React from 'react'
import Cards from '../../components/Cards/Cards'
import "./CardsContainer.scss"

const CardsContainer = ({ arr }) => {
    const displayCards = arr.map((beer, index) => {
        return (
            <Cards beer = {beer} index = {index}/>
        )
    })
    
  return (
    <div className='card-container'>
        {displayCards}
    </div>
  )
}

export default CardsContainer