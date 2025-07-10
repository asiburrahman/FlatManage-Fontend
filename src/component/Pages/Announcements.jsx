import { useQuery } from '@tanstack/react-query';
import UseAxiosToken from '../hooks/UseAxiosToken';
import { formatDate } from '../API/utilities';

const Announcements = () => {
  const axiosSecure = UseAxiosToken();

  const { data: announcements = [], isLoading, } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const res = await axiosSecure.get('/announcements');
      return res.data;
    }
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      {announcements.length === 0 && <p>No announcements yet.</p>}
      {announcements.map((announcement) => (
        <div key={announcement._id} className="p-4 mb-4 shadow rounded bg-base-100">
          <h3 className="text-xl font-semibold">{announcement.title}</h3>
          <p className="text-gray-700">{announcement.description}</p>
          <p className="text-sm text-right text-gray-400">Date: {formatDate(announcement.date)}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
