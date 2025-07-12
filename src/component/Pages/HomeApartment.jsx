import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import ApartmentCard from './ApartmentCard';
import { useNavigate } from 'react-router';
import useAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2';


const HomeApartment = () => {
  const { user } = useAuth()
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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
  const apart = apartments.slice(0, 6)

  //Book a apartment
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




  if (isLoading) return <Loading></Loading>
  return (
    <>
      {apart.map((apt,) => 
      <ApartmentCard
        key={apt._id}
        apt={apt}
        handleAgreement={handleAgreement}
        isMutating={agreementMutation.isLoading}
      > </ApartmentCard>)}
    </>
  );
};

export default HomeApartment;