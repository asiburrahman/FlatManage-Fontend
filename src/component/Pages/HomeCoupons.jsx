import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaTag } from 'react-icons/fa';
import UseAxiosToken from '../hooks/UseAxiosToken';
import Loading from '../Loading/Loading';

const HomeCoupons = () => {
  const axiosSecure = UseAxiosToken();

  const { data: coupons = [], isLoading } = useQuery({
    queryKey: ['activeCoupons'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/coupons');
      const currentDate = new Date();
      return res.data.filter(c => new Date(c.expiresAt) >= currentDate);
    }
  });

  if (isLoading) return <Loading />;

  if (coupons.length === 0) return null;

  return (
    <div className="my-10 bg-primary/10 p-6 rounded-2xl shadow-lg border border-primary">
      <h2 className="text-2xl font-bold text-center mb-6">🎁 Limited-Time Coupon Offers</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {coupons.map((coupon, i) => (
          <div
            key={coupon._id}
            className={`flex items-center gap-3  bg-warning
             px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform`}
          >
            <FaTag />
            <span className="font-bold uppercase tracking-wide">{coupon.code}</span>
            <span className="text-sm">({coupon.discount}% OFF)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCoupons;
