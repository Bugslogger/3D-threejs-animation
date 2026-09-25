const path = require('path')
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)
const threePath = path.resolve(__dirname, 'node_modules/three')

config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  three: threePath,
}

module.exports = config
