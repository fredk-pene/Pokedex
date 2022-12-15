import React from 'react'

const pokemonCard = ({ id, name, image, type }) => {
  const pokeName = name.charAt(0).toUpperCase() + name.slice(1)
  const pokeType = type.charAt(0).toUpperCase() + type.slice(1)
  const pokeId = id.toString().padStart(3, '0')

  const cardColor = `pokemon ${type}`

  // Select all of the images on the page
  const images = document.querySelectorAll('image')

  // Create an intersection observer
  const observer = new IntersectionObserver((entries) => {
    // Loop through the entries
    entries.forEach((entry) => {
      // If the entry is intersecting the viewport
      if (entry.isIntersecting) {
        // Load the image
        const img = entry.target
        img.src = img.dataset.src
      }
    })
  })

  // Observe each of the images
  images.forEach((img) => observer.observe(img))

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
