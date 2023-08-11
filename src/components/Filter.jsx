import React from 'react';



export const Filter = ({ filter, handleFilter }) => (
  <div>
    <label>
      Find contacts by name:
      <input type="text" value={filter} onChange={handleFilter} />
    </label>
  </div>
);
