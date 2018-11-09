const program = require('commander');
const importAction = require('./actions/import')
const newAction = require('./actions/new')
const initAction = require('./actions/init')

program
  .command('import <module>')
  .description('Imports an existing Helix module')
  .action(importAction)

program
  .command('new <level> <name>')
  .description('Creates a new Helix project')
  .action(newAction)

program
  .command('init')
  .description('Initialises the project with the latest gulpfile.helix.js')
  .action(initAction)

program.parse(process.argv)
