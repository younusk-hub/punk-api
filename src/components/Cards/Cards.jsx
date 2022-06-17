import React from 'react'
import "./Cards.scss"

const Cards = ({ arr }) => {
    const displayCards = arr.map((beer, index) => {
        return (
            <div className='card' key={index}>
                <h2 className='card__name'>Name: {beer.name}</h2>
                <p>id: {beer.id}</p>
                <img className='card__image' src={beer.image_url} alt={beer.name} />
                <div className='card__info'>
                    <p className='card__info-abv'>ABV: {beer.abv}</p>
                    <p className='card__info-first-brewed'>First brewed: {beer.first_brewed}</p>
                    <p className='card__info-ph'>PH: {beer.ph}</p>
                </div>
                <p className='card__description'>{beer.description}</p>
            </div>
        )
    })

    return (
        <div className='card-container'>
            {displayCards}
        </div>
  )
}

export default Cards