import React from 'react'
import "./Filter.scss"
import Search from '../../components/Search/Search'
import Checkbox from '../../components/Checkbox/Checkbox'


const Filter = ({handleInput, label, handleChange}) => {
  return (
    <div className='filter-container'>
      <Search label={label} handleInput={handleInput} />
      <Checkbox handleChange = {handleChange} />
    </div>  
  )
}

export default Filter