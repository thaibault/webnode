// -*- coding: utf-8 -*-
/** @module type */
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools from 'clientnode'
import {
    Encoding, Mapping, RecursiveEvaluateable, RecursivePartial
} from 'clientnode/type'

import {PluginAPI} from './pluginAPI'
// endregion
// region exports
export interface EvaluateConfigurationScope {
    currentPath:string
    fileSystem:typeof import('fs')
    path:typeof import('path')
    PluginAPI:PluginAPI
    require:typeof require
    Tools:typeof Tools
    webNodePath:string
    now:Date
    nowUTCTimestamp:number
}
export interface MetaPluginConfiguration {
    fileNames:Array<string>
    propertyNames:Array<string>
}
/**
 * NOTE: This interface should be extended by plugins to specify their
 * configuration schema.
 * Can be recursive evaluateable.
 */
export interface PluginConfiguration {
    dependencies?:Array<string>
    name?:string
    package:PackageConfiguration
}
export interface WebNodeConfiguration extends PluginConfiguration {
    context:{
        path:string
        type:string
    }
    debug:boolean
    encoding:Encoding
    interDependencies:Mapping<Array<string>|string>
    name:string
    plugin:{
        configuration:MetaPluginConfiguration
        directories:Mapping<{
            nameRegularExpressionPattern:string
            path:string
        }>
        hotReloading:boolean
    }
    runtimeConfiguration?:EvaluateablePartialConfiguration
}
export type Configuration<PluginConfigurationType = Mapping<unknown>> =
    {
        core:WebNodeConfiguration
        name:string
    } &
    PluginConfigurationType &
    Mapping<PluginConfiguration>
export type EvaluateablePartialConfiguration =
    {
        core?:RecursiveEvaluateable<RecursivePartial<WebNodeConfiguration>>
        name?:string
    } &
    Mapping<PluginConfiguration>
export type PackageConfiguration =
    Mapping<unknown> &
    {
        documentationWebsite?:{name?:string}
        main?:string
        name?:string
        webnode?:EvaluateablePartialConfiguration
        webNode?:EvaluateablePartialConfiguration
        webNodeInternalName?:string
        'web-node'?:EvaluateablePartialConfiguration
    }

export type APIFunction =
    null |
    ((_hook:string, _data:unknown, ..._parameters:Array<unknown>) => unknown)
export interface Plugin {
    api:APIFunction
    apiFilePaths:Array<string>
    apiFileLoadTimestamps:Array<number>

    configuration:EvaluateablePartialConfiguration
    configurationFileLoadTimestamps:Array<number>
    configurationFilePaths:Array<string>
    packageConfiguration:PackageConfiguration

    dependencies:Array<string>

    internalName:string
    name:string

    path:string

    scope:null|object
}
export interface PluginChange {
    newScope:object
    oldScope:null|object

    plugin:Plugin

    target:'packageConfiguration'|'scope'
}

export interface Service<Type = unknown> {
    name:string
    promise:null|Promise<Type>
}
export type Services<PluginServiceType = Mapping<unknown>> =
    Mapping<unknown> & PluginServiceType
export type ServicePromises<PluginPromiseType = Mapping<unknown>> =
    Mapping<Promise<unknown>> & PluginPromiseType

export interface BaseState {
    /*
        Mutable configuration object. Extended by each plugin specific
        configuration.
    */
    configuration:Configuration
    // Topological sorted list of plugins.
    plugins:Array<Plugin>
    // Plugin api reference.
    pluginAPI:typeof PluginAPI
}
export interface ChangedConfigurationState extends BaseState {
    // List of plugins which have a changed plugin configuration.
    pluginsWithChangedConfiguration:Array<Plugin>
}
export interface ServicesState extends BaseState {
    // An object with stored service instances.
    services:Services
}
export interface ServicePromisesState extends ServiceState {
    // An intermediate object with yet stored service promise instances.
    servicePromises:ServicePromises
}
export interface ChangedAPIFileState extends BaseState {
    // List of plugins which have a changed plugin api file.
    pluginsWithChangedAPIFiles:Array<Plugin>
}
export interface ErrorState extends ServiceState {
    // An object with stored informations why an error occurs.
    error:object
}
/**
 * Starting lifecycle with:
 * ------------------------
 *
 * 1. initialize (async)
 * 1. preConfigurationLoaded (async)
 * 2. postConfigurationLoaded (async)
 * 3. preLoadService (async)
 * 3.a preLoad_A_Service (async)
 * 3.b preLoad_B_Service (async)
 * ...
 * 4. loadService (async)
 * 5.a postLoad_A_Service (async)
 * 5.b postLoad_B_Service (async)
 * 5. postLoadService (async)
 * 6. shouldExit (async)
 * 7. exit (sync)
 *
 * Lifecycle with "hotReloading" (call "callStack" with "eventName"):
 * ------------------------------------------------------------------
 *
 * 1. preConfigurationHotLoaded (async)
 * 2. postConfigurationHotLoaded (async)
 * 3. apiFileReloaded (async)
 * 4. eventName (async)
 *
 * Lifecycle without "hotReloading" (call "callStack" with "eventName"):
 * ---------------------------------------------------------------------
 *
 * 1. eventName (async)
 */
