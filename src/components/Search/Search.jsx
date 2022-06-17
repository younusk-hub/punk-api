import React from 'react'

const Search = ({handleInput, label}) => {

    const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

    return (
        <form className="search-box">
            <label htmlFor={label} className="search-box__label">{capitalizedLabel}</label>
            <input type="text" name={label} onInput={handleInput} className="search-box__input"/>
        </form>
  )
}

export default Search