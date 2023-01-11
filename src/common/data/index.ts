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
