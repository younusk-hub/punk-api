import React from 'react'

const Cards = ({ arr }) => {
    console.log(arr);

    const displayCards = arr.map(beer => {
        
        
        return (
            <div className='card'>
                <h2 className='card__name'>{beer.name}</h2>
                <p className='card__abv'>{beer.abv}</p>
                <p className='card__first-brewed'>{beer.first_brewed}</p>
                <p className='card__ph'>{beer.ph}</p>
                <p className='card__description'>{beer.description}</p>
            </div>
        )
    })

    return (
        <div>
            {displayCards}
        </div>
  )
}

export default Cards