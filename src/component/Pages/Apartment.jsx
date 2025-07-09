// Apartment.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ApartmentCard from './ApartmentCard';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';

const Apartment = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const { data: apartments = [], isLoading, isError } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_base_url}/apartments`);
      return res.data;
    }
  });

  const filtered = apartments.filter((apt) => {
    const rent = apt.rent;
    const min = minRent ? parseInt(minRent) : 0;
    const max = maxRent ? parseInt(maxRent) : Infinity;
    return rent >= min && rent <= max;
  });

const handleAgreement = (apt) => {
  if (!user) return navigate('/login');

  const agreementData = {
    userName: user.displayName,
    userEmail: user.email,
    floor: apt.floor,
    block: apt.block,
    apartmentNo: apt.apartmentNo,
    rent: apt.rent,
    status: 'pending',
    bookingDate: new Date().toISOString()
  };

  axios.post(`${import.meta.env.VITE_base_url}/apartments`, agreementData)
    .then(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Your agreement request has been submitted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    })
    .catch((err) => {
      if (err.response?.status === 400) {
        Swal.fire({
          title: 'Already Booked!',
          text: err.response.data.message,
          icon: 'info',
          confirmButtonText: 'Got it'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while submitting the agreement.',
          icon: 'error',
          confirmButtonText: 'Retry'
        });
      }
    });
};

  const startIndex = (page - 1) * itemsPerPage;
  const selected = filtered.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  if (isLoading) return <Loading></Loading>
  if (isError) return <p className="text-center text-red-500">Failed to load apartments.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Apartment Listings</h2>

      {/* Search by rent range */}
      <div className="flex gap-4 justify-center mb-6">
        <input
          type="number"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
          placeholder="Min Rent"
          className="input input-bordered"
        />
        <input
          type="number"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
          placeholder="Max Rent"
          className="input input-bordered"
        />
        <button className="btn btn-primary" onClick={() => setPage(1)}>
          Search
        </button>
      </div>

      {/* Apartment grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selected.map((apt) => (
          <ApartmentCard
            key={apt._id}
            apt={apt}
            handleAgreement={handleAgreement}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="join">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`join-item btn ${page === i + 1 ? 'btn-active' : ''}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
