// src/services/api.js
export const fetchDoctors = async () => {
    try {
      const response = await fetch('https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json'); // Replace with your actual API URL
      const data = await response.json();
      return data; // Ensure this returns the doctor data correctly
    } catch (error) {
      console.error('Error fetching doctors:', error);
      return [];
    }
  };
  