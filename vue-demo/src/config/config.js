const isProduction = process.env.NODE_ENV === 'production'

const config = {
  options: {
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
  },
  baseURL: ''
}

switch (process.env.NODE_ENV) {
  default:
    config.baseURL = 'https://dev.dbithk.com/V2'
}
export { config }
