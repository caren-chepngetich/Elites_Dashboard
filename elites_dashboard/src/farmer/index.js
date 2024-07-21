import React, { useState, useEffect } from 'react';
import './index.css';

const FarmersForm = () => {
 
  // State for farmers list and form visibility
  const [farmers, setFarmers] = useState(() => {
    const savedFarmers = localStorage.getItem('farmers');
    return savedFarmers ? JSON.parse(savedFarmers) : [];
  });

  const [showAddForm, setShowAddForm] = useState(false);

  // State for new farmer input fields
  const [newFarmer, setNewFarmer] = useState({
    
    id: '',
    names: '',
    surname: '',
    acreage: '',
    location: '',
  });

  // UseEffect to update local storage whenever farmers array changes
  useEffect(() => {
    localStorage.setItem('farmers', JSON.stringify(farmers));
  }, [farmers]);

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    setNewFarmer({ ...newFarmer, [e.target.name]: e.target.value });
  };

  // Function to add a new farmer to the list
  const handleAddRow = (e) => {
    e.preventDefault();
    const id = Date.now(); // Generate a unique ID (you may use a more robust method)
    setFarmers([...farmers, { ...newFarmer, id }]);
    setNewFarmer({
      id: '',
      names: '',
      surname: '',
      acreage: '',
      location: '',
    });
    setShowAddForm(false);
  };

  // Function to remove a farmer from the list
  const handleRemoveRow = (id) => {
    setFarmers(farmers.filter(farmer => farmer.id !== id));
  };

  // Rendered table row for each farmer
  const renderFarmers = () => {
    return farmers.map(farmer => (
      <tr key={farmer.id}>
        <td>{farmer.id}</td>
        <td>{farmer.names}</td>
        <td>{farmer.surname}</td>
        <td>{farmer.acreage}</td>
        <td>{farmer.location}</td>
        <td>
          <button className="remove-button" onClick={() => handleRemoveRow(farmer.id)}>
            Remove
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="farmers-form">
      {/* Form to add a new farmer */}
      {showAddForm && (
        <form onSubmit={handleAddRow} className="form">
          <input
            type="text"
            name="names"
            value={newFarmer.names}
            onChange={handleInputChange}
            placeholder="Names"
            required
            className="farmer-column"
          />
          <input
            type="text"
            name="surname"
            value={newFarmer.surname}
            onChange={handleInputChange}
            placeholder="Surname"
            required
            className="farmer-column"
          />
          <input
            type="text"
            name="acreage"
            value={newFarmer.acreage}
            onChange={handleInputChange}
            placeholder="Acreage"
            required
            className="farmer-column"
          />
          <input
            type="text"
            name="location"
            value={newFarmer.location}
            onChange={handleInputChange}
            placeholder="Location"
            required
            className="farmer-column"
          />
          <button type="submit">Add Farmer</button>
        </form>
      )}

      {/* Table to display list of farmers */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Names</th>
            <th>Surname</th>
            <th>Acreage</th>
            <th>Location</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {renderFarmers()}
        </tbody>
      </table>

      {/* Button to toggle add form visibility */}
      <button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Hide Form' : 'Show Add Form'}
      </button>
    </div>
  );
};

export default FarmersForm;
