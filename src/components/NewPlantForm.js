import React, { useState } from "react";

function NewPlantForm({plantPost}) {
  const blankForm = {
    name: "",
    image: "",
    price: ""
  }
  const [formData, setFormData] = useState(blankForm)

  function handleFormData (e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit (e) {
    e.preventDefault();
    plantPost(formData)
    setFormData(blankForm)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name}
          onChange={handleFormData}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleFormData}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={handleFormData}
        />
        <button type="submit">
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
