import { useQuery } from '@tanstack/react-query';
import useAuth from '../../hooks/UseAuth';
import UseAxiosToken from '../../hooks/UseAxiosToken';


const AdminProfile = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosToken();

  const { data: summary = {}, isLoading } = useQuery({
    queryKey: ['admin-summary'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/summary');
      return res.data;
    }
  });

  if (isLoading) return <p className="text-center">Loading summary...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4 bg-base-100 shadow rounded">
      <div className="text-center space-y-2">
        <img className="w-20 h-20 rounded-full mx-auto" src={user?.photoURL} alt="admin" />
        <h2 className="text-xl font-semibold">{user?.displayName}</h2>
        <p>{user?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-neutral text-white p-4 rounded">
          <h3 className="text-lg font-semibold">Total Apartments</h3>
          <p>{summary.totalRooms}</p>
        </div>
        <div className="bg-green-200 p-4 rounded">
          <h3 className="text-lg font-semibold">Available Apartments</h3>
          <p>{summary.available} ({summary.availabilityPercent}%)</p>
        </div>
        <div className="bg-red-200 p-4 rounded">
          <h3 className="text-lg font-semibold">Unavailable Apartments</h3>
          <p>{summary.unavailable} ({summary.agreementPercent}%)</p>
        </div>
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p>{summary.users}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Total Members</h3>
          <p>{summary.members}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
