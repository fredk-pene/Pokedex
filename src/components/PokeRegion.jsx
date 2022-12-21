import React, { useState, useEffect } from 'react';

function SortByRegion(props) {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/region/')
      .then(response => response.json())
      .then(data => setRegions(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Sort by Region</h2>
      <ul>
        {regions.map(region => (
          <li key={region.name}>
            <button onClick={() => props.sortData(region.name)}>
              {region.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortByRegion;
