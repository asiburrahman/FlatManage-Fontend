import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Badge from '../UI/Badge/Badge';
import Swal from 'sweetalert2';
import useAuth from '../hooks/UseAuth';
import { FaBed, FaBath, FaRulerCombined, FaCheckCircle, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const ApartmentDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: apartment, isLoading, isError } = useQuery({
    queryKey: ['apartment', id],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_base_url}/apartments/${id}`);
      return res.data;
    }
  });

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
      queryClient.invalidateQueries(['apartment', id]);
    },
    onError: (error) => {
      const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
      Swal.fire({
        title: 'Error',
        text: error?.response?.data?.message || 'Something went wrong.',
        icon: 'error',
        background: isDark ? '#111827' : '#fff',
        color: isDark ? '#f9fafb' : '#374151'
      });
    }
  });

  const handleAgreement = () => {
    if (!user) return navigate('/login');
    
    const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
    Swal.fire({
      title: 'Confirm Agreement',
      text: `Are you sure you want to request Apartment ${apartment.apartmentNo}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, request it!',
      background: isDark ? '#111827' : '#fff',
      color: isDark ? '#f9fafb' : '#374151'
    }).then((result) => {
      if (result.isConfirmed) {
        agreementMutation.mutate(apartment);
      }
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <div className="text-center py-20 text-red-500 font-bold">Failed to load apartment details.</div>;

  const isAvailable = apartment.booking?.status !== 'checked' && apartment.booking?.status !== 'pending';

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
            <img 
              src={apartment.image} 
              alt={apartment.apartmentNo} 
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
            <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant={isAvailable ? 'success' : 'warning'}>
              {isAvailable ? 'Available' : (apartment.booking?.status === 'pending' ? 'Pending Approval' : 'Already Booked')}
            </Badge>
            <Badge variant="primary">Block {apartment.block}</Badge>
            <Badge variant="info">Floor {apartment.floor}</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content leading-tight">
            Premium Apartment <span className="text-primary">{apartment.apartmentNo}</span>
          </h1>

          <div className="flex items-center gap-2 text-xl font-bold text-primary">
            <span className="text-3xl">{apartment.rent}</span>
            <span className="text-lg opacity-80">TK / month</span>
          </div>

          <p className="text-lg text-base-content opacity-80 leading-relaxed italic">
            {apartment.description || "Experience luxury and comfort in this meticulously designed apartment. Located in a prime area, it offers the perfect blend of modern amenities and sophisticated living spaces."}
          </p>

          <Card className="bg-base-200 border-none">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-2">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary text-xl"><FaRulerCombined /></div>
                <div>
                  <p className="text-xs opacity-60 font-bold uppercase">Size</p>
                  <p className="font-bold">{apartment.size || '1200 sqft'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary text-xl"><FaBed /></div>
                <div>
                  <p className="text-xs opacity-60 font-bold uppercase">Bedrooms</p>
                  <p className="font-bold">{apartment.bedrooms || 3}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary text-xl"><FaBath /></div>
                <div>
                  <p className="text-xs opacity-60 font-bold uppercase">Bathrooms</p>
                  <p className="font-bold">{apartment.bathrooms || 2}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary text-xl"><FaMapMarkerAlt /></div>
                <div>
                  <p className="text-xs opacity-60 font-bold uppercase">Location</p>
                  <p className="font-bold">Block {apartment.block}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary text-xl"><FaBuilding /></div>
                <div>
                  <p className="text-xs opacity-60 font-bold uppercase">Floor</p>
                  <p className="font-bold">{apartment.floor}th Floor</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-3 text-sm text-success font-semibold">
              <FaCheckCircle /> <span>Free Maintenance for 1st year</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-success font-semibold">
              <FaCheckCircle /> <span>High Speed Internet Ready</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-success font-semibold">
              <FaCheckCircle /> <span>24/7 Security & CCTV</span>
            </div>
          </div>

          <div className="pt-8">
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full md:w-auto px-12 py-4 text-lg shadow-xl"
              onClick={handleAgreement}
              disabled={!isAvailable || agreementMutation.isLoading}
            >
              {isAvailable ? 'Request Agreement Now' : 'Currently Unavailable'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
