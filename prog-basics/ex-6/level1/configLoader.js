const config = require('config');

function validateConfiguration() {
  try {
    // Attempt to load all configuration sections
    const appConfig = config.get('app');
    const dbConfig = config.get('database');
    const featuresConfig = config.get('features');

    console.log('Configuration loaded successfully:');
    console.log('- App Name:', appConfig.name);
    console.log('- Database Host:', dbConfig.host);
    console.log('- Debug Mode:', featuresConfig.debug_mode);

    return true;
  } catch (error) {
    console.error('Configuration validation failed:', error.message);
    return false;
  }
}

module.exports = {
  validateConfiguration
};