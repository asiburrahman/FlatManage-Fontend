// AdminAnnouncementForm.jsx
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAxiosToken from '../../hooks/UseAxiosToken';


const AdminAnnouncementForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = UseAxiosToken();

  const onSubmit = async (data) => {
    try {
      const response = await axiosSecure.post('/admin/announcement', data);
      if (response.data.insertedId) {
        Swal.fire('Success!', 'Announcement has been posted.', 'success');
        reset();
      }
    } catch  {
      Swal.fire('Error', 'Failed to post announcement.', 'error');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-base-200 p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Make Announcement</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register('title', { required: true })}
          className="input input-bordered w-full"
          placeholder="Title"
        />
        <textarea
          {...register('description', { required: true })}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          rows="4"
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Post Announcement
        </button>
      </form>
    </div>
  );
};

export default AdminAnnouncementForm;
