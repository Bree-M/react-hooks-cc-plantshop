import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';
import Search from './Search';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch('http://localhost:6001/plants');
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };


const addPlant = async (newPlant) => {
  try {
    const response = await fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        name: newPlant.name,
        image: newPlant.image,
        price: newPlant.price.toString() // Ensure price is string
      }),
    });
    const data = await response.json();
    setPlants([...plants, data]);
  } catch (error) {
    console.error('Error adding plant:', error);
  }
};

  const toggleSoldOut = (id) => {
    setPlants(plants.map(plant => 
      plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
    ));
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <h1>Plant Store Admin</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm addPlant={addPlant} />
      <PlantList plants={filteredPlants} toggleSoldOut={toggleSoldOut} />
    </main>
  );
}

export default App;