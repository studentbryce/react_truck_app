function Nav({ trucks, onTruckSelect }) {
    return (
      <nav className="nav-container">
        <h2 className="nav-title">Models</h2>
        <ul className="nav-list">
          {trucks.map((truck) => (
            <li key={truck.model} className="nav-item" onClick={() => onTruckSelect(truck)}>
              <a href="#" className="nav-link" onClick={() => onTruckSelect(truck)}>
                {truck.model}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  