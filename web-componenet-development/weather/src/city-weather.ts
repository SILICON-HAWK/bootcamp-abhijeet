import { fetchWeatherData } from './weather-api.ts';

class CityWeather extends HTMLElement {
  private city: string;

  constructor() {
    super();
    this.city = this.getAttribute("city") || "Los Angeles"; // Default city
  }

  // Lifecycle method: Called when the component is connected to the DOM
  connectedCallback() {
    this.render();
    this.fetchWeather(this.city); // Fetch weather data for the specified city
    this.addEventListener("click", this.handleButtonClick.bind(this));
  }

  // Render the component's HTML
  render() {
    this.innerHTML = `
    <div class = "card">
      <input type="text" id="inputValue" placeholder="Enter city name" />
      <button id="button">Get Weather</button>
      <div class="weather-info">
        <div id="name"></div>
        <div id="temp"></div>
        <div id="desc"></div>
        <div id="symbol"></div>
      </div>
      </div>
    `;
  }

  // Handle button click event
  handleButtonClick(event: Event) {
    if ((event.target as Element).id === 'button') {
      const inputElement = this.querySelector("#inputValue") as HTMLInputElement;
      const city = inputElement.value.trim();
      if (city) {
        this.fetchWeather(city);
      } else {
        this.displayError("Please enter a city name.");
      }
    }
  }

  // Fetch weather data from API
  async fetchWeather(city: string) {
    try {
      const weatherData = await fetchWeatherData(city);
      this.displayWeather(weatherData);
    } catch (error) {
      console.error(error);
      this.displayError("Unable to fetch weather.");
    }
  }

  // Display weather data
  displayWeather(weatherData: any) {
    const nameElement = this.querySelector("#name") as HTMLDivElement;
    const tempElement = this.querySelector("#temp") as HTMLDivElement;
    const descElement = this.querySelector("#desc") as HTMLDivElement;
    const symbolElement = this.querySelector("#symbol") as HTMLDivElement;

    nameElement.innerText = weatherData.name;
    tempElement.innerText = `${weatherData.temperature}°C`;
    descElement.innerText = weatherData.conditions;

    // Get the weather icon URL from the OpenWeatherMap API
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`;

    // Set the weather icon
    symbolElement.innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
  }

  // Display error message
  displayError(message: string) {
    const tempElement = this.querySelector("#temp") as HTMLDivElement;
    tempElement.innerText = message;
  }
}

// Define the custom element
customElements.define("city-weather", CityWeather);

export { };