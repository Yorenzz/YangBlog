const env = import.meta.env.MODE || 'prod'
console.log('env', env);
const EnvConfig = {
  dev: {
    baseApi: 'http://175.178.115.221:8080',
    // baseApi: 'http://localhost:8080',
  },
  prod: {
    baseApi: 'http://175.178.115.221:8080',
  },
}

export default {
  env,
  ...EnvConfig[env],
}
