const gitignore = require('./files/gitignore')
const csproj = require('./files/csproj')
const templates = require('./files/templates')
const packages = require('./files/packages')
const serialization = require('./files/serialization')
const config = require('./files/config')

const files = (name, layer) => [
  { type: 'd', path: 'code' },
  { type: 'd', path: `code/App_Config/Include/${layer}/${name}` },
  { type: 'd', path: `code/Views/${layer}/${name}` },
  { type: 'f', path: '.gitignore', content: gitignore },
  { type: 'f', path: `code/Sitecore.${layer}.${name}.csproj`, content: csproj },
  { type: 'f', path: 'code/Templates.cs', content: templates },
  { type: 'f', path: 'code/packages.config', content: packages },
  { type: 'f', path: `code/App_Config/Include/${layer}/${name}/${layer}.${name}.config`, content: config },
  { type: 'f', path: `code/App_Config/Include/${layer}/${name}/${layer}.${name}.Serialization.config`, content: serialization },
]

module.exports = files
