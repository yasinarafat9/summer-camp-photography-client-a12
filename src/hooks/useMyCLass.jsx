import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useMyClass = () => {
    const { user } = useContext(AuthContext);

    const { refetch, data: myClass = [] } = useQuery({
        queryKey: ['myclasses', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://summer-camp-photography-server-greatattack1971-gmailcom.vercel.app/myClasses?email=${user?.email}`)
            return res.json();
        },
    })
    return [myClass, refetch]

}
export default useMyClass;