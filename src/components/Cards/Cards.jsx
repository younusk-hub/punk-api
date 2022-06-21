import React, {useState} from 'react'
import "./Cards.scss"

const Cards = ({ beer, index}) => {
    const [ toggle, setToggle] = useState(false)

    const toggleInfo = () => {
        setToggle(!toggle)
    }
    
    const foods = beer.food_pairing.map(element => {
        return (
            <li>{element}</li>
        )
    });

    const falseToggle = (
        <div className='card' key={index}>
            <div>
                <h2 className='card__name'>Name: {beer.name}</h2>
                <p className='card__id'>id: {beer.id}</p>
            </div>
            <img className='card__image' src={beer.image_url} alt={beer.name} />
            <div className='card__info'>
                <p className='card__info__abv'>ABV: {beer.abv}</p>
                <p className='card__info__first-brewed'>First brewed: {beer.first_brewed}</p>
                <p className='card__info__ph'>PH: {beer.ph}</p>
            </div>
            <button onClick={toggleInfo} className='card__button'>More Info</button>
        </div>
    )

    const trueToggle = (
        <div className='card' key={index}>
            <div>
                <h2 className='card__name'>Name: {beer.name}</h2>
                <p className='card__id'>id: {beer.id}</p>
            </div>
            
            <div className='card__info'>
                <p className='card__info__tagline'>{beer.tagline}</p>
                <p className='card__info__volume'>{beer.volume.value} {beer.volume.unit}</p>
                <ul className='card__info__list'>Great with: {foods}</ul>
                <p className='card__info__description'>{beer.description}</p>
               
            </div>
             <button onClick={toggleInfo} className='card__button'>Go Back</button>
        </div>
    )


    return (
        <>{toggle ?  trueToggle : falseToggle}</>
    )
}

export default Cards