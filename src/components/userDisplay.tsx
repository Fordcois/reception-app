import Link from 'next/link';
import { UserType } from '@/types/User';
import '../app/globals.css';

interface Props {user: UserType;}

export const UserDisplay: React.FC<Props> = ({ user }) => {
return (
    <div>
<Link 
    href={`/users/${user.user_id}`}
>
{user.first_name} {user.last_name}
</Link>

    </div>
);
};
