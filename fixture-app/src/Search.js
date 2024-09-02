import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    try {
      const response = await axios.get(`/api/search?query=${e.target.value}`);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search..." />
      <ul>
        {results.map(result => (
          <li key={result._id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;