const gitignore = require('./files/gitignore')
const csproj = require('./files/csproj')
const templates = require('./files/templates')
const packages = require('./files/packages')
const serialization = require('./files/serialization')

const files = (name, layer) => [
  { type: 'd', path: 'code' },
  { type: 'd', path: `code/App_Config/Include/${layer}/${name}` },
  { type: 'd', path: `code/Views/${layer}/${name}` },
  { type: 'f', path: '.gitignore', content: gitignore },
  { type: 'f', path: `Sitecore.${layer}.${name}.csproj`, content: csproj },
  { type: 'f', path: 'Templates.cs', content: templates },
  { type: 'f', path: 'packages.config', content: packages },
  { type: 'f', path: `code/App_Config/Include/${layer}/${name}/Serialization.config`, content: serialization },
]

module.exports = files
