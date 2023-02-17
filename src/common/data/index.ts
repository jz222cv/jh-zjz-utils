/**
 * 深拷贝
 */
export function deepCopy<T extends object> (obj: T, max = 5) {
  let round = 1
  const recursion = (obj1: object, obj2: object) => {
    if (round > max) {
      return
    }
    round++
    for (let k in obj2) {
      if (typeof obj2[k] === 'object') {
        obj1[k] = {}
        recursion(obj1[k], obj2[k])
      } else {
        obj1[k] = obj2[k]
      }
    }
  }
  const res = {} as T
  recursion(res, obj)
  return res
}

/**
 * JSON化
 */
export function JSONParse<T> (str: string): T | null {
  try {
    return JSON.parse(str) as T
  } catch (error) {
    return null
  }
}

/**
 * 驼峰转中划线
 */
export function camelToKebab (str: string) {
  const hyphenateRE = /([^-])([A-Z])/g
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

/**
 * 中划线转驼峰
 */
export function kebabToCamel (name: string) {
  const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
  const MOZ_HACK_REGEXP = /^moz([A-Z])/
  return name
    .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter
    })
    .replace(MOZ_HACK_REGEXP, 'Moz$1')
}
