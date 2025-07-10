
import UseAuth from './UseAuth';
import UseAxiosToken from './UseAxiosToken';
import { useQuery } from '@tanstack/react-query';

const Role = () => {
    const {user, loading} = UseAuth();
    const axiosSecure = UseAxiosToken()
    const { data: role, isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/role/${user?.email}`)
      return data
    },
  })
  console.log(role, isLoading)
 

  return {role, isLoading}
   
};

export default Role;