// ApartmentCard.jsx
import React from 'react';

const ApartmentCard = ({ apt, handleAgreement }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={apt.image}
          alt={apt.apartmentNo}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Apartment {apt.apartmentNo}</h2>
        <p>Floor: {apt.floor}</p>
        <p>Block: {apt.block}</p>
        <p>Rent: {apt.rent} TK</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-success"
            onClick={() => handleAgreement(apt)}
          >
            Make Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
