// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
//const path = require('path');

const config = getDefaultConfig(__dirname);
//config.watchFolders = config.watchFolders.concat(path.resolve(__dirname + '/../Coordinator/'));

module.exports = config;
