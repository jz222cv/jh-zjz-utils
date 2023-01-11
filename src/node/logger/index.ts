import { Key, LoggerInstance, logjs } from './utils'

export { logjs, logjsText } from './utils'

export class Logger {
  timestamp: number
  logger: LoggerInstance

  constructor () {
    this.timestamp = Date.now()
    this.logger = logjs()
  }

  base (message: string, type: Key) {
    const duration = (Date.now() - this.timestamp) / 1000
    const memory = (process.memoryUsage().rss / Math.pow(2, 20)).toFixed(2)
    this.logger[type](`${message}, duration: ${duration} s, ram: ${memory} m`)
  }

  log (message: string, type: Key = 'info') {
    this.base(message, type)
  }

  logSync (message: string, type: Key = 'info') {
    this.base(message, type)
  }
}
