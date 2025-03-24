function Truck({ truck }) {
    if (!truck) {
      return <div className="truck-placeholder">Select a truck to view</div>;
    }
  
    return (
      <div className="truck-details">
        <h2 className="truck-title">{truck.model}</h2>
        <p className="truck-tagline">Tagline: {truck.tagline}</p>
        <p className="truck-description">Description: {truck.content}</p>
        <img className="truck-image" src={truck.image} alt={truck.model} />
      </div>
    );
  }
  
  export default Truck;
  