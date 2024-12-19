export async function fetchPapers(): Promise<any[]> {
    const response = await fetch('/data.json');
    return response.json();
  }
  