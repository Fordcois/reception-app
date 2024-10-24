import { getAllUsers } from "@/lib/api/getAllUsers"
import { UserDisplay } from "@/components/userDisplay"

export default async function UserRecords() {
  const users = await getAllUsers()
  
  return (
    <div>
      <h1>User Records</h1>
      {users.map((user) => (
        <UserDisplay key={user.user_id} user={user} />
      ))}
    </div>
  )
}


