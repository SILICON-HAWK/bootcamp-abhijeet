const config = require('config');

class EnvironmentConfigManager {
  constructor() {
    this.currentEnv = process.env.NODE_ENV || 'default';
    this.loadConfiguration();
  }

  loadConfiguration() {
    try {
      // Load application configuration
      this.appConfig = config.get('app');
      this.databaseConfig = config.get('database');
      this.loggingConfig = config.get('logging');

      // Check if features config exists (optional)
      this.featuresConfig = config.has('features') 
        ? config.get('features') 
        : { enable_mock_data: false };

      this.displayConfiguration();
    } catch (error) {
      console.error('Error loading configuration:', error.message);
      process.exit(1);
    }
  }

  displayConfiguration() {
    console.log('=== Configuration Details ===');
    console.log('Current Environment:', this.currentEnv);
    
    console.log('\n--- Application Config ---');
    console.log('Name:', this.appConfig.name);
    console.log('Version:', this.appConfig.version);
    
    console.log('\n--- Database Config ---');
    console.log('Host:', this.databaseConfig.host);
    console.log('Port:', this.databaseConfig.port);
    console.log('Max Connections:', this.databaseConfig.max_connections);
    
    console.log('\n--- Logging Config ---');
    console.log('Level:', this.loggingConfig.level);
    
    console.log('\n--- Features Config ---');
    console.log('Enable Mock Data:', this.featuresConfig.enable_mock_data);
  }

  configureLogging() {
    switch(this.loggingConfig.level) {
      case 'debug':
        console.log('Logging set to DEBUG mode');
        break;
      case 'error':
        console.log('Logging set to ERROR mode');
        // In a real app, you might replace console.log with a minimal logging
        console.log = () => {};
        break;
      default:
        console.log('Logging set to INFO mode');
    }
  }

  initializeDatabase() {
    console.log(`Connecting to database at ${this.databaseConfig.host}:${this.databaseConfig.port}`);
    // Simulate database connection logic based on environment
    if (this.currentEnv === 'development') {
      console.log('Using development database configuration');
    } else if (this.currentEnv === 'production') {
      console.log('Using production database configuration');
    }
  }

  run() {
    this.configureLogging();
    this.initializeDatabase();
  }
}

// Initialize and run the application
const configManager = new EnvironmentConfigManager();
configManager.run();