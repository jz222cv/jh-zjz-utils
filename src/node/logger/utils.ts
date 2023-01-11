import chalk from 'chalk'
import { dayJsformat } from '../../common/date/index'

export type Key =
  | 'log'
  | 'info'
  | 'complete'
  | 'debug'
  | 'success'
  | 'error'
  | 'warn'
  | 'star'
  | 'start'
  | 'await'

export type LoggerInstance = Record<Key, (...items: any[]) => void>

function getDate () {
  const [a, b] = dayJsformat().split(' ')
  return `[${a}] [${b}]`
}

const chalkBase = chalk.underline.bold
const chalkBaseIcon = chalk.bold

function getChalk (icon: string, str: string, color: string) {
  return `${chalkBaseIcon[color](icon)}  ${chalkBase[color](str)}`
}

function getChalkNoColor (icon: string, str: string) {
  return `${icon}  ${str}`
}

const mapping: Record<Key, string> = {
  log: getChalk('i', 'INFO', 'blueBright'),
  info: getChalk('i', 'INFO', 'blueBright'),
  complete: getChalk('[√]', 'COMPLETE', 'blueBright'),
  debug: getChalk('⬤', 'DEBUG', 'redBright'),
  success: getChalk('√', 'SUCCESS', 'greenBright'),
  error: getChalk('×', 'ERROR', 'redBright'),
  warn: getChalk('‼', 'WARNING', 'yellowBright'),
  star: getChalk('*', 'STAR', 'yellowBright'),
  start: getChalk('►', 'START', 'greenBright'),
  await: getChalk('...', 'AWAITING', 'blueBright')
}

const mappingNoColor: Record<Key, string> = {
  log: getChalkNoColor('i', 'INFO'),
  info: getChalkNoColor('i', 'INFO'),
  complete: getChalkNoColor('[√]', 'COMPLETE'),
  debug: getChalkNoColor('⬤', 'DEBUG'),
  success: getChalkNoColor('√', 'SUCCESS'),
  error: getChalkNoColor('×', 'ERROR'),
  warn: getChalkNoColor('‼', 'WARNING'),
  star: getChalkNoColor('*', 'STAR'),
  start: getChalkNoColor('►', 'START'),
  await: getChalkNoColor('...', 'AWAITING')
}

const keys = Object.keys(mapping)

export function getLog (msg: string, type: Key) {
  return `${getDate()} ${mapping[type]} ${msg}`
}

export function logjs (type?: 'error' | 'info') {
  const logger = {} as LoggerInstance
  const key = type === 'error' ? 'error' : 'log'
  keys.forEach(x => {
    logger[x] = (...items: any[]) => {
      console[key](getDate(), mapping[x], ...items)
    }
  })
  return logger
}

export function logjsText (color = true) {
  const logger = {}
  const map = color ? mapping : mappingNoColor
  keys.forEach(x => {
    logger[x] = (...items: any[]) => {
      return `${getDate()} ${map[x]} ${items.join(' ')}`
    }
  })
  return logger
}
