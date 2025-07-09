
import UseAuth from './UseAuth';
import UseAxiosToken from './UseAxiosToken';
import { useQuery } from '@tanstack/react-query';

const Role = () => {
    const {user, loading} = UseAuth();
    const axiosSecure = UseAxiosToken()
    const { data: role, isLoading: isRoleLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/role/${user?.email}`)
      return data
    },
  })
  console.log(role, isRoleLoading)
 

  return {role, isRoleLoading}
   
};

export default Role;