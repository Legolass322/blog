import { BuildOptions, BuildEnv } from './config/build/types/config'
import path from 'path'
import webpack from 'webpack'
import { buildConfig } from './config/build/buildConfig'

export default (env: BuildEnv): webpack.Configuration => {
  const port = env.port || 3000
  const mode = env.mode || 'development'

  const isDev = mode === 'development'
  const options: BuildOptions = {
    mode,
    port,
    paths: {
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      build: path.resolve(__dirname, 'build')
    },
    isDev
  }  
  const config: webpack.Configuration = buildConfig(options)
  return config
}