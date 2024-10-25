import Link from 'next/link';
import Image from 'next/image';
import { UserType } from '@/types/User';
import '../app/globals.css';

interface Props {user: UserType;}

export const UserDisplay: React.FC<Props> = ({ user }) => {
return (
<Link className='user-display-card' href={`/users/${user.user_id}`}>

<div className={`image-container ${user.in_building ? 'present' : 'absent'}`}>
  <Image 
    src={user.picture_url} 
    alt={`${user.first_name} ${user.last_name}'s picture`} 
    width={50} 
    height={50} 
  />
</div>
    <div>
        {user.first_name} {user.last_name}<br/>
        {user.job_title}
    </div>

</Link>
);
};
