import React, { useState } from 'react';

function NewPlantForm({ addPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 // NewPlantForm.js
const handleSubmit = (e) => {
  e.preventDefault();
  addPlant({
    name: formData.name,
    image: formData.image,
    price: formData.price // Keep as string
  });
  setFormData({
    name: '',
    image: '',
    price: '',
  });
};

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;