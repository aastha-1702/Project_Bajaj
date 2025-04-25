// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';

const SearchBar = ({ doctors, onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Filter doctors based on search query
  useEffect(() => {
    if (query === '') {
      setSuggestions([]); // Clear suggestions when query is empty
    } else {
      const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase()) // Case insensitive match
      );
      setSuggestions(filteredDoctors.slice(0, 3)); // Limit to top 3 results
    }
  }, [query, doctors]);

  const handleChange = (event) => {
    setQuery(event.target.value); // Update query on input change
  };

  const handleSelect = (doctor) => {
    setQuery(doctor.name); // Update search query with selected doctor name
    onSearch(doctor.name); // Notify parent component with the selected doctor's name
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && suggestions.length > 0) {
      handleSelect(suggestions[0]); // If Enter is pressed, select the first suggestion
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Handle Enter key press
        placeholder="Search for doctors"
        data-testid="autocomplete-input"
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((doctor) => (
            <li
              key={doctor.id}
              onClick={() => handleSelect(doctor)} // Select on click
              data-testid="suggestion-item"
            >
              {doctor.name}
            </li>
          ))}
        </ul>
      )}
      {query && suggestions.length === 0 && (
        <p>No matches found</p> // Display when no suggestions match the query
      )}
    </div>
  );
};

export default SearchBar;
