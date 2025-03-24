import { useState, useEffect } from 'react';
import Nav from './Nav';
import Truck from './Truck';
import './App.css';  // Import the CSS

function App() {
  const [trucks, setTrucks] = useState([]);
  const [selectedTruck, setSelectedTruck] = useState(null);

  useEffect(
    () => {
      fetch('/src/data.json')
        .then((response) => response.json())
        .then((data) => setTrucks(data))
        .catch((error) => console.log("Error loading data", error))
    }, []
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Kenworth Trucks</h1>
      <Nav trucks={trucks} onTruckSelect={setSelectedTruck} />
      <Truck truck={selectedTruck} />
    </div>
  );
}

export default App;

