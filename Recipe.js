import React from 'react'

const Recipe = ({title,calories,image,ingridient}) => {
  return (
    <div>
    <p>{title}</p>
    <p>{calories}</p>
    <img src={image} alt="" />
    </div>
  )
}

export default Recipe