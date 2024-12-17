const config = require('config');

class ConfigValidator {
  static validateConfiguration() {
    const requiredSections = ['app', 'database', 'logging'];
    try {
      requiredSections.forEach(section => {
        if (!config.has(section)) {
          throw new Error(`Missing required configuration section: ${section}`);
        }
      });

      // Additional specific validations
      const dbConfig = config.get('database');
      if (!dbConfig.host || !dbConfig.port) {
        throw new Error('Database configuration is incomplete');
      }

      console.log('Configuration validation passed successfully');
      return true;
    } catch (error) {
      console.error('Configuration validation failed:', error.message);
      return false;
    }
  }
}

module.exports = ConfigValidator;