import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
    .catch(error => console.error("Get Error: ", error))
  }, [update])

  function plantPost (formData) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(setUpdate(!update))
    .catch(error => console.error("Get Error: ", error))
  }

  function plantPatch (plant, inStock) {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({inStock: !inStock}),
    })
    .then(response => response.json())
    .then(setUpdate(!update))
    .catch(error => console.error("Get Error: ", error))
  }

  let searchResult = plants.filter((plant) => {
    return (
      plant.name.toLowerCase().includes(search.toLowerCase())
      )
  })

  return (
    <main>
      <NewPlantForm plantPost={plantPost}/>
      <Search plants={plants} search={search} setSearch={setSearch}/>
      <PlantList plants={searchResult} plantPatch={plantPatch} />
    </main>
  );
}

export default PlantPage;
