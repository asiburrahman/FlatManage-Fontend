import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UseAxiosToken from "../../hooks/UseAxiosToken";
import Swal from "sweetalert2";

const ManageMembers = () => {
  const axiosSecure = UseAxiosToken();
  const queryClient = useQueryClient();

  // 🔄 Get members
  const { data: members = [], isLoading } = useQuery({
    queryKey: ['members'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/members');
      return res.data;
    }
  });

  // 🔁 Mutation for removing member
  const removeMemberMutation = useMutation({
    mutationFn: async (email) => {
      const res = await axiosSecure.patch(`/admin/remove-member/${email}`);
      return res.data;
    },
    onSuccess: () => {
      Swal.fire('Updated!', 'Member has been removed.', 'success');
      queryClient.invalidateQueries(['members']); // 🔁 Refetch member list
    },
    onError: (error) => {
      Swal.fire('Error', error.message || 'Failed to remove member', 'error');
    }
  });

  // 🔘 On Click
  const handleRemove = async (email) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: "This user will be demoted to normal user.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove!',
    });

    if (confirm.isConfirmed) {
      removeMemberMutation.mutate(email); // ⬅️ Call mutation here
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Members</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Booking Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member.email}>
                  <td>{index + 1}</td>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.bookingName}</td>
                  <td>
                    <button
                      onClick={() => handleRemove(member.email)}
                      className={`btn btn-error btn-xs ${
                        removeMemberMutation.isPending ? 'btn-disabled' : ''
                      }`}
                    >
                      {removeMemberMutation.isPending ? 'Removing...' : 'Remove'}
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

export default ManageMembers;