const path = require('path')
const fs = require('fs-extra')
const { gitDir } = require('../git')
const files = require('./templates')

const layerMap = {
  'project': 'Project',
  'feature': 'Feature',
  'foundation': 'Foundation',
}

const action = (layer, name) => {
  const layerName = layerMap[layer]
  if (!layerName) {
    console.log(`Invalid layer: ${layer}`)
    return
  }

  return gitDir()
    .then(rootPath => {
      const destPath = path.join(rootPath.trimRight(), './src/', layerName, name)

      if (fs.pathExistsSync(destPath)) {
        console.log(`Import failed: '${destPath}' already exists`)
        return
      }

      console.log(`Creating a new project`)
      console.log(` Layer: ${layerName}`)
      console.log(` Name: ${name}`)
      console.log(` Path: ${destPath}`)

      const fileList = files.shared

      if (fileList) {
        fileList(name, layerName).forEach(fileDef => {
          const filePath = path.join(destPath, fileDef.path)
          switch (fileDef.type) {
            case 'd':
              fs.ensureDirSync(filePath)
              break
            case 'f':
              const content = fileDef.content(name, layerName)
              fs.writeFileSync(filePath, content)
              break
          }
        })
      }

      console.log('done.')
    })
}

module.exports = action
