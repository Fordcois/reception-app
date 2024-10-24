import { getSingleUser } from "@/lib/api/getSingleUser";
import { notFound } from "next/navigation"; 
import { UpdateButton } from "@/components/updateButton";

export default async function Page({ params }: { params: { user_id: string } }) {
  const id = params.user_id;

  try {
    const user = await getSingleUser(id);

    return (
      <div>
        <h1>User Details</h1>
        {user.first_name} {user.last_name}
        <br />{user.job_title}
        <br />{user.in_building}
        <UpdateButton user_id={user.user_id} in_building={user.in_building}/>
      </div>
    );
  } catch {
    notFound();
  } 
  };
