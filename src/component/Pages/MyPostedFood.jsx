import React, { useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import UseAxiosToken from '../hooks/UseAxiosToken';
import Loading from '../Loading/Loading';

const MyPostedFood = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = UseAxiosToken()


    const { data: tasks = [], isLoading, isError } = useQuery({
        queryKey: ['myPostedFood', user?.email],
        
        queryFn: async () => {
            const res = await axiosInstance.get(`/myPostedFood/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email,
    })
    if (isLoading) return <Loading></Loading>
  if (isError) return <p className="text-center my-10 text-red-500">Failed to load data.</p>;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`http://localhost:3000/myTask/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Food has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the state
                            const remainingTasks = tasks.filter(task => task._id !== id);
                            setTask(remainingTasks);
                        }
                    })


            }
        });


    }






    return (
        <div>
            <div className="overflow-x-auto w-11/12 mx-auto text-center ">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Status</th>
                            <th>Quantity</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <tr key={index}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={task.foodImage}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{task.foodName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td >
                                    {task.foodStatus}

                                </td>

                                <td>
                                    {task.foodQuantity}
                                </td>
                                <td>
                                    {task.date}
                                </td>
                                <th className='space-x-2'>
                                    <Link to={`/updateTask/${task._id}`} className="btn  bg-amber-700 hover:bg-amber-50 btn-ghost btn-xs">Update</Link>
                                    <button onClick={() => handleDelete(task._id)} className="btn  bg-amber-700 hover:bg-amber-50 btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyPostedFood;