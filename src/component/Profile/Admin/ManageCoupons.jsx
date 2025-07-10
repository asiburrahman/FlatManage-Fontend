// ManageCoupons.jsx
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import UseAxiosToken from '../../hooks/UseAxiosToken';
import Loading from '../../Loading/Loading';

const ManageCoupons = () => {
    const axiosSecure = UseAxiosToken()
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const [editCoupon, setEditCoupon] = useState(null);

  // Fetch coupons
  const { data: coupons = [], isLoading } = useQuery({
    queryKey: ['coupons'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/coupons');
      return res.data;
    }
  });

  // Mutation: Add new coupon
  const addCouponMutation = useMutation({
    mutationFn: async (newCoupon) => await axiosSecure.post('/admin/coupons', newCoupon),
    onSuccess: () => {
      queryClient.invalidateQueries(['coupons']);
      Swal.fire('Success', 'Coupon added successfully', 'success');
      setShowModal(false);
    }
  });

  // Mutation: Update coupon
  const updateCouponMutation = useMutation({
    mutationFn: async ({ id, coupon }) => await axiosSecure.patch(`/admin/coupons/${id}`, coupon),
    onSuccess: () => {
      queryClient.invalidateQueries(['coupons']);
      Swal.fire('Updated!', 'Coupon has been updated.', 'success');
      setShowModal(false);
      setEditCoupon(null);
    }
  });

  // Mutation: Delete coupon
  const deleteCouponMutation = useMutation({
    mutationFn: async (id) => await axiosSecure.delete(`/admin/coupons/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['coupons']);
      Swal.fire('Deleted!', 'Coupon has been deleted.', 'success');
    }
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this coupon?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCouponMutation.mutate(id);
      }
    });
  };

  const handleEdit = (coupon) => {
    setEditCoupon(coupon);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const discount = parseInt(form.discount.value);
    const description = form.description.value;
    const expiresAt = form.expiresAt.value;

    if (editCoupon) {
      updateCouponMutation.mutate({ id: editCoupon._id, coupon: { code, discount, description, expiresAt } });
    } else {
      addCouponMutation.mutate({ code, discount, description, expiresAt });
    }
  };

  if(isLoading) return <Loading></Loading>

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Manage Coupons</h2>
        <button className="btn btn-primary" onClick={() => { setEditCoupon(null); setShowModal(true); }}>Add Coupon</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Discount %</th>
              <th>Description</th>
              <th>Expires At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map(coupon => (
              <tr key={coupon._id}>
                <td>{coupon.code}</td>
                <td>{coupon.discount}%</td>
                <td>{coupon.description}</td>
                <td>{new Date(coupon.expiresAt).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleEdit(coupon)} className="btn btn-sm btn-warning mr-2">Edit</button>
                  <button onClick={() => handleDelete(coupon._id)} className="btn btn-sm btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">{editCoupon ? 'Edit Coupon' : 'Add Coupon'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="code" defaultValue={editCoupon?.code} required placeholder="Coupon Code" className="input input-bordered w-full" />
              <input type="number" name="discount" defaultValue={editCoupon?.discount} required placeholder="Discount %" className="input input-bordered w-full" />
              <textarea name="description" defaultValue={editCoupon?.description} placeholder="Description" className="textarea textarea-bordered w-full"></textarea>
              <input type="date" name="expiresAt" defaultValue={editCoupon?.expiresAt?.split('T')[0]} required className="input input-bordered w-full" />
              <div className="flex justify-end gap-4">
                <button type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">{editCoupon ? 'Update' : 'Add'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCoupons;
