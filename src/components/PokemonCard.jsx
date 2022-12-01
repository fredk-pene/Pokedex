import React from 'react'

const pokemonCard = ({ id, name, image, type }) => {
  const pokeName = name.charAt(0).toUpperCase() + name.slice(1)
  const pokeType = type.charAt(0).toUpperCase() + type.slice(1)
  const pokeId = id.toString().padStart(3, '0')
  return (
    <div>
      <div className="pokemon">
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <span className="number">#{pokeId}</span>
          <h3 className="name">{pokeName}</h3>
          <small className="type">
            Type: <span>{pokeType}</span>
          </small>
        </div>
      </div>
    </div>
  )
}

export default pokemonCard
