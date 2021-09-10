import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, plantPatch}) {
  const plantList = plants.map(plant => {
    return(
      <PlantCard 
        key={plant.id}
        plant={plant}
        plantPatch={plantPatch}
      />
    )
  })
  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
