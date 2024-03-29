import React, { useState, useEffect } from 'react'
import './App.css'
import DarkModeToggle from './components/PokeDarkMode'
import backToTop from './components/PokeLoader'
import PokemonCard from './components/PokemonCard'
import SortByRegion from './components/PokeRegion'

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

    // Creating a new Set to store unique pokemon IDs
    const uniqueIds = new Set()

    // a for-of loop to iterate over the pokemon data
    // and create a new list of pokemon objects with only unique IDs
    const newPokeData = []
    for (const pokemon of data.results) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      )
      const pokeData = await res.json()
      console.log(pokeData)

      // Add the pokemon to the new list if its ID is not in the Set
      if (!uniqueIds.has(pokeData.id)) {
        newPokeData.push(pokeData)
        uniqueIds.add(pokeData.id)
      }
    }

    // Using the spread operator to add the new pokemon to the existing list
    setPokeData([...pokeData, ...newPokeData])
    setPokeDataIds(uniqueIds)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  let showButton = window.scrollY > 150

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      showButton = false
      document.querySelector('.back-to-top-button').style.display = 'none'
    } else {
      const backToTopButton = document.querySelector('.back-to-top-button')
      if (backToTopButton.style.display === 'none') {
        backToTopButton.style.display = 'block'
      }
      showButton = true
    }
  })

  const sortByRegion = (region) => {
    const sortedPokeData = pokeData.sort((a, b) => {
      if (a.region.name === region) {
        return -1
      } else if (b.region.name === region) {
        return 1
      } else {
        return 0
      }
    })

    setPokeData(sortedPokeData)
  }

  return (
    <>
      <h1 className="title">Pokédex</h1>
      <SortByRegion sortData={sortedPokeData} />
      <DarkModeToggle />
      <div className="poke-container" id="pokemon-container">
        {pokeData.map((pokemon, index) => (
          <PokemonCard
            id={pokemon.id}
            image={pokemon.sprites.other['official-artwork'].front_default}
            shinyImage={pokemon.sprites.front_shiny}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            key={index}
            onMouseEnter={() => {
              // Update the image prop with the shiny image URL
              this.setState({ image: pokemon.sprites.front_shiny })
            }}
            onMouseLeave={() => {
              // Revert back to the default image when the mouse leaves the element
              this.setState({
                image: pokemon.sprites.other['official-artwork'].front_default,
              })
            }}
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
        onClick={() => backToTop(showButton)}
      ></button>
    </>
  )
}

export default App
