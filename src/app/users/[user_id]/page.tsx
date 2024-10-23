'use client';
type Props = {params: { user_id: string }}

export default function SingleUserPage({ params }: Props) {
  const user_id = params.user_id;

  const updateUserStatus = async () => {
    console.log('Button Clicked')
    try {
      const response = await fetch(`/api/userrecords/setinbuilding/${user_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   in_building: false,
        // }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update user status');
      }
    } catch (error) {
      console.log(error.message)
    } 
  };

  return (
    <div>
      {user_id}
      <button
        onClick={updateUserStatus}>
          Update User
      </button>

     
    </div>
  );
}