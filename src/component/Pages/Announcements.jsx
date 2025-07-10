import { useQuery } from '@tanstack/react-query';
import UseAxiosToken from '../hooks/UseAxiosToken';
import Loading from '../Loading/Loading';


const Announcements = () => {
  const axiosSecure = UseAxiosToken();

  const { data: announcements = [], isLoading } = useQuery({
    queryKey: ['announcements'],
    queryFn: async () => {
      const res = await axiosSecure.get('/announcement');
      return res.data;
    },
  });

  if (isLoading) return <Loading></Loading>

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((a) => (
          <div
            key={a._id}
            className="p-4 border-l-4 border-primary bg-base-100 shadow rounded"
          >
            <h3 className="text-lg font-semibold">{a.title}</h3>
            <p className="text-sm text-gray-500 mb-1">
              {new Date(a.createdAt).toLocaleDateString()}
            </p>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;