const util = require('util')
const exec = util.promisify(require('child_process').exec)

const gitDir = () => exec('git rev-parse --show-toplevel')
  .then(({ stdout }) => stdout.trim())

module.exports.gitDir = gitDir
