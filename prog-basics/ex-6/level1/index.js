const config = require('config');

// Function to demonstrate configuration usage
function displayConfiguration() {
  // Read and display application configuration
  const appConfig = config.get('app');
  console.log('Application Configuration:');
  console.log('Name:', appConfig.name);
  console.log('Version:', appConfig.version);
  console.log('Description:', appConfig.description);

  // Read and display database configuration
  const dbConfig = config.get('database');
  console.log('\nDatabase Configuration:');
  console.log('Host:', dbConfig.host);
  console.log('Port:', dbConfig.port);
  console.log('Username:', dbConfig.username);

  // Read and display feature flags
  const featuresConfig = config.get('features');
  console.log('\nFeature Flags:');
  console.log('Debug Mode:', featuresConfig.debug_mode);
  console.log('Max Connections:', featuresConfig.max_connections);
}

// Run the configuration display function
displayConfiguration();