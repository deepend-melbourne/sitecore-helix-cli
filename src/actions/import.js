const axios = require('axios')
const path = require('path')
const util = require('util')
const fs = require('fs-extra')
const exec = util.promisify(require('child_process').exec)
const { gitDir } = require('./git')

const modulesListUrl = 'https://raw.githubusercontent.com/deepend-melbourne/sitecore-helix-module-registry/master/modules.json'

const parseUrl = url => {
  const passThru = [
    'http:',
    'https:',
    'ssh:'
  ]

  if (passThru.some(url.startsWith.bind(this))) {
    return url
  }

  return `https://github.com/${url}.git`
}

const action = moduleName => {
  console.log(`Importing '${moduleName}'`)
  axios.get(modulesListUrl)
    .then(res => res.data)
    .then(modules => {
      const moduleDefinition = modules[moduleName]
      if (moduleDefinition) {
        const { url, layer, name } = moduleDefinition
        return gitDir()
          .then(rootPath => {
            const destPath = path.join(rootPath.trimRight(), './src/', layer, name || moduleName)

            if (fs.pathExistsSync(destPath)) {
              console.log(`Import failed: '${destPath}' already exists`)
              return
            }

            console.log('Adding submodule')
            console.log(` Layer: ${layer}`)
            console.log(` Name: ${name}`)
            console.log(` From: ${parseUrl(url)}`)
            console.log(` Path: ${destPath}`)

            const args = [
              'git submodule',
              'add',
              `--name ${moduleName}`,
              parseUrl(url),
              destPath]

            const cmd = args.join(' ')

            return exec(cmd)
              .then(() => console.log('done.'))
          })
      } else {
        console.log(`Import failed: '${moduleName}' not found`)
      }
    })
}

module.exports = action
