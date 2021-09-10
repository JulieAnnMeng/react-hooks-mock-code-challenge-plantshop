import React, { useState } from "react";

function PlantCard({plant, plantPatch}) {
  const {name, image, price} = plant;
  const [inStock, setInStock] = useState(true);

  function handleStock (e) {
    e.preventDefault();
    setInStock(!inStock);
    plantPatch(plant, inStock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
