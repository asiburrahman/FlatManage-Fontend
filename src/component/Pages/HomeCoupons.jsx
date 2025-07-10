import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaTag } from 'react-icons/fa';
import UseAxiosToken from '../hooks/UseAxiosToken';
import Loading from '../Loading/Loading';

const HomeCoupons = () => {
  const axiosSecure = UseAxiosToken()
  const { data: coupons = [], isLoading } = useQuery({
    queryKey: ['activeCoupons'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/coupons');
      const currentDate = new Date();
      return res.data.filter(c => new Date(c.expiresAt) >= currentDate);
    }
  });

  if(isLoading) return <Loading></Loading>

  if (coupons.length === 0) return null;

  return (
    <div className="my-8 bg-emerald-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center mb-4 text-emerald-700">🔥 Hot Coupons</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {coupons.map(coupon => (
          <div
            key={coupon._id}
            className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-emerald-300 shadow-sm hover:shadow-md transition"
          >
            <FaTag className="text-emerald-500" />
            <span className="font-semibold text-emerald-600">{coupon.code}</span>
            <span className="text-sm text-gray-600">({coupon.discount}% off)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCoupons;