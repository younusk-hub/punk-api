import React from 'react'
import "./Checkbox.scss"

const Checkbox = ({ handleChange }) => {
  return (
    <form className='checkboxes'>
        <label className='checkboxes__label' htmlFor="abv">High ABV (more than: 6.0%): </label>
        <input className='checkboxes__input' id='abv' type="checkbox" onChange={handleChange} value="abv" />

        <label className='checkboxes__label' htmlFor="classic-range">Classic Range: </label>
        <input className='checkboxes__input' id='classic-range' type="checkbox" onChange={handleChange} value="classic-range" />

        <label className='checkboxes__label' htmlFor="ph">Acidic (ph lower than 4):</label>
        <input className='checkboxes__input' id='ph' type="checkbox" onChange={handleChange} value="ph" />
    </form>
  )
}

export default Checkbox