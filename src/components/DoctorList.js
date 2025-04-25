import React from 'react';

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          {/* Display doctor's photo */}
          <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />

          {/* Display doctor's name */}
          <h2>{doctor.name}</h2>

          {/* Display specialties */}
          <p>
            {doctor.specialities && doctor.specialities.length > 0
              ? doctor.specialities.map((specialty, index) => (
                  <span key={index}>
                    {specialty.name}
                    {index < doctor.specialities.length - 1 && ', '}
                  </span>
                ))
              : 'No specialties listed'}
          </p>

          {/* Display consultation fee */}
          <p>Consultation Fee: {doctor.fees || 'Not available'}</p>

          {/* Display experience */}
          <p>Experience: {doctor.experience || 'Not available'}</p>

          {/* Display doctor introduction */}
          <p>{doctor.doctor_introduction}</p>

          {/* Display languages spoken by doctor */}
          <p>
            Languages: {doctor.languages ? doctor.languages.join(', ') : 'Not specified'}
          </p>

          {/* Display clinic information */}
          {doctor.clinic && doctor.clinic.name && (
            <div className="clinic-info">
              <h4>Clinic: {doctor.clinic.name}</h4>
              <p>Location: {doctor.clinic.address.locality || 'Location not available'}, {doctor.clinic.address.city || 'City not available'}</p>
              <p>Address: {doctor.clinic.address.address_line1}</p>
              <p>
                Clinic Coordinates: {doctor.clinic.address.location}
                <br />
                <img
                  src={doctor.clinic.logo_url || 'path/to/default/logo.png'}
                  alt="Clinic Logo"
                  className="clinic-logo"
                />
              </p>
            </div>
          )}

          {/* Display consultation types */}
          <p>
            Consultation Options: {doctor.video_consult ? 'Video Consult' : 'No Video Consult'} /{' '}
            {doctor.in_clinic ? 'In Clinic' : 'No In Clinic'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
