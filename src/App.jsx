import React, { useState, useEffect } from 'react'
import './App.css'
import backToTop from './components/PokeLoader'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokeData, setPokeData] = useState([])
  const [pokeDataIds, setPokeDataIds] = useState(new Set())
  const [loadPoke, setLoadPoke] = useState(
    'https://pokeapi.co/api/v2/pokemon/?&limit=21'
  )

  const getPokemon = async () => {
    const res = await fetch(loadPoke)
    const data = await res.json()

    setLoadPoke(data.next)

    // Create a new Set to store unique pokemon IDs
    const uniqueIds = new Set()

    // Use a for-of loop to iterate over the pokemon data
    // and create a new list of pokemon objects with only unique IDs
    const newPokeData = []
    for (const pokemon of data.results) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      )
      const pokeData = await res.json()

      // Add the pokemon to the new list if its ID is not in the Set
      if (!uniqueIds.has(pokeData.id)) {
        newPokeData.push(pokeData)
        uniqueIds.add(pokeData.id)
      }
    }

    // Use the spread operator to add the new pokemon to the existing list
    setPokeData([...pokeData, ...newPokeData])
    setPokeDataIds(uniqueIds)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  let showButton = window.scrollY > 100

  window.addEventListener('scroll', () => {
    // Update the value of showButton based on current scroll position
    if (document.body.scrollTop === 50) {
      // If user has scrolled back t top, hide the button
      showButton = false
    } else {
      // If user has not scrolled back to top, show the button
      showButton = true
    }
  })

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
      <div className="btn-bg Pokemon">
        <div className="btn-group">
          <div className="btn ball">
            <button onClick={getPokemon}>
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
      <button
        className={`back-to-top-button${showButton ? ' show' : ''}`}
        onClick={backToTop}
      ></button>
    </>
  )
}

export default App
