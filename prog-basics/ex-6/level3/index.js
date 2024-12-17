const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
// Load configuration
const configPath = path.resolve(__dirname, 'config.yaml');
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

// Extract arguments
const args = process.argv.slice(2);
const [commandName, value] = args;

// Validate arguments
if (!commandName || !value) {
  console.error('Usage: node index.js <command> <value>');
  console.error('Example: node index.js sin 1.57');
  process.exit(1);
}

// Dynamic logging level setup based on command
if (commandName === 'sin') {
  config.logging.level = 'debug';
} else if (commandName === 'cos') {
  config.logging.level = 'info';
} else {
  console.error(`Unknown command: ${commandName}`);
  process.exit(1);
}

// Configure logging
const logLevels = ['error', 'warn', 'info', 'debug'];
const log = (level, message) => {
  if (logLevels.indexOf(level) <= logLevels.indexOf(config.logging.level)) {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }
};

// Dynamic function loader
const loadFunctions = (commands) => {
  const functions = {};
  commands.forEach((cmd) => {
    const modulePath = path.resolve(__dirname, cmd.file);
    const module = require(modulePath);
    if (module[cmd.name]) {
      functions[cmd.name] = module[cmd.name];
      log('info', `Loaded function: ${cmd.name} from ${cmd.file}`);
    } else {
      log('warn', `Function ${cmd.name} not found in ${cmd.file}`);
    }
  });
  return functions;
};

// Load commands
const functions = loadFunctions(config.commands);

// Execute the requested function
log('info', `Executing command: ${commandName} with value: ${value}`);
if (functions[commandName]) {
  const result = functions[commandName](parseFloat(value));
  console.log(`${commandName}(${value}): ${result}`);
} else {
  log('error', `Function ${commandName} is not available.`);
}
