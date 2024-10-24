import { UserType } from "@/types/User";

export async function updateSingleUser(userId: string, new_inbuilding:boolean): Promise<UserType> {
  const response = await fetch(`http://localhost:3000/api/userrecords/setinbuilding`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      user_id: userId,
      in_building: new_inbuilding
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update user record');
  }
  return response.json();
}
