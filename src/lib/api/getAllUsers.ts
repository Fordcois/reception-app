import { UserType } from "@/types/User"

export async function getAllUsers(): Promise<UserType[]> {
const response = await fetch('http://localhost:3000/api/userrecords/')

if (!response.ok) {
    throw new Error('Failed to fetch user records')
}
return response.json()
}

