export interface Config {
	dev: EnvConfig,
	prod: EnvConfig,
	production: EnvConfig
}
export type Env = 'dev' | 'prod' | 'production'
type EnvConfig = {
	baseApi: string
}
