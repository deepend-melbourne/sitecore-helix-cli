const program = require('commander');
const importAction = require('./actions/import')
const newAction = require('./actions/new')

program
  .command('import <module>')
  .description('Imports an existing Helix module')
  .action(importAction)

program
  .command('new <level> <name>')
  .description('Creates a new Helix project')
  .action(newAction)

program.parse(process.argv)
