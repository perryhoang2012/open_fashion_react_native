#!/usr/bin/env node

const childProcess = require('child_process');
const os = require('os');

[
  // Kill the metro bundler if it's running.
  {
    command: 'pkill -f "cli.js start" || set exit 0',
    onlyPlatforms: ['darwin', 'linux'],
  },

  // Make sure our native modules are androidX-happy
  {command: 'jetify'},

  // on iOS, make sure our native modules are installed
  {
    command: 'arch -x86_64 pod install --repo-update',
    cwd: 'ios',
    onlyPlatforms: ['darwin'],
  },
]
  .filter(
    ({onlyPlatforms}) =>
      !onlyPlatforms || onlyPlatforms.includes(os.platform()),
  )
  .forEach(commandAndOptions => {
    const {command, onlyPlatform: _, ...options} = commandAndOptions;
    try {
      childProcess.execSync(command, {
        stdio: 'inherit',
        ...options,
      });
    } catch (error) {
      process.exit(error.status);
    }
  });
