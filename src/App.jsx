import React, { useState, useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokeData, setPokeData] = useState([])
  const [loadPoke, setLoadPoke] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=1'
  )

  const getPokemon = async () => {
    const res = await fetch(loadPoke)
    const data = await res.json()

    setLoadPoke(data.next)

    function createPokeObj(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        )
        const data = await res.json()
        setPokeData((currentList) => [...currentList, data])
      })
    }
    createPokeObj(data.results)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <>
      <h1 className="title">Pokédex</h1>
      <div className="poke-container" id="pokemon-container">
        {pokeData.map((pokemon, index) => (
          <PokemonCard
            id={pokemon.id}
            image={pokemon.sprites.other['official-artwork'].front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            key={index}
          />
        ))}
      </div>
      {/* <button class="btn" onClick={() => getPokemon()}>
        Load More
      </button> */}
      <div className="btn-bg Pokemon">
        <div className="btn-group">
          <div className="btn ball">
            <button>
              <div className="pokemon-ball"></div>
              <a>
                Load
                <span data-letters="More!"></span>
                <span data-letters="More!"></span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
