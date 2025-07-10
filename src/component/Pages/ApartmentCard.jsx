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
          {
          apt.booking?.status === 'checked' ? (
            <p className="text-red-500 font-semibold mt-2">Already Booked</p>
          ) : apt.booking?.status === 'pending' ? (
            <p className="text-yellow-500 font-semibold mt-2">Pending Approval</p>
          ) : (
            <button
              className="btn btn-primary mt-4"
              onClick={() => handleAgreement(apt)}
            >
              Make Agreement
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
