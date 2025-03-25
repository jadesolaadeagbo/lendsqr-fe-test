export const fetchUserDetails = async (userId: string) => {
    try {
      const API_URL = "https://api.json-generator.com/templates/eKj4Hno4VZsM/data";
      const API_KEY = "4duvhxdkmbdxj9yhubb0snydhm8sevrywnclbqv1"; // Move API key to env
  
      const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
  
      // const users = await response.json();
      const users = (await response.json()) as unknown as { id: number }[];

  
      console.log("Fetched Users:", users.slice(0, 5)); 
  
      const numericUserId = Number(userId);
      if (isNaN(numericUserId)) {
        console.warn(`Invalid user ID: ${userId}`);
        return null;
      }
  
      
      const user = users.find((user) => user.id === numericUserId);
  
      if (!user) {
        console.warn(`User with ID ${numericUserId} not found`);
      }
  
      return user || null;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null;
    }
  };
  