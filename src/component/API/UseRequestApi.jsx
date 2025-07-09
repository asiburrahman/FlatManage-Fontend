import React from 'react';
import UseAxiosToken from '../hooks/UseAxiosToken';

const useRequestApi = () => {
  const axiosSecure = UseAxiosToken();

  const myRequestedFood = async (email) => {
    const response = await axiosSecure.get(`/requestFood/${email}`);
    return response.data;
  };

  const myPostedFood = async (email) => {
    const response = await axiosSecure.get(`/myPostedFood/${email}`);
    return response.data;
  };

  const updateFood = async (id) => {
    const response = await axiosSecure.get(`/taskDetail/${id}`);
    return response.data;
  };

  return { myRequestedFood, myPostedFood, updateFood };
};

export default useRequestApi;