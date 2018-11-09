const util = require('util')
const exec = util.promisify(require('child_process').exec)

const gulpfile =
  'https://github.com/deepend-melbourne/sitecore-helix-build-gulpfile.git'

const action = () => {
  console.log(`Initialising Helix pipeline`)
  console.log('Adding gulpfile.helix.js submodule')

  const args = [
    'git submodule',
    'add',
    `--name Helix.Gulp`,
    gulpfile,
    'gulpfile.helix.js'
  ]

  const cmd = args.join(' ')

  return exec(cmd).then(() => {
    console.log('done.')

    console.log('Run the below command to install the required dependencies')
    console.log('# npm install --save-dev glob gulp gulp-debug gulp-foreach gulp-msbuild gulp-newer gulp-nuget-restore gulp-watch rimraf webpack webpack-dev-server')
    console.log('# yarn add -D glob gulp gulp-debug gulp-foreach gulp-msbuild gulp-newer gulp-nuget-restore gulp-watch rimraf webpack webpack-dev-server')
  })
}

module.exports = action
