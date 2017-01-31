#!/usr/bin/env node
// -*- coding: utf-8 -*-
'use strict';
module.exports=function(r){function s(u){if(t[u])return t[u].exports;var v=t[u]={i:u,l:!1,exports:{}};return r[u].call(v.exports,v,v.exports,s),v.l=!0,v.exports}var t={};return s.m=r,s.c=t,s.i=function(u){return u},s.d=function(u,v,w){s.o(u,v)||Object.defineProperty(u,v,{configurable:!1,enumerable:!0,get:w})},s.n=function(u){var v=u&&u.__esModule?function(){return u['default']}:function(){return u};return s.d(v,'a',v),v},s.o=function(u,v){return Object.prototype.hasOwnProperty.call(u,v)},s.p='',s(s.s=15)}([function(r){r.exports=require('clientnode')},function(r){r.exports=require('source-map-support/register')},function(r){r.exports=require('fs')},function(r){r.exports=require('path')},function(module,exports,__webpack_require__){'use strict';(function(__dirname){function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(exports,'__esModule',{value:!0});var _clientnode=__webpack_require__(0),_clientnode2=_interopRequireDefault(_clientnode),_fs=__webpack_require__(2),_fs2=_interopRequireDefault(_fs),_path=__webpack_require__(3),_path2=_interopRequireDefault(_path),_pluginAPI=__webpack_require__(5),_pluginAPI2=_interopRequireDefault(_pluginAPI),_package=__webpack_require__(7),_package2=_interopRequireDefault(_package);try{__webpack_require__(1)}catch(r){}for(_package2.default.webNode.context={path:__dirname};_package2.default.webNode.context.path=_path2.default.resolve(_package2.default.webNode.context.path,'../../'),'node_modules'===_path2.default.basename(_path2.default.dirname(_package2.default.webNode.context.path)););if('/'===_package2.default.webNode.context.path||'node_modules'===_path2.default.basename(_path2.default.dirname(process.cwd()))||'.staging'===_path2.default.basename(_path2.default.dirname(process.cwd()))&&'node_modules'===_path2.default.basename(_path2.default.dirname(_path2.default.dirname(process.cwd()))))_package2.default.webNode.context.path=process.cwd();else try{_fs2.default.lstatSync(_path2.default.join(process.cwd(),'node_modules')).isSymbolicLink()&&(_package2.default.webNode.context.path=process.cwd())}catch(r){}let specificConfiguration={};try{specificConfiguration=eval('require')(_path2.default.join(_package2.default.webNode.context.path,'package'))}catch(r){_package2.default.webNode.context.path=process.cwd()}const name=specificConfiguration.hasOwnProperty('documentationWebsite')&&specificConfiguration.documentationWebsite.name||specificConfiguration.name;specificConfiguration=specificConfiguration.webNode||{},name&&(specificConfiguration.name=name),_package2.default.webNode.name=_package2.default.documentationWebsite.name;const parameterDescription=['currentPath','fileSystem','path','pluginAPI','require','tools','webNodePath'];let parameter=[process.cwd(),_fs2.default,_path2.default,_pluginAPI2.default,eval('require'),_clientnode2.default,__dirname],configuration=_clientnode2.default.resolveDynamicDataStructure(_package2.default.webNode,parameterDescription,parameter);if(delete _package2.default.webNode,_clientnode2.default.extendObject(!0,_clientnode2.default.modifyObject(configuration,specificConfiguration),specificConfiguration),3<process.argv.length){const r=_clientnode2.default.stringParseEncodedObject(process.argv[process.argv.length-1],configuration,'configuration');_clientnode2.default.isPlainObject(r)&&_clientnode2.default.extendObject(!0,_clientnode2.default.modifyObject(configuration,r),r)}const removePropertiesInDynamicObjects=r=>{for(const s in r)r.hasOwnProperty(s)&&!['__evaluate__','__execute__'].includes(s)&&(r.hasOwnProperty('__evaluate__')||r.hasOwnProperty('__execute__'))?delete r[s]:'object'==typeof r[s]&&null!==r[s]&&removePropertiesInDynamicObjects(r[s]);return r};configuration=_clientnode2.default.resolveDynamicDataStructure(removePropertiesInDynamicObjects(configuration),parameterDescription,parameter),configuration.package=_package2.default,configuration=_clientnode2.default.copyLimitedRecursively(configuration,-1,!0),exports.default=configuration}).call(exports,'/')},function(module,exports,__webpack_require__){'use strict';(function(__dirname){function _interopRequireDefault(r){return r&&r.__esModule?r:{default:r}}var _asyncToGenerator2=__webpack_require__(6),_asyncToGenerator3=_interopRequireDefault(_asyncToGenerator2),_child_process=__webpack_require__(8),_clientnode=__webpack_require__(0),_clientnode2=_interopRequireDefault(_clientnode),_fs=__webpack_require__(2),_fs2=_interopRequireDefault(_fs),_path=__webpack_require__(3),_path2=_interopRequireDefault(_path),_configurator=__webpack_require__(4),_configurator2=_interopRequireDefault(_configurator);Object.defineProperty(exports,'__esModule',{value:!0});try{__webpack_require__(1)}catch(r){}class PluginAPI{static callStack(r,s,t,u=null,...v){return(0,_asyncToGenerator3.default)(function*(){if(t.plugin.hotReloading&&!['configurationLoaded','apiFileReloaded'].includes(r)){const w=PluginAPI.hotReloadFile('configurationFile','configuration',s);w.length&&(PluginAPI.callStack('preConfigurationLoaded',s,t,t,w),PluginAPI.loadConfigurations(s,t),PluginAPI.callStack('postConfigurationLoaded',s,t,t,w));const x=PluginAPI.hotReloadFile('apiFile','scope',s);x.length&&PluginAPI.callStack('apiFileReloaded',s,t,w)}for(const w of s)if(w.api){t.debug&&console.info(`Run asynchrone hook "${r}" for plugin "`+`${w.name}".`);try{u=yield w.api.call(PluginAPI,r,u,...v.concat([t,s]))}catch(x){throw new Error(`Plugin "${w.internalName}" `+(w.internalName===w.name?'':`(${w.name}) `)+`throws: ${_clientnode2.default.representObject(x)} during `+`asynchrone hook "${r}".`)}}return u})()}static callStackSynchronous(r,s,t,u=null,...v){for(const w of s)if(w.api){t.debug&&console.info(`Run synchrone hook "${r}" for plugin "`+`${w.name}".`);try{u=w.api.call(PluginAPI,r,u,...v.concat([t,s]))}catch(x){throw new Error(`Plugin "${w.internalName}" `+(w.internalName===w.name?'':`(${w.name}) `)+`throws: ${_clientnode2.default.representObject(x)} during `+`synchrone hook "${r}".`)}}return u}static hotReloadFile(type,targetType,plugins){const pluginsWithChangedFiles=[];for(const plugin of plugins)if(plugin[type]){const timestamp=_fs2.default.statSync(plugin[`${type}Path`]).mtime.getTime();plugin[`${type}LoadTimestamp`]<timestamp&&(delete eval('require').cache[eval('require').resolve(plugin[type])],plugin[targetType]=PluginAPI.loadFile(plugin[type],plugin.name,plugin[targetType]),pluginsWithChangedFiles.push(plugin)),plugin[`${type}LoadTimestamp`]=timestamp}return pluginsWithChangedFiles}static load(r,s,t,u,v,w='utf8'){return(0,_asyncToGenerator3.default)(function*(){let x=_path2.default.resolve(v,'package.json'),y=null;x&&(yield _clientnode2.default.isDirectory(v))&&(yield _clientnode2.default.isFile(x))&&(y=PluginAPI.loadFile(x,r));let z='index.js';if(y){const A=_clientnode2.default.copyLimitedRecursively(y,-1,!0);for(const B of u)if(y.hasOwnProperty(B)){y.hasOwnProperty('main')&&(z=y.main);const C=y[B];return C.package=A,delete C.package[B],yield PluginAPI.loadAPI(z,v,r,s,t,w,C,x)}return yield PluginAPI.loadAPI(z,v,r,s,t,w,{package:A},x)}return yield PluginAPI.loadAPI(z,v,r,s,t,w)})()}static loadAPI(r,s,t,u,v,w='utf8',x=null,y=null){return(0,_asyncToGenerator3.default)(function*(){let z=_path2.default.resolve(s,r);if(!(yield _clientnode2.default.isFile(z)))for(const B of _fs2.default.readdirSync(s))if('package.json'!==B&&(yield _clientnode2.default.isFile(_path2.default.resolve(s,B)))&&(z=_path2.default.resolve(s,z),['index','main'].includes(_path2.default.basename(z,_path2.default.extname(B)))))break;let A=null;return(yield _clientnode2.default.isFile(z))&&(z.endsWith('.js')?A=function(B,C,...D){return B in v[t].scope?v[t].scope[B](C,...D):C}:A=function(B,...C){const D=(0,_child_process.spawnSync)(z,_clientnode2.default.arrayMake(C),{cwd:process.cwd(),encoding:w,env:process.env,input:_clientnode2.default.representObject(B),shell:!0,stdio:'inherit'});return D.stdout.startsWith('##')&&D.stdout.endsWith('##')&&(B=JSON.parse(B)),B}),{api:A,apiFilePath:A&&z,apiFileLoadTimestamp:A&&_fs2.default.statSync(z).mtime.getTime(),configuration:x,configurationFilePath:y,configurationFileLoadTimestamp:y&&_fs2.default.statSync(y).mtime.getTime()||null,dependencies:x&&x.hasOwnProperty('dependencies')&&x.dependencies||[],internalName:u,name:t,path:s,scope:A&&PluginAPI.loadFile(z,t)}})()}static loadConfigurations(plugins,configuration){for(const r in configuration)configuration.hasOwnProperty(r)&&delete configuration[r];_clientnode2.default.extendObject(configuration,_clientnode2.default.copyLimitedRecursively(_configurator2.default,-1,!0));for(const r of plugins)if(r.configuration){const s=_clientnode2.default.copyLimitedRecursively(r.configuration,-1,!0);delete s.package,_clientnode2.default.extendObject(!0,_clientnode2.default.modifyObject(configuration,s),s)}const parameter=[process.cwd(),_fs2.default,_path2.default,PluginAPI,eval('require'),_clientnode2.default,__dirname],packageConfiguration=configuration.package;return delete configuration.package,configuration=_clientnode2.default.resolveDynamicDataStructure(PluginAPI.removePropertiesInDynamicObjects(configuration),['currentPath','fileSystem','path','pluginAPI','require','tools','webNodePath'],parameter),configuration.package=packageConfiguration,configuration}static loadFile(filePath,name,fallbackScope=null,log=!0){let scope;try{scope=eval('require')(filePath)}catch(r){if(fallbackScope)scope=fallbackScope,log&&console.warn(`Couln't load new api plugin file "${filePath}" for `+`plugin "${name}": ${_clientnode2.default.representObject(r)}. `+`Using fallback one.`);else throw new Error(`Couln't load plugin file "${filePath}" for plugin "`+`${name}": ${_clientnode2.default.representObject(r)}`)}return scope.hasOwnProperty('default')?scope.default:scope}static loadAll(r){return(0,_asyncToGenerator3.default)(function*(){const s={};for(const v in'webNode'!==r.name&&(s[r.name]=yield PluginAPI.load(r.name,r.name,s,r.plugin.configurationPropertyNames,r.context.path,r.encoding)),r.plugin.directories)if(r.plugin.directories.hasOwnProperty(v)&&(yield _clientnode2.default.isDirectory(r.plugin.directories[v].path))){const w=new RegExp(r.plugin.directories[v].nameRegularExpressionPattern);for(const x of _fs2.default.readdirSync(r.plugin.directories[v].path))if(w.test(x)){const y=_path2.default.resolve(r.plugin.directories[v].path,x),z=x.replace(w,function(A,B){return'string'==typeof B?B:A});s[x]=yield PluginAPI.load(x,z,s,r.plugin.configurationPropertyNames,y,r.encoding)}}const t={};for(const v in s)s.hasOwnProperty(v)&&(t[s[v].internalName]=s[v].dependencies);const u=[];for(const v of _clientnode2.default.arraySortTopological(t))for(const w in s)if(s.hasOwnProperty(w)&&[s[w].internalName,w].includes(v)){u.push(s[w]);break}return{plugins:u,configuration:PluginAPI.loadConfigurations(u,r)}})()}static removePropertiesInDynamicObjects(r){for(const s in r)r.hasOwnProperty(s)&&!['__evaluate__','__execute__'].includes(s)&&(r.hasOwnProperty('__evaluate__')||r.hasOwnProperty('__execute__'))?delete r[s]:'object'==typeof r[s]&&null!==r[s]&&PluginAPI.removePropertiesInDynamicObjects(r[s]);return r}}exports.default=PluginAPI}).call(exports,'/')},function(r){r.exports=require('babel-runtime/helpers/asyncToGenerator')},function(r){r.exports={name:'web-node',version:'1.0.87',license:'CC-BY-3.0',description:'A generic web backend configuration and plugin management.',homepage:'http://torben.website/webNode',documentationWebsite:{name:'webNode',trackingCode:'TODO'},keywords:['web','backend','api','plugin','management'],files:['configurator.compiled.js','configurator.js','pluginAPI.compiled.js','pluginAPI.js','type.js','unixCrypt.compiled.js','unixCrypt.js'],main:'index.compiled.js',bin:{webNode:'index.compiled.js'},repository:{type:'git',url:'https://github.com/thaibault/webNode.git'},scripts:{build:'webOptimizer build',buildDLL:'webOptimizer buildDLL',clear:'webOptimizer clear && rm --force log.txt &>/dev/null',document:'webOptimizer document',lint:'webOptimizer typeCheck && webOptimizer lint',prepublish:'npm run build',serve:'webOptimizer build && ./index.compiled.js',start:'npm run serve',test:'pushd dummyPlugin && npm run build && popd && webOptimizer test',update:'npm version patch && npm publish',updateDocumentation:'documentationWebsite --log-level info',watch:'webOptimizer build --watch',watchDLL:'webOptimizer buildDLL --watch'},dependencies:{clientnode:'latest',keypress:'latest',weboptimizer:'latest'},devDependencies:{'documentation-website':'latest','source-map-support':'latest'},webNode:{debug:!1,encoding:'utf8',plugin:{configurationPropertyNames:['webNode'],directories:{internal:{path:{__evaluate__:'`${currentPath}/plugins/`'},nameRegularExpressionPattern:'^([a-zA-Z].*)$'},external:{path:{__evaluate__:'`${currentPath}/node_modules/`'},nameRegularExpressionPattern:'^([a-z][a-zA-Z0-9]+)[wW]eb[nN]ode[pP]lugin$'}},hotReloading:!0}},webOptimizer:{assetPattern:{javaScript:{pattern:'#!/usr/bin/env node\n// -*- coding: utf-8 -*-\n\'use strict\';\n{1}\n'}},exportFormat:{external:'commonjs2',self:'commonjs2'},injection:{internal:{__evaluate__:'2 < self.givenCommandLineArguments.length && self.givenCommandLineArguments[2] === \'test\' ? \'test\' : {configurator: \'./configurator\', index: \'./index\', pluginAPI: \'./pluginAPI\', unixCrypt: \'./unixCrypt\'}'}},module:{aliases:{'clientnode/test$':'clientnode/test.compiled'}},targetTechnology:'node'}}},function(r){r.exports=require('child_process')},,,,,,,function(r,s,t){r.exports=t(4)}]);
