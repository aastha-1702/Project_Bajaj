// src/pages/DoctorListingPage.js
import React, { useEffect, useState } from "react";
import { fetchDoctors } from "../services/api";

const DoctorListingPage = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctors();
      setAllDoctors(data);
    };
    loadDoctors();
  }, []);

  return (
    <div>
      <h2>Doctor Listing Page</h2>
      <p>Total doctors: {allDoctors.length}</p>
    </div>
  );
};

export default DoctorListingPage;
