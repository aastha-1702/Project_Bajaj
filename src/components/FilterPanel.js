import React from "react";


const specialtiesList = [
  "Dentist", "Cardiologist", "Neurologist", "General Physician", "Orthopaedic",
  "Gynaecologist", "Homeopath", "Ayurveda"
];

function FilterPanel({ filters, setFilters }) {
  const handleConsultationChange = (e) => {
    setFilters({ ...filters, consultationType: e.target.value });
  };

  const handleSpecialtyChange = (e) => {
    const { value, checked } = e.target;
    let newSpecialties = [...filters.specialties];
    if (checked) {
      newSpecialties.push(value);
    } else {
      newSpecialties = newSpecialties.filter((spec) => spec !== value);
    }
    setFilters({ ...filters, specialties: newSpecialties });
  };

  const handleSortChange = (e) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  return (
    <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Mode of Consultation</h3>
      <div className="space-y-2 mb-4">
        {["Video", "Clinic"].map((type) => (
          <label key={type} className="block">
            <input
              type="radio"
              name="consultation"
              value={type}
              checked={filters.consultationType === type}
              onChange={handleConsultationChange}
              className="mr-2"
            />
            {type} Consultation
          </label>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-2">Specialties</h3>
      <div className="space-y-1 max-h-48 overflow-y-auto mb-4">
        {specialtiesList.map((spec) => (
          <label key={spec} className="block">
            <input
              type="checkbox"
              value={spec}
              checked={filters.specialties.includes(spec)}
              onChange={handleSpecialtyChange}
              className="mr-2"
            />
            {spec}
          </label>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-2">Sort By</h3>
      <select
        value={filters.sortBy}
        onChange={handleSortChange}
        className="w-full border px-3 py-2 rounded"
      >
        <option value="">-- Select --</option>
        <option value="feesAsc">Fees: Low to High</option>
        <option value="experienceDesc">Experience: High to Low</option>
      </select>
    </div>
  );
}

export default FilterPanel;
