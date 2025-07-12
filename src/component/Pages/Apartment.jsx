import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import ApartmentCard from './ApartmentCard';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';
import useAuth from '../hooks/UseAuth';

const Apartment = () => {
  const { user } = useAuth()
  const navigate = useNavigate();
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const queryClient = useQueryClient();

  //  Fetch apartments
  const {
    data: apartments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_base_url}/apartments`);
      return res.data;
    },
  });

  //  Submit agreement mutation
  const agreementMutation = useMutation({
    mutationFn: async (apt) => {
      const agreementData = {
        userName: user.displayName,
        userEmail: user.email,
        floor: apt.floor,
        block: apt.block,
        apartmentNo: apt.apartmentNo,
        rent: apt.rent,
        status: 'pending',
        bookingDate: new Date().toISOString(),
      };

      const res = await axios.post(`${import.meta.env.VITE_base_url}/apartments`, agreementData);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire('Success!', 'Your agreement request has been submitted.', 'success');
      queryClient.invalidateQueries(['apartments']);
    },
    onError: (error) => {
      if (error?.response?.status === 400) {
        Swal.fire('Already Booked!', error.response.data.message, 'info');
      } else {
        Swal.fire('Error!', 'Something went wrong while submitting the agreement.', 'error');
      }
    },
  });

  //  Handle agreement with SweetAlert confirmation
  const handleAgreement = (apt) => {
    if (!user) return navigate('/login');

    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to request Apartment ${apt.apartmentNo} in Block ${apt.block}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, request it!',
    }).then((result) => {
      if (result.isConfirmed) {
        agreementMutation.mutate(apt);
      }
    });
  };

  //  Rent filtering
  const filtered = apartments.filter((apt) => {
    const rent = apt.rent;
    const min = minRent ? parseInt(minRent) : 0;
    const max = maxRent ? parseInt(maxRent) : Infinity;
    return rent >= min && rent <= max;
  });

  // Pagination
  const startIndex = (page - 1) * itemsPerPage;
  const selected = filtered.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  if (isLoading) return <Loading />;
  if (isError) return <p className="text-center text-red-500">Failed to load apartments.</p>;

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Apartment Listings</h2>

      {/* Rent Range Filter */}
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

      {/* Apartment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selected.map((apt) => (<ApartmentCard
            key={apt._id}
            apt={apt}
            handleAgreement={handleAgreement}
            isMutating={agreementMutation.isLoading}
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
