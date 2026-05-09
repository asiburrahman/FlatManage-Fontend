// ApartmentCard.jsx
import React from 'react';
import Button from '../UI/Button/Button';

const ApartmentCard = ({ apt, handleAgreement }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200">
      <figure className="relative">
        <img
          src={apt.image}
          alt={apt.apartmentNo}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-2 right-2">
          <div className="badge badge-primary font-bold">{apt.rent} TK</div>
        </div>
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-xl font-bold">Apartment {apt.apartmentNo}</h2>
        <div className="grid grid-cols-2 gap-2 my-2 text-sm opacity-80 font-medium">
          <p>Floor: {apt.floor}</p>
          <p>Block: {apt.block}</p>
        </div>

        <div className="card-actions justify-center mt-4">
          {
            apt.booking?.status === 'checked' ? (
              <p className="text-red-500 font-semibold">Already Booked</p>
            ) : apt.booking?.status === 'pending' ? (
              <p className="text-yellow-500 font-semibold">Pending Approval</p>
            ) : (
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => handleAgreement(apt)}
              >
                Make Agreement
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
