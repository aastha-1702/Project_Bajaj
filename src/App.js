import React, { useState, useEffect } from 'react';
import FilterPanel from './components/FilterPanel';
import DoctorList from './components/DoctorList';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    consultationType: '',
    specialties: [],
    sortBy: '', // match what FilterPanel uses
  });

  useEffect(() => {
    fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  // Apply search + filters + sorting
  const filteredDoctors = doctors
    .filter((doctor) => {
      const { consultationType, specialties } = filters;

      if (
        searchQuery &&
        !doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) return false;

      if (
        consultationType &&
        !doctor[consultationType.toLowerCase()]
      ) return false;

      if (
        specialties.length > 0 &&
        !specialties.some((spec) =>
          doctor.specialities?.map((s) => s.name).includes(spec)
        )
      ) return false;

      return true;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'feesAsc') return a.fees - b.fees;
      if (filters.sortBy === 'experienceDesc') return b.experience - a.experience;
      return 0;
    });

  return (
    <div>
      <SearchBar onSearch={(query) => setSearchQuery(query)} />

      <FilterPanel
        doctors={doctors}
        filters={filters}
        setFilters={setFilters}
      />

      <DoctorList doctors={filteredDoctors} />
    </div>
  );
};

export default App;
