import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Loading/Loading';
import ApartmentCard from './ApartmentCard';

const HomeApartment = () => {
    
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

      if (isLoading) return <Loading></Loading>
      const apart = apartments.slice(0,6)
      console.log(apart);
      
    return (
        <>
            {apart.map((apt,)=><ApartmentCard key={apt._id}
            apt={apt}></ApartmentCard>)}
        </>
    );
};

export default HomeApartment;