export interface PluginHandler {
    /**
     * Application started, static configuration loaded and all available
     * plugins are determined and sorted in there dependency specific
     * typological order. Asynchronous tasks are allowed and a returning
     * promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to nothing.
     */
    initialize?(state:BaseState):Promise<void>
    /**
     * Triggered hook when at least one plugin has a new configuration file and
     * configuration object has been changed. Asynchronous tasks are allowed
     * and a returning promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to nothing.
     */
    preConfigurationLoaded?(state:ChangedConfigurationState):Promise<void>
    /**
     * Triggered hook when at least one plugin has a new configuration file and
     * configuration object has been changed. Asynchronous tasks are allowed
     * and a returning promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to nothing.
     */
    postConfigurationLoaded?(state:ChangedConfigurationState):Promise<void>
    /**
     * Plugins are initialized now and plugins should initialize their
     * continues running services (if they have one). Asynchronous tasks are
     * allowed and a returning promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to given and maybe extended object of
     * services.
     */
    preLoadService?(state:ServicesState):Promise<Services>
    /**
     * Plugins are initialized now and plugins should initialize their
     * continues running services (if they have one). Asynchronous tasks are
     * allowed and a returning promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to given and maybe extended object of
     * services.
     */
    /*
    preLoad**PLUGIN_NAME**Service?(state:ServicesState):Promise<Services>
    */
    /**
     * Plugins have initialized their continues running service and should
     * start them now. A Promise which observes this service should be
     * returned. Asynchronous tasks are allowed and a returning promise will be
     * respected NOTE: You have to wrap a promise in a promise if a continues
     * service should be registered.
     * @param state - Application state.
     *
     * @returns A promise which correspond to the plugin specific continues
     * service.
     */
    loadService?(state:ServicePromisesState):Promise<null|Service>
    /**
     * Plugins have launched their continues running services and returned a
     * corresponding promise which can be observed here.
     * @param state - Application state.
     *
     * @returns A promise which correspond to the plugin specific continues
     * service.
     */
    /*
    postLoad**PLUGIN_NAME**Service?(
        state:ServicePromisesState
    ):Promise<Services>
    */
    /**
     * Plugins have launched their continues running services and returned a
     * corresponding promise which can be observed here.
     * @param state - Application state.
     *
     * @returns A promise which correspond to the plugin specific continues
     * service promises.
     */
    postLoadService?(state:ServicePromisesState):Promise<ServicePromises>
    /**
     * Triggered hook when at least one plugin has an api file which has been
     * changed and is reloaded. Asynchronous tasks are allowed and a returning
     * promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to nothing.
     */
    apiFileReloaded?(state:ChangedAPIFileState):Promise<void>
    /**
     * Application has thrown an error and will be closed soon. Asynchronous
     * tasks are allowed and a returning promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to nothing.
     */
    error?(state:ErrorState):Promise<void>
    /**
     * Triggers if application will be closed soon. Asynchronous tasks are
     * allowed and a returning promise will be respected.
     * @param state - Application state.
     *
     * @returns Promise resolving to nothing.
     */
    shouldExit?(state:ServicesState):Promise<void>
    /**
     * Triggers if application will be closed immediately no asynchronous tasks
     * allowed anymore.
     * @param state - Application state.
     *
     * @returns Nothing.
     */
    exit?(state:ServicesState):void
}
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
