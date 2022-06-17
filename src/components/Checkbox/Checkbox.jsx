import React from 'react'
import "./Checkbox.scss"

const Checkbox = ({handleChange}) => {
  return (
    <form className='checkboxes'>
        <label htmlFor="abv">High ABV (more than: 6.0%): </label>
        <input id='abv' type="checkbox" onChange={handleChange} value="abv" />

        <label htmlFor="classic-range">Classic Range: </label>
        <input id='classic-range' type="checkbox" onChange={handleChange} value="classic-range" />

        <label htmlFor="ph">Acidic (ph lower than 4):</label>
        <input id='ph' type="checkbox" onChange={handleChange} value="ph" />
    </form>
  )
}

export default Checkbox