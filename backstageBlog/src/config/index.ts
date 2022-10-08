import { Config, Env } from '../typing/config'

const env:Env = import.meta.env.MODE as Env || 'prod'
export const TOKEN_KEY = 'XToken'
const EnvConfig : Config = {
	dev: {
		baseApi: 'http://localhost:3000',
	},
	prod: {
		baseApi: 'http://175.178.115.221:8080',
	},
	production: {
		baseApi: 'http://175.178.115.221:8080',
	}
}

export default {
	env,
	...EnvConfig[env],
}
