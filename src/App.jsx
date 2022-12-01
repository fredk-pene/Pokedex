import React, { useState, useEffect } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  const [pokeData, setPokeData] = useState([])
  const [loadPoke, setLoadPoke] = useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=150'
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
    await console.log(pokeData)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <>
      <h1>Pokedex</h1>
      <div className="poke-container" id="pokemon-container">
        {pokeData.map((pokemon, index) => (
          <PokemonCard
            image={pokemon.sprites.other['official-artwork'].front_default}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            key={index}
          />
        ))}
      </div>
    </>
  )
}

export default App

// const pokeCount = 150

{
  /* <div className="pokemon">
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
</div> */
}
{
  /* <button className='load-more'>Load More</button> */
}
{
  /* <div className="pokemon">
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
</div> */
}
// const fetchPokemon = async () => {
//   for (let i = 0; i <= pokeCount; i++) {
//     await getPokemon(i)
//   }
// }
