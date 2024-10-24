'use client'
export default function SingleUserPage() {
  const updateUserStatus = async () => {
    try {
      const response = await fetch(`/api/userrecords/setinbuilding`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // TODO - Remove hard coded update
          user_id: 3,
          in_building: false
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update user status');}
    } catch {
      console.error('Error updating user');
    }
  };

  return (
    <div>
      <button onClick={updateUserStatus}>
        Update User
      </button>
    </div>
  );
}