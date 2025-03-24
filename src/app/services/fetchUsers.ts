export const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://api.json-generator.com/templates/5In0JpGFjX7N/data",
        {
          headers: { Authorization: "Bearer 4duvhxdkmbdxj9yhubb0snydhm8sevrywnclbqv1" }, 
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching users:", error);
      return []; 
    }
  };
  