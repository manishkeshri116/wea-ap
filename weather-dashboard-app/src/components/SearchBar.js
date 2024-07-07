// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import useDebounce from '../hooks/useDebounce';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce delay

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search City"
          margin="normal"
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
    />
  );
};

export default SearchBar;
