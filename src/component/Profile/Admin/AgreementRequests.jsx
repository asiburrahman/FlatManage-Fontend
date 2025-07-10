import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import UseAxiosToken from '../../hooks/UseAxiosToken';


const AgreementRequests = () => {
  const axiosSecure = UseAxiosToken();
  const queryClient = useQueryClient();

  // 1. Fetch pending agreements
  const { data: agreements = [], isLoading } = useQuery({
    queryKey: ['pendingAgreements'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/agreements');
      return res.data;
    }
  });



  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Agreement Requests</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : agreements.length === 0 ? (
        <p>No pending agreements.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Floor</th>
                <th>Block</th>
                <th>Room</th>
                <th>Rent</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {agreements.map((a, i) => (
                <tr key={a._id}>
                  <td>{i + 1}</td>
                  <td>{a.userName}</td>
                  <td>{a.userEmail}</td>
                  <td>{a.floor}</td>
                  <td>{a.block}</td>
                  <td>{a.apartmentNo}</td>
                  <td>{a.rent} TK</td>
                  <td>{new Date(a.date).toLocaleDateString()}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleAccept(a._id)}
                      className="btn btn-xs btn-success"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(a._id)}
                      className="btn btn-xs btn-error"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AgreementRequests;
