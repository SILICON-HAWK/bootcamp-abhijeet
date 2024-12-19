
// Display browser information
export function displayBrowserInfo(): void {
    // Get browser info elements
    const browserNameEl: HTMLElement | null = document.querySelector("#browserName");
    const browserVersionEl: HTMLElement | null = document.querySelector("#browserVersion");
    const windowDimensionsEl: HTMLElement | null = document.querySelector("#windowDimensions");
    const userAgentEl: HTMLElement | null = document.querySelector("#userAgent");

    // Get browser details
    const userAgent: string = navigator.userAgent;
    const browserName: string = navigator.appName;
    const browserVersion: string = navigator.appVersion;
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;

    // Set the content of the elements
    if (browserNameEl) browserNameEl.textContent = browserName;
    if (browserVersionEl) browserVersionEl.textContent = browserVersion;
    if (windowDimensionsEl) windowDimensionsEl.textContent = `${windowWidth}x${windowHeight}`;
    if (userAgentEl) userAgentEl.textContent = userAgent;
}