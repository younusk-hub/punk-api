import React, {useState} from 'react'
import "./Cards.scss"

const Cards = ({ beer, index}) => {
    
    const foods = beer.food_pairing.map(element => {
        return (
            <li>{element}</li>
        )
    });

    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div className='card flip-card-front' key={index}>
                    <h2 className='card__name'>{beer.name}</h2>
                    <img className='card__image' src={beer.image_url} alt={beer.name} />
                    <div className='card__info'>
                        <p className='card__info__abv'>ABV: {beer.abv}</p>
                        <p className='card__info__first-brewed'>First brewed: {beer.first_brewed}</p>
                        <p className='card__info__ph'>PH: {beer.ph}</p>
                    </div>
                </div>
                <div className='card flip-card-back' key={index}>
                    <h2 className='card__name'>{beer.name}</h2>
                    <div className='card__info'>
                        <p className='card__info__tagline'>{beer.tagline}</p>
                        <p className='card__info__volume'>{beer.volume.value} {beer.volume.unit}</p>
                        <ul className='card__info__list'>Great with: {foods}</ul>
                        <p className='card__info__description'>{beer.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards