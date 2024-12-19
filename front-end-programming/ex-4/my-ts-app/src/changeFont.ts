
  // Change the font of the table
  export function changeFont(): void {
    // Specify the Google Font
    const fontUrl: string = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
  
    // Create the link element dynamically
    const fontLink: HTMLLinkElement = document.createElement("link");
    fontLink.id = "google-font-link";
    fontLink.rel = "stylesheet";
    fontLink.href = fontUrl;
  
    // Add the link element to the head
    document.head.appendChild(fontLink);
  
    // Apply the font to the table
    const table: HTMLTableElement | null = document.querySelector("table");
    if (table) {
      table.style.fontFamily = "'Roboto', sans-serif";
      table.style.fontSize = "1.9rem";
      table.style.color = "navy";
    }
  }
  