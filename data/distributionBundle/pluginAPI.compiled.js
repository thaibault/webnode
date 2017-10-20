#!/usr/bin/env node
// -*- coding: utf-8 -*-
'use strict';
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("clientnode");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {// -*- coding: utf-8 -*-
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons naming
    3.0 unported license. see http://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
Object.defineProperty(exports,'__esModule',{value:true});var _clientnode=__webpack_require__(0);var _clientnode2=_interopRequireDefault(_clientnode);var _fs=__webpack_require__(2);var _fs2=_interopRequireDefault(_fs);var _path=__webpack_require__(3);var _path2=_interopRequireDefault(_path);var _pluginAPI=__webpack_require__(5);var _pluginAPI2=_interopRequireDefault(_pluginAPI);var _package=__webpack_require__(8);var _package2=_interopRequireDefault(_package);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}// NOTE: Only needed for debugging this file.
try{__webpack_require__(1)}catch(error){}/*
    To assume to go two folder up from this file until there is no
    "node_modules" parent folder is usually resilient again dealing with
    projects where current working directory isn't the projects directory and
    this library is located as a nested dependency.
*/_package2.default.webNode.context={path:__dirname};while(true){_package2.default.webNode.context.path=_path2.default.resolve(_package2.default.webNode.context.path,'../../');if(_path2.default.basename(_path2.default.dirname(_package2.default.webNode.context.path))!=='node_modules')break}if(_package2.default.webNode.context.path==='/'||_path2.default.basename(_path2.default.dirname(process.cwd()))==='node_modules'||_path2.default.basename(_path2.default.dirname(process.cwd()))==='.staging'&&_path2.default.basename(_path2.default.dirname(_path2.default.dirname(process.cwd())))==='node_modules')/*
        NOTE: If we are dealing was a dependency project use current directory
        as context.
    */_package2.default.webNode.context.path=process.cwd();else/*
        NOTE: If the current working directory references this file via a
        linked "node_modules" folder using current working directory as context
        is a better assumption than two folders up the hierarchy.
    */try{if(_fs2.default.lstatSync(_path2.default.join(process.cwd(),'node_modules')).isSymbolicLink())_package2.default.webNode.context.path=process.cwd()}catch(error){}let specificConfiguration={};try{/* eslint-disable no-eval */specificConfiguration=eval('require')(_path2.default.join(_package2.default.webNode.context.path,'package'));/* eslint-enable no-eval */}catch(error){_package2.default.webNode.context.path=process.cwd()}const name=specificConfiguration.hasOwnProperty('documentationWebsite')&&specificConfiguration.documentationWebsite.name||specificConfiguration.name;specificConfiguration=specificConfiguration.webNode||{};if(name)specificConfiguration.name=name;// endregion
_package2.default.webNode.name=_package2.default.documentationWebsite.name;const now=new Date;const scope={currentPath:process.cwd(),fileSystem:_fs2.default,path:_path2.default,PluginAPI:_pluginAPI2.default,/* eslint-disable no-eval */require:eval('require'),/* eslint-enable no-eval */Tools:_clientnode2.default,webNodePath:__dirname,now,nowUTCTimestamp:_clientnode2.default.numberGetUTCTimestamp(now)};let configuration=_clientnode2.default.evaluateDynamicDataStructure(_package2.default.webNode,scope);delete _package2.default.webNode;_clientnode2.default.extendObject(true,_clientnode2.default.modifyObject(configuration,specificConfiguration),specificConfiguration);if(process.argv.length>2){const result=_clientnode2.default.stringParseEncodedObject(process.argv[process.argv.length-1],configuration,'configuration');if(_clientnode2.default.isPlainObject(result)){_clientnode2.default.extendObject(true,_clientnode2.default.modifyObject(configuration,result),result);configuration.runtimeConfiguration=result}}const removePropertiesInDynamicObjects=data=>{for(const key in data)if(data.hasOwnProperty(key)&&!['__evaluate__','__execute__'].includes(key)&&(data.hasOwnProperty('__evaluate__')||data.hasOwnProperty('__execute__')))delete data[key];else if(typeof data[key]==='object'&&data[key]!==null)removePropertiesInDynamicObjects(data[key]);return data};/*
    NOTE: We need to copy the configuration to avoid operating on deduplicated
    objects in further resolving algorithms which can lead to unexpected
    errors.
*/configuration=_clientnode2.default.evaluateDynamicDataStructure(removePropertiesInDynamicObjects(configuration),scope);configuration.package=_package2.default;configuration=_clientnode2.default.copyLimitedRecursively(configuration,-1,true);exports.default=configuration;// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {// -*- coding: utf-8 -*-
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons naming
    3.0 unported license. see http://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/// region imports
