import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import useAuth from '../../hooks/UseAuth';
import UseAxiosToken from '../../hooks/UseAxiosToken';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosToken();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['paymentHistory', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/user/${user.email}`);
      return res.data;
    },
  });

  if (isLoading)
    return <p className="text-center mt-10 text-lg font-medium">Loading payment history...</p>;

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Payment History</h2>

      {payments.length === 0 ? (
        <p className="text-center text-gray-600">No payments found.</p>
      ) : (
        <div className="overflow-x-auto bg-base-200 rounded-lg shadow-lg p-4">
          <table className="min-w-full table-auto  text-sm  md:text-base">
            <thead className="bg-neutral text-white">
              <tr>
                <th className="px-3 py-2 text-left">#</th>
                <th className="px-3 py-2 text-left">Month</th>
                <th className="px-3 py-2 text-left">Apartment</th>
                <th className="px-3 py-2 text-left">Rent</th>
                <th className="px-3 py-2 text-left">Discount</th>
                <th className="px-3 py-2 text-left min-w-[180px]">Transaction ID</th>
                <th className="px-3 py-2 text-left">Paid At</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((pay, index) => (
                <tr key={pay._id} className="border-b hover:bg-base-300 transition">
                  <td className="px-3 py-2">{index + 1}</td>
                  <td className="px-3 py-2">{pay.month}</td>
                  <td className="px-3 py-2">{`${pay.floor}${pay.block} (${pay.apartmentNo})`}</td>
                  <td className="px-3 py-2">{pay.rent} TK</td>
                  <td className="px-3 py-2">{pay.discount || 0}%</td>
                  <td className="px-3 py-2 break-all text-xs md:text-sm">{pay.transactionId}</td>
                  <td className="px-3 py-2">{format(new Date(pay.paidAt), 'dd/MM/yyyy')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
