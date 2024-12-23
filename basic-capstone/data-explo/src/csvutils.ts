// Utility function to convert data to CSV
function convertToCSV(data: any[]): string {
    if (data.length === 0) return '';

    // Create CSV headers dynamically
    const headers = Object.keys(data[0]).join(',');

    // Create rows for each paper
    const rows = data
        .map((row) =>
            Object.values(row)
                .map((value) => `"${value}"`) // Wrap each value in quotes to handle special characters
                .join(',')
        )
        .join('\n');

    return `${headers}\n${rows}`;
}

// Utility function to download CSV
export function downloadCSV(data: any[], filename: string): void {
    const csvContent = convertToCSV(data);

    // Create a blob with CSV content
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create a download link
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
}
