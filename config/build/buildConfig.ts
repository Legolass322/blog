import { BuildOptions } from './types/config'
import buildPlugins from './buildPlugins'
import buildRules from './buildRules'
import buildResolve from './buildResolve'
import webpack from 'webpack'
import buildDevServer from './buildDevServer'

export function buildConfig(options: BuildOptions): webpack.Configuration { 
    return {
        entry: options.paths.entry,
        mode: options.mode,
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined,
        module: {
          rules: buildRules(options),
        },
        plugins: buildPlugins(options),
        resolve: buildResolve(),
        output: {
          filename: '[name].[contenthash].js',
          path: options.paths.build,
          clean: true,
        },
    }
}