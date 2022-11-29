import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <h1>Pokedex</h1>
        <div className="poke-container" id="poke-container"></div>
        <div className="pokemon">
          <div className="img-container">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
              alt="bulbasaur"
            />
            <div className="info">
              <span className="number">#001</span>
              <h3 className="name">Bulbasaur</h3>
              <small className="type">
                Type: <span>grass</span>
              </small>
            </div>
          </div>
        </div>
        <div className="pokemon">
          <div className="img-container">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
              alt="bulbasaur"
            />
            <div className="info">
              <span className="number">#002</span>
              <h3 className="name">Ivysaur</h3>
              <small className="type">
                Type: <span>grass</span>
              </small>
            </div>
          </div>
        </div>
        <div className="pokemon">
          <div className="img-container">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
              alt="bulbasaur"
            />
            <div className="info">
              <span className="number">#003</span>
              <h3 className="name">Venusaur</h3>
              <small className="type">
                Type: <span>grass</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
