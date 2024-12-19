export async function loadJSON(filePath: string): Promise<any[]> {
  try {
    const response = await fetch(filePath); // Fetch the JSON file
    if (!response.ok) {
      throw new Error(`Failed to load JSON: ${response.statusText}`);
    }
    const data = await response.json(); // Parse the JSON
    return data; // Return the parsed data
  } catch (error) {
    console.error("Error loading JSON:", error);
    throw error; // Re-throw the error for the caller to handle
  }
}
