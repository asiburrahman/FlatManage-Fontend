// ManageCoupons.jsx
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import UseAxiosToken from '../../hooks/UseAxiosToken';
import Loading from '../../Loading/Loading';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Table from '../../UI/Table/Table';
import Modal from '../../UI/Modal/Modal';
import Badge from '../../UI/Badge/Badge';

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
    const isDark = document.querySelector('html').getAttribute('data-theme') === 'dark';
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this coupon?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      background: isDark ? '#111827' : '#fff',
      color: isDark ? '#f9fafb' : '#374151'
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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-base-content">Manage Coupons</h2>
        <Button 
          variant="primary" 
          onClick={() => { setEditCoupon(null); setShowModal(true); }}
        >
          Add New Coupon
        </Button>
      </div>

      <Table striped>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Code</Table.HeaderCell>
            <Table.HeaderCell>Discount %</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Expires At</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {coupons.map(coupon => (
            <Table.Row key={coupon._id}>
              <Table.Cell>
                <Badge variant="info">{coupon.code}</Badge>
              </Table.Cell>
              <Table.Cell>
                <span className="font-bold text-primary">{coupon.discount}%</span>
              </Table.Cell>
              <Table.Cell>{coupon.description}</Table.Cell>
              <Table.Cell>{new Date(coupon.expiresAt).toLocaleDateString()}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    onClick={() => handleEdit(coupon)}
                  >
                    Edit
                  </Button>
                  <Button 
                    size="sm" 
                    variant="danger" 
                    onClick={() => handleDelete(coupon._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editCoupon ? 'Edit Coupon' : 'Add New Coupon'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            label="Coupon Code" 
            name="code" 
            defaultValue={editCoupon?.code} 
            required 
            placeholder="e.g. SAVE20" 
          />
          <Input 
            label="Discount Percentage" 
            type="number" 
            name="discount" 
            defaultValue={editCoupon?.discount} 
            required 
            placeholder="e.g. 20" 
          />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-base-content opacity-80">Description</label>
            <textarea 
              name="description" 
              defaultValue={editCoupon?.description} 
              placeholder="Enter coupon details..." 
              className="textarea textarea-bordered w-full bg-base-100 text-base-content border-[#e5e7eb] focus:border-[#6366f1]"
            ></textarea>
          </div>
          <Input 
            label="Expiry Date" 
            type="date" 
            name="expiresAt" 
            defaultValue={editCoupon?.expiresAt?.split('T')[0]} 
            required 
          />
          <div className="flex justify-end gap-3 mt-6">
            <Button variant="ghost" type="button" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button type="submit" variant="primary">
              {editCoupon ? 'Update Coupon' : 'Create Coupon'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageCoupons;
