import { getSingleUser } from "@/lib/api/getSingleUser";
import { notFound } from "next/navigation"; 
import Image from "next/image";
import { UpdateButton } from "@/components/updateButton";

export default async function Page(props: { params: Promise<{ user_id: string }> }) {
  const params = await props.params;
  const id = await params.user_id;

  try {
    const user = await getSingleUser(id);

    return (
      <div className="centralised">
    <div style={{ display: 'flex' }}>
    <div className={`image-container large`}>
  <Image 
    src={user.picture_url} 
    alt={`${user.first_name} ${user.last_name}'s picture`} 
    width={300} 
    height={300} 
  />
</div>
    <div>
    <h1>{user.first_name} {user.last_name}</h1>
    <h2 className="sub-title-text">{user.job_title}</h2>
    <p className="sub-title-text">{user.in_building ? 'Available' : 'Unavailable'}</p>
        
      <UpdateButton user_id={user.user_id} in_building={user.in_building}/>
      
      </div>
      
      </div></div>
    );
  } catch {
    notFound();
  }
};
