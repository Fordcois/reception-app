import { UserType } from "@/types/User"; // Assuming this is your User type

export async function getSingleUser(userId: string): Promise<UserType> {
  const response = await fetch(`http://localhost:3000/api/userrecords/${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user records');
  }
  return response.json();
}
