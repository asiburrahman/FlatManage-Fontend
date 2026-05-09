import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import ApartmentCard from './ApartmentCard';
import Swal from 'sweetalert2';
import Loading from '../Loading/Loading';
import useAuth from '../hooks/UseAuth';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const Apartment = () => {
  const { user } = useAuth()
  const navigate = useNavigate();
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

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
      const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
      Swal.fire({
        title: 'Success!',
        text: 'Your agreement request has been submitted.',
        icon: 'success',
        background: isDark ? '#111827' : '#fff',
        color: isDark ? '#f9fafb' : '#374151'
      });
      queryClient.invalidateQueries(['apartments']);
    },
    onError: (error) => {
      const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
      if (error?.response?.status === 400) {
        Swal.fire({
          title: 'Already Booked!',
          text: error.response.data.message,
          icon: 'info',
          background: isDark ? '#111827' : '#fff',
          color: isDark ? '#f9fafb' : '#374151'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while submitting the agreement.',
          icon: 'error',
          background: isDark ? '#111827' : '#fff',
          color: isDark ? '#f9fafb' : '#374151'
        });
      }
    },
  });

  //  Handle agreement with SweetAlert confirmation
  const handleAgreement = (apt) => {
    if (!user) return navigate('/login');

    const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
    Swal.fire({
      title: 'Confirm Agreement',
      text: `Do you want to request Apartment ${apt.apartmentNo} in Block ${apt.block}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, request it!',
      background: isDark ? '#111827' : '#fff',
      color: isDark ? '#f9fafb' : '#374151'
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
  if (isError) return <p className="text-center text-red-500 py-10 font-bold">Failed to load apartments.</p>;

  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-base-content">Available Apartment Listings</h2>

      {/* Rent Range Filter */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-end mb-12 bg-base-200 p-6 rounded-2xl shadow-sm border border-base-300">
        <Input
          label="Minimum Rent (TK)"
          type="number"
          value={minRent}
          onChange={(e) => setMinRent(e.target.value)}
          placeholder="e.g. 10000"
          className="max-w-xs"
        />
        <Input
          label="Maximum Rent (TK)"
          type="number"
          value={maxRent}
          onChange={(e) => setMaxRent(e.target.value)}
          placeholder="e.g. 50000"
          className="max-w-xs"
        />
        <Button variant="primary" onClick={() => setPage(1)} className="px-8">
          Search
        </Button>
      </div>

      {/* Apartment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selected.map((apt) => (
          <ApartmentCard
            key={apt._id}
            apt={apt}
            handleAgreement={handleAgreement}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`w-10 h-10 rounded-full font-bold transition-all ${
                page === i + 1 
                ? 'bg-primary text-white shadow-lg scale-110' 
                : 'bg-base-300 text-base-content hover:bg-base-content hover:text-base-300'
              }`}
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
