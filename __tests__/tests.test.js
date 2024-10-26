describe('Integration Tests', () => {

  test("should return all Users", async () => {
    const response = await fetch(`http://localhost:3000/api/userrecords`);
    const data = await response.json();
  
    expect(response.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
  });

  test("Find single user by ID", async () => {
    const userId = 4;
    const response = await fetch(`http://localhost:3000/api/userrecords/${userId}`);
    const data = await response.json();

    expect(response.status).toBe(200);  
    expect(data).toHaveProperty("first_name", "Grant"); 
  });
});
