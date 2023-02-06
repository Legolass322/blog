export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    build: string
    html: string
    entry: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
    isDev: boolean
}

export interface BuildEnv {
    mode: BuildMode
    port: number
}