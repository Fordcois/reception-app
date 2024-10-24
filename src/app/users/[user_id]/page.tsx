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
      <div>
        <h1>User Details</h1>
        {user.first_name} {user.last_name}
        <br />{user.job_title}
        <br />{user.in_building}
        <Image src={user.picture_url} 
        alt={`${user.first_name} ${user.last_name}'s picture`}
        width={50}
        height={50}/>
        <UpdateButton user_id={user.user_id} in_building={user.in_building}/>
      </div>
    );
  } catch {
    notFound();
  }
};
