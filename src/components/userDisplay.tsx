import Link from 'next/link';
import Image from 'next/image';
import { UserType } from '@/types/User';
import '../app/globals.css';

interface Props {user: UserType;}

export const UserDisplay: React.FC<Props> = ({ user }) => {
return (

<Link className='user-display-card' href={`/users/${user.user_id}`}>
  <div className={`image-container ${user.in_building ? '' : 'absent'}`}>
    <Image 
      src={user.picture_url} 
      alt={`${user.first_name} ${user.last_name}'s picture`} 
      width={50} 
      height={50} 
    />
  </div>
  <div>
    <span className='user-name-title'>{user.first_name} {user.last_name}</span>
    <br/>
    <span className='job-title-text'>{user.job_title}</span>
    <br/>
    <span className='out-of-office-message'>{user.in_building? ' ':'Unavailable'}</span>
  </div>
</Link>
);
};
