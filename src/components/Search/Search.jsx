import React from 'react'
import "./Search.scss"

const Search = ({handleInput, label}) => {

    const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

    return (
        <form className="search-box">
            <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label>
            <input type="text" name={label} onInput={handleInput} className="search-box__input" placeholder="Search..."/>
        </form>
  )
}

export default Search