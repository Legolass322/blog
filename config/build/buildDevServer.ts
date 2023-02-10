import { BuildOptions } from './types/config'
import type { Configuration as DevConfiguration } from 'webpack-dev-server'

export default function buildDevServer(options: BuildOptions): DevConfiguration {
    return {
        port: options.port,
        historyApiFallback: true,
    }
}