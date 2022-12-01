import React from 'react'

const pokemonCard = ({ id, name, image, type }) => {
  return (
    <div>
      <div className="pokemon">
        <div className="img-container">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt={name}
          />
        </div>
        <div className="info">
          <span className="number">#0{id}</span>
          <h3 className="name">{name}</h3>
          <small className="type">
            Type: <span>{type}</span>
          </small>
        </div>
      </div>
    </div>
  )
}

export default pokemonCard
