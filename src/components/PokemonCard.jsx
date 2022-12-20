import React, { useRef, useEffect, useState } from 'react'

const PokemonCard = ({
  id,
  image,
  shinyImage,
  name,
  type,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [currentImage, setCurrentImage] = useState(image)
  const imgRef = useRef(null)
  const [imgDimensions, setImgDimensions] = useState(null)

  useEffect(() => {
    // Set the dimensions of the current image
    if (imgRef.current) {
      setImgDimensions({
        width: imgRef.current.offsetWidth,
        height: imgRef.current.offsetHeight,
      })
    }
  }, [imgRef, image])

  const pokeName = name.charAt(0).toUpperCase() + name.slice(1)
  const pokeType = type.charAt(0).toUpperCase() + type.slice(1)
  const pokeId = id.toString().padStart(3, '0')

  const cardColor = `pokemon ${type}`

  return (
    <div
      onMouseEnter={() => setCurrentImage(shinyImage)}
      onMouseLeave={() => setCurrentImage(image)}
    >
      <div className={cardColor}>
        <h3 className="number">#{pokeId}</h3>
        <div className="img-container">
          <img
            ref={imgRef}
            src={currentImage}
            alt={name}
            className="pokemon-card-img"
            style={
              imgDimensions && imgDimensions.width && imgDimensions.height
                ? {
                    width: `${imgDimensions.width}px`,
                    height: `${imgDimensions.height}px`,
                  }
                : {}
            }
          />
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

export default PokemonCard
