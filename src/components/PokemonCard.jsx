import React from 'react'

const pokemonCard = ({ id, name, image, type }) => {
  const pokeName = name.charAt(0).toUpperCase() + name.slice(1)
  const pokeType = type.charAt(0).toUpperCase() + type.slice(1)
  const pokeId = id.toString().padStart(3, '0')

  const cardColor = `pokemon ${type}`

  return (
    <div>
      <div className={cardColor}>
          <h3 className="number">#{pokeId}</h3>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h3 className="name">{pokeName}</h3>
          <p className="type">
            Type: <span>{pokeType}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default pokemonCard
