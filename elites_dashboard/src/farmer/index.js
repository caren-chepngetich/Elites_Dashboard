
import './index.css';


import React, { useState } from 'react';

const FarmersForm = () => {
  // State to hold the list of farmers
  const [farmers, setFarmers] = useState([
    { id: '', names: '', surname: '', acreage: '', location: '' },
  ]);

  // Function to handle changes in input fields
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newFarmers = [...farmers];
    newFarmers[index][name] = value;
    setFarmers(newFarmers);
  };

  // Function to add a new row of inputs
  const handleAddRow = () => {
    setFarmers([...farmers, { id: '', names: '', surname: '', acreage: '', location: '' }]);
  };

  // Function to remove a row of inputs
  const handleRemoveRow = (index) => {
    const newFarmers = [...farmers];
    newFarmers.splice(index, 1);
    setFarmers(newFarmers);
  };

  return (
    <div className="farmers-form">
      {farmers.map((farmer, index) => (
        <div className="farmer-row" key={index}>
          <div>👤</div>
          <input
            type="text"
            name="id"
            value={farmer.id}
            onChange={(e) => handleInputChange(index, e)}
            className="farmer-column"
            placeholder="ID"
          />
          <input
            type="text"
            name="names"
            value={farmer.names}
            onChange={(e) => handleInputChange(index, e)}
            className="farmer-column"
            placeholder="Names"
          />
          <input
            type="text"
            name="surname"
            value={farmer.surname}
            onChange={(e) => handleInputChange(index, e)}
            className="farmer-column"
            placeholder="Surname"
          />
          <input
            type="text"
            name="acreage"
            value={farmer.acreage}
            onChange={(e) => handleInputChange(index, e)}
            className="farmer-column"
            placeholder="Acreage"
          />
          <input
            type="text"
            name="location"
            value={farmer.location}
            onChange={(e) => handleInputChange(index, e)}
            className="farmer-column"
            placeholder="Location"
          />
          <button type="button" onClick={() => handleRemoveRow(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddRow}>Add Farmer</button>
    </div>
  );
};

export default FarmersForm;

