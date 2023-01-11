/**
 * 获取键
 */
export function getKeys<T> (obj: T) {
  return Object.keys(obj) as (keyof T)[]
}

/**
 * 数组转对象
 */
export function arrayObject<
  T extends string | number | Record<string | number, any>,
  K extends keyof T
> (arr: T[], key?: K) {
  const obj = {} as T extends string | number
    ? Record<string, true>
    : Record<string, T>
  arr.forEach(item => {
    if (typeof item === 'string' || typeof item === 'number') {
      obj[String(item)] = true
    } else {
      obj[String(item[key])] = item
    }
  })
  return obj
}
