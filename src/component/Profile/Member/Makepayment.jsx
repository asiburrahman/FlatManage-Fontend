// MakePayment.jsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/UseAuth';
import UseAxiosToken from '../../hooks/UseAxiosToken';

const MakePayment = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosToken();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('');

  // Fetch member's agreement
  const { data: agreement = {}, isLoading } = useQuery({
    queryKey: ['agreement', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/agreements/user/${user.email}`);
      return res.data;
    },
  });

  const handleCouponApply = async () => {
    if (!couponCode) return;
    try {
      const res = await axiosSecure(`/coupons/${couponCode}`);
      const { discountPercentage, isValid } = res.data;
      if (isValid) {
        setDiscount(discountPercentage);
        alert(`Coupon applied! ${discountPercentage}% discount`);
      } else {
        alert('Coupon expired or invalid');
        setDiscount(0);
      }
    } catch (err) {
      alert(`Invalid coupon ${err}`);
      setDiscount(0);
    }
  };
  const discountedRent = agreement.rent - (agreement.rent * discount) / 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentInfo = {
      email: user.email,
      floor: agreement.floor,
      block: agreement.block,
      apartmentNo: agreement.apartmentNo,
      rent: discountedRent,
      discount,
      month: selectedMonth,
    };
    // Redirect to payment page with state
    navigate('/dashboard/member/stripePayment', { state: paymentInfo });
  };

  

  if (isLoading) return <p className="text-center">Loading agreement...</p>;

  return (
    <div className="max-w-lg mx-auto bg-base-200 p-6 rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Make Rent Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input readOnly className="input w-full" value={user.email} />
        <input readOnly className="input w-full" value={agreement.floor} />
        <input readOnly className="input w-full" value={agreement.block} />
        <input readOnly className="input w-full" value={agreement.apartmentNo} />
        <input readOnly  className="input w-full" value={`${discountedRent} TK`} />

        <select
          required
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="select w-full"
        >
          <option value="">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        {/* Coupon Section */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="input w-full"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            type="button"
            onClick={handleCouponApply}
            className="btn btn-info"
          >
            Apply
          </button>
        </div>

        <button type="submit" className="btn btn-success w-full">
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default MakePayment;
