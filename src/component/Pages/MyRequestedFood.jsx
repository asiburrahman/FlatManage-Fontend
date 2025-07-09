import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthContext';
import UseAxiosToken from '../hooks/UseAxiosToken';
import Loading from '../Loading/Loading';


const MyRequestedFood = () => {
  const { user } = useContext(AuthContext);
const axiosInstance = UseAxiosToken()
  const { data: tasks = [], isLoading, isError } = useQuery({
    queryKey: ['myRequestedFood', user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/requestFood/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // only run if email exists
  });

  if (isLoading) return <Loading></Loading>;
  if (isError) return <p className="text-center my-10 text-red-500">Failed to load data.</p>;

  return (
    <div className="overflow-x-auto w-11/12 mx-auto mt-6">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Pickup Location</th>
            <th>Expire Date</th>
            <th>Requested Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={task.foodImage} alt="Food" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{task.foodName}</div>
                    <div className="text-xs opacity-50">
                      Donor: <span className="font-bold">{task.displayName}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td>{task.foodLocation}</td>
              <td>{task.date}</td>
              <td>{task.foodRequestDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyRequestedFood;
