import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [pokeData, setPokeData] = useState([])
  const [load, setLoad] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20')

  const pokeCount = 150

  const fetchPokemon = async () => {
    for (let i = 1; i <= pokeCount; i++) {
      await getPokemon(i)
    }
  }

  const getPokemon = async (id) => {
    // const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(load)
    const data = await res.json()
    createPokeCard(data)
  }

  let createPokeCard = (pokemon) => {
    console.log(pokemon)
  }
  console.log(createPokeCard.name)

  useEffect(() => {
    getPokemon()
  }, [])

  fetchPokemon()

  return (
    <>
      <h1>Pokedex</h1>
      <div className="poke-container" id="pokemon-container">
        <div className="pokemon">
          <div className="img-container">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              alt="bulbasaur"
            />
          </div>
          <div className="info">
            <span className="number">#001</span>
            <h3 className="name">Bulbasaur</h3>
            <small className="type">
              Type: <span>grass</span>
            </small>
          </div>
        </div>
        {/* <div className="pokemon">
          <div className="img-container">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
              alt="bulbasaur"
            />
          </div>
          <div className="info">
            <span className="number">#002</span>
            <h3 className="name">Ivysaur</h3>
            <small className="type">
              Type: <span>grass</span>
            </small>
          </div>
        </div>
        <div className="pokemon">
          <div className="img-container">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
              alt="bulbasaur"
            />
          </div>
          <div className="info">
            <span className="number">#003</span>
            <h3 className="name">Venusaur</h3>
            <small className="type">
              Type: <span>grass</span>
            </small>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default App