Object.defineProperty(exports,'__esModule',{value:true});var _asyncToGenerator2=__webpack_require__(6);var _asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2);var _child_process=__webpack_require__(7);var _clientnode=__webpack_require__(0);var _clientnode2=_interopRequireDefault(_clientnode);var _fs=__webpack_require__(2);var _fs2=_interopRequireDefault(_fs);var _path=__webpack_require__(3);var _path2=_interopRequireDefault(_path);var _configurator=__webpack_require__(4);var _configurator2=_interopRequireDefault(_configurator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}// NOTE: Only needed for debugging this file.
try{__webpack_require__(1)}catch(error){}// endregion
/**
 * A dumm plugin interface with all available hooks.
 */class PluginAPI{/**
     * Calls all plugin methods for given trigger description asynchrone and
     * waits for their resolved promises.
     * @param type - Type of trigger.
     * @param plugins - List of plugins to search for trigger callbacks in.
     * @param configuration - Plugin extendable configuration object.
     * @param data - Data to pipe throw all plugins and resolve after all
     * plugins have been resolved.
     * @param parameter - Additional parameter to forward into plugin api.
     * @returns A promise which resolves when all callbacks have resolved their
     * promise holding given potentially modified data.
     */static callStack(type,plugins,configuration,data=null,...parameter){return(0,_asyncToGenerator3.default)(function*(){if(configuration.plugin.hotReloading&&!['configurationLoaded','apiFileReloaded'].includes(type)){const pluginsWithChangedConfiguration=PluginAPI.hotReloadFile('configurationFile','configuration',plugins);if(pluginsWithChangedConfiguration.length){PluginAPI.callStack('preConfigurationLoaded',plugins,configuration,configuration,pluginsWithChangedConfiguration);PluginAPI.loadConfigurations(plugins,configuration);PluginAPI.callStack('postConfigurationLoaded',plugins,configuration,configuration,pluginsWithChangedConfiguration)}const pluginsWithChangedAPIFiles=PluginAPI.hotReloadFile('apiFile','scope',plugins);if(pluginsWithChangedAPIFiles.length)PluginAPI.callStack('apiFileReloaded',plugins,configuration,pluginsWithChangedConfiguration)}for(const plugin of plugins)if(plugin.api){let result;try{result=yield plugin.api.call(PluginAPI,type,data,...parameter.concat([configuration,plugins]))}catch(error){if('message'in error&&error.message.startsWith('NotImplemented:'))continue;throw new Error(`Plugin "${plugin.internalName}" `+(plugin.internalName===plugin.name?'':`(${plugin.name}) `)+`throws: ${_clientnode2.default.representObject(error)} during `+`asynchrone hook "${type}".`)}data=result;if(configuration.debug)console.info(`Ran asynchrone hook "${type}" for plugin "`+`${plugin.name}".`)}return data})()}/**
     * Calls all plugin methods for given trigger description synchrone.
     * @param type - Type of trigger.
     * @param plugins - List of plugins to search for trigger callbacks in.
     * @param configuration - Plugin extendable configuration object.
     * @param data - Data to pipe throw all plugins and resolve after all
     * plugins have been resolved.
     * @param parameter - Additional parameter to forward into plugin api.
     * @returns Given potentially modified data.
     */static callStackSynchronous(type,plugins,configuration,data=null,...parameter){for(const plugin of plugins)if(plugin.api){let result;try{result=plugin.api.call(PluginAPI,type,data,...parameter.concat([configuration,plugins]))}catch(error){if('message'in error&&error.message.startsWith('NotImplemented:'))continue;throw new Error(`Plugin "${plugin.internalName}" `+(plugin.internalName===plugin.name?'':`(${plugin.name}) `)+`throws: ${_clientnode2.default.representObject(error)} during `+`synchrone hook "${type}".`)}data=result;if(configuration.debug)console.info(`Ran synchrone hook "${type}" for plugin "`+`${plugin.name}".`)}return data}/**
     * Checks for changed plugin file type in given plugins and reloads them
     * if necessary (new timestamp).
     * @param type - Plugin file type to search for updates.
     * @param targetType - Property name to in plugin meta informations to
     * update.
     * @param plugins - List of plugins to search for updates in.
     * @returns A list with plugins which have a changed plugin file of given
     * type.
     */static hotReloadFile(type,targetType,plugins){const pluginsWithChangedFiles=[];for(const plugin of plugins)if(plugin[type]){const timestamp=_fs2.default.statSync(plugin[`${type}Path`]).mtime.getTime();if(plugin[`${type}LoadTimestamp`]<timestamp){// Enforce to reload new file version.
/* eslint-disable no-eval */delete eval('require').cache[eval('require').resolve(plugin[type])];/* eslint-enable no-eval */plugin[targetType]=PluginAPI.loadFile(plugin[type],plugin.name,plugin[targetType]);pluginsWithChangedFiles.push(plugin)}plugin[`${type}LoadTimestamp`]=timestamp}return pluginsWithChangedFiles}/**
     * Extends given configuration object with given plugin specific ones and
     * returns a plugin specific meta information object.
     * @param name - Name of plugin to extend.
     * @param internalName - Internal name of plugin to extend.
     * @param plugins - List of all yet determined plugin informations.
     * @param configurationPropertyNames - Property names to search for to use
     * as entry in plugin configuration file.
     * @param pluginPath - Path to given plugin.
     * @param encoding - Encoding to use to read and write from child
     * process's.
     * @returns An object of plugin specific meta informations.
     */static load(name,internalName,plugins,configurationPropertyNames,pluginPath,encoding='utf8'){return(0,_asyncToGenerator3.default)(function*(){let configurationFilePath=_path2.default.resolve(pluginPath,'package.json');let packageConfiguration=null;if(configurationFilePath&&(yield _clientnode2.default.isDirectory(pluginPath))&&(yield _clientnode2.default.isFile(configurationFilePath)))packageConfiguration=PluginAPI.loadFile(configurationFilePath,name);let apiFilePath='index.js';if(packageConfiguration){const packageConfigurationCopy=_clientnode2.default.copyLimitedRecursively(packageConfiguration,-1,true);for(const propertyName of configurationPropertyNames)if(packageConfiguration.hasOwnProperty(propertyName)){if(packageConfiguration.hasOwnProperty('main'))apiFilePath=packageConfiguration.main;const pluginConfiguration=packageConfiguration[propertyName];pluginConfiguration.package=packageConfigurationCopy;delete pluginConfiguration.package[propertyName];return yield PluginAPI.loadAPI(apiFilePath,pluginPath,name,internalName,plugins,encoding,pluginConfiguration,configurationFilePath)}return yield PluginAPI.loadAPI(apiFilePath,pluginPath,name,internalName,plugins,encoding,{package:packageConfigurationCopy},configurationFilePath)}return yield PluginAPI.loadAPI(apiFilePath,pluginPath,name,internalName,plugins,encoding)})()}/**
     * Load given plugin api file in given plugin path generates a plugin
     * specific data structure with useful meta informations.
     * @param relativeFilePath - Path to file to load relatively from given
     * plugin path.
     * @param pluginPath - Path to plugin directory.
     * @param name - Plugin name to use for proper error messages.
     * @param internalName - Internal plugin name to use for proper error
     * messages.
     * @param plugins - List of plugins to search for trigger callbacks in.
     * @param encoding - Encoding to use to read and write from child
     * process's.
     * @param configuration - Plugin specific configurations.
     * @param configurationFilePath - Plugin specific configuration file path.
     * standard in- and output.
     * @returns Plugin meta informations object.
     */static loadAPI(relativeFilePath,pluginPath,name,internalName,plugins,encoding='utf8',configuration=null,configurationFilePath=null){return(0,_asyncToGenerator3.default)(function*(){let filePath=_path2.default.resolve(pluginPath,relativeFilePath);if(!(yield _clientnode2.default.isFile(filePath)))for(const fileName of _fs2.default.readdirSync(pluginPath))if(fileName!=='package.json'&&(yield _clientnode2.default.isFile(_path2.default.resolve(pluginPath,fileName)))){filePath=_path2.default.resolve(pluginPath,filePath);if(['index','main'].includes(_path2.default.basename(filePath,_path2.default.extname(fileName))))break}let api=null;if(yield _clientnode2.default.isFile(filePath))if(filePath.endsWith('.js')){api=function(type,data,...parameter){if(type in plugins[name].scope)return plugins[name].scope[type](data,...parameter);throw new Error(`NotImplemented: API method "${type}" is not `+`implemented in plugin "${name}".`)}}else api=function(data,...parameter){const childProcessResult=(0,_child_process.spawnSync)(filePath,_clientnode2.default.arrayMake(parameter),{cwd:process.cwd(),encoding,env:process.env,input:_clientnode2.default.representObject(data),shell:true,stdio:'inherit'});if(childProcessResult.stdout.startsWith('##')&&childProcessResult.stdout.endsWith('##'))data=JSON.parse(data);// TODO check if method wasn't implemented by special
// returnCode
return data};return{api,apiFilePath:api&&filePath,apiFileLoadTimestamp:api&&_fs2.default.statSync(filePath).mtime.getTime(),configuration,configurationFilePath,configurationFileLoadTimestamp:configurationFilePath&&_fs2.default.statSync(configurationFilePath).mtime.getTime()||null,dependencies:configuration&&configuration.hasOwnProperty('dependencies')&&configuration.dependencies||[],internalName,name,path:pluginPath,scope:api&&PluginAPI.loadFile(filePath,name)}})()}/**
     * Loads given plugin configurations into global configuration.
     * @param plugins - Topological sorted list of plugins to check for
     * configurations.
     * @param configuration - Global configuration to extend with.
     * @returns Updated given configuration object.
     */static loadConfigurations(plugins,configuration){for(const key in configuration)if(configuration.hasOwnProperty(key))delete configuration[key];_clientnode2.default.extendObject(configuration,_clientnode2.default.copyLimitedRecursively(_configurator2.default,-1,true));for(const plugin of plugins)if(plugin.configuration){const pluginConfiguration=_clientnode2.default.copyLimitedRecursively(plugin.configuration,-1,true);delete pluginConfiguration.package;_clientnode2.default.extendObject(true,_clientnode2.default.modifyObject(configuration,pluginConfiguration),pluginConfiguration);if(configuration.runtimeConfiguration)_clientnode2.default.extendObject(true,configuration,configuration.runtimeConfiguration)}const now=new Date;const packageConfiguration=configuration.package;delete configuration.package;configuration=_clientnode2.default.evaluateDynamicDataStructure(PluginAPI.removePropertiesInDynamicObjects(configuration),{currentPath:process.cwd(),fileSystem:_fs2.default,path:_path2.default,PluginAPI,/* eslint-disable no-eval */require:eval('require'),/* eslint-enable no-eval */Tools:_clientnode2.default,webNodePath:__dirname,now,nowUTCTimestamp:_clientnode2.default.numberGetUTCTimestamp(now)});configuration.package=packageConfiguration;return configuration}/**
     * Load given api file path and returns exported scope.
     * @param filePath - Path to file to load.
     * @param name - Plugin name to use for proper error messages.
     * @param fallbackScope - Scope to return if an error occurs during
     * loading. If a "null" is given an error will be thrown.
     * @param log - Enables logging.
     * @returns Exported api file scope.
     */static loadFile(filePath,name,fallbackScope=null,log=true){let scope;try{/* eslint-disable no-eval */scope=eval('require')(filePath);/* eslint-enable no-eval */}catch(error){if(fallbackScope){scope=fallbackScope;if(log)console.warn(`Couln't load new api plugin file "${filePath}" for `+`plugin "${name}": ${_clientnode2.default.representObject(error)}. `+`Using fallback one.`)}else throw new Error(`Couln't load plugin file "${filePath}" for plugin "`+`${name}": ${_clientnode2.default.representObject(error)}`)}if(scope.hasOwnProperty('default'))return scope.default;return scope}/**
     * Extends given configuration object with all plugin specific ones and
     * returns a topological sorted list of plugins with plugins specific
     * meta informations stored.
     * @param configuration - Configuration object to extend and use.
     * @returns A topological sorted list of plugins objects.
     */static loadAll(configuration){return(0,_asyncToGenerator3.default)(function*(){const plugins={};if(configuration.name!=='webNode')plugins[configuration.name]=yield PluginAPI.load(configuration.name,configuration.name,plugins,configuration.plugin.configurationPropertyNames,configuration.context.path,configuration.encoding);for(const type in configuration.plugin.directories)if(configuration.plugin.directories.hasOwnProperty(type)&&(yield _clientnode2.default.isDirectory(configuration.plugin.directories[type].path))){const compiledRegularExpression=new RegExp(configuration.plugin.directories[type].nameRegularExpressionPattern);for(const pluginName of _fs2.default.readdirSync(configuration.plugin.directories[type].path)){if(!compiledRegularExpression.test(pluginName))continue;const currentPluginPath=_path2.default.resolve(configuration.plugin.directories[type].path,pluginName);const internalName=pluginName.replace(compiledRegularExpression,function(fullMatch,firstMatch){return typeof firstMatch==='string'?firstMatch:fullMatch});plugins[pluginName]=yield PluginAPI.load(pluginName,internalName,plugins,configuration.plugin.configurationPropertyNames,currentPluginPath,configuration.encoding)}}const temporaryPlugins={};for(const pluginName in plugins)if(plugins.hasOwnProperty(pluginName)){temporaryPlugins[plugins[pluginName].internalName]=plugins[pluginName].dependencies;if(configuration.interDependencies.hasOwnProperty(plugins[pluginName].internalName))for(const name of[].concat(configuration.interDependencies[plugins[pluginName].internalName]))if(!temporaryPlugins[plugins[pluginName].internalName].includes(name))temporaryPlugins[plugins[pluginName].internalName].push(name)}const sortedPlugins=[];for(const pluginName of _clientnode2.default.arraySortTopological(temporaryPlugins))for(const name in plugins)if(plugins.hasOwnProperty(name))if([plugins[name].internalName,name].includes(pluginName)){sortedPlugins.push(plugins[name]);break}return{plugins:sortedPlugins,configuration:PluginAPI.loadConfigurations(sortedPlugins,configuration)}})()}/**
     * Removes properties in objects where a dynamic indicator lives.
     * @param data - Object to traverse recursively.
     * @returns Given object with removed properties.
     */static removePropertiesInDynamicObjects(data){for(const key in data)if(data.hasOwnProperty(key)&&!['__evaluate__','__execute__'].includes(key)&&(data.hasOwnProperty('__evaluate__')||data.hasOwnProperty('__execute__')))delete data[key];else if(typeof data[key]==='object'&&data[key]!==null)PluginAPI.removePropertiesInDynamicObjects(data[key]);return data}}exports.default=PluginAPI;// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"name":"web-node","version":"1.0.125","license":"CC-BY-3.0","description":"High level javaScript backend plugin system and configuration merger.","homepage":"http://torben.website/webNode","documentationWebsite":{"name":"webNode","trackingCode":"UA-40192634-9"},"keywords":["web","backend","api","plugin","management"],"files":["configurator.compiled.js","configurator.js","index.js","pluginAPI.compiled.js","pluginAPI.js","type.js","unixCrypt.compiled.js","unixCrypt.js"],"main":"index.compiled.js","bin":{"webNode":"index.compiled.js"},"repository":{"type":"git","url":"https://github.com/thaibault/webNode.git"},"scripts":{"build":"webOptimizer build","build:dll":"webOptimizer build:dll","clear":"webOptimizer clear && rm --force log.txt &>/dev/null","document":"webOptimizer document","lint":"webOptimizer check:type; webOptimizer lint","prepare":"npm run build","serve":"webOptimizer build && ./index.compiled.js","start":"npm run serve","test":"cd dummyPlugin && npm run build && cd - && webOptimizer test","update":"npm version patch && npm publish","update:documentation":"documentationWebsite --log-level info","watch":"webOptimizer build --watch","watch:dll":"webOptimizer build:dll --watch"},"dependencies":{"clientnode":"^1.0.272","keypress":"^0.2.1"},"peerDependencies":{"babel-runtime":"*"},"devDependencies":{"babel-cli":"^6.24.1","babel-eslint":"^8.0.1","documentation-website":"^1.0.69","eslint":"^4.9.0","eslint-config-google":"^0.9.1","eslint-plugin-flowtype":"^2.36.0","eslint-plugin-jsdoc":"^3.1.1","flow-bin":"^0.57.3","jsdoc":"^3.5.2","source-map-support":"^0.5.0","weboptimizer":"^1.0.397","webpack":"^3.8.0","webpack-dev-server":"^2.9.2"},"webNode":{"debug":false,"encoding":"utf8","interDependencies":{},"plugin":{"configurationPropertyNames":["webNode"],"directories":{"internal":{"path":{"__evaluate__":"`${currentPath}/plugins/`"},"nameRegularExpressionPattern":"^([a-zA-Z].*)$"},"external":{"path":{"__evaluate__":"`${currentPath}/node_modules/`"},"nameRegularExpressionPattern":"^([a-z][a-zA-Z0-9]+)[wW]eb[nN]ode[pP]lugin$"}},"hotReloading":true}},"webOptimizer":{"assetPattern":{"javaScript":{"pattern":"#!/usr/bin/env node\n// -*- coding: utf-8 -*-\n'use strict';\n{1}\n"}},"exportFormat":{"external":"commonjs2","self":"commonjs2"},"injection":{"internal":{"__evaluate__":"2 < self.givenCommandLineArguments.length && self.givenCommandLineArguments[2] === 'test' ? 'test' : {configurator: './configurator', index: './index', pluginAPI: './pluginAPI', unixCrypt: './unixCrypt'}"}},"module":{"aliases":{"clientnode/test$":"clientnode/test.compiled"},"optimizer":{"babelMinify":null},"preprocessor":{"javaScript":{"options":{"presets":{"__evaluate__":"[['env', {targets: self.targetTechnology === 'node' ? {node: 'current'} : {browsers: 'last 2 versions', node: 'current'}}]].concat('stage-0')"}}}}},"targetTechnology":"node"}}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
