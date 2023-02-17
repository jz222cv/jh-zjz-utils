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

/**
 * 数组去重
 */
export function arrayUnique<T> (arr: T[]) {
  return Array.from(new Set(arr))
}

/**
 * 数组并集
 */
export function arrayUnion<T> (...arr: T[][]) {
  return arr.flat(1)
}

/**
 * 数组交集
 */
export function arrayIntersect<T extends number | string> (...arr: T[][]) {
  const map = {} as Record<T, number>
  arr.forEach(item => {
    arrayUnique(item).forEach(x => {
      if (!map[x]) {
        map[x] = 0
      }
      map[x]++
    })
  })
  return getKeys(map).filter(x => map[x] === arr.length)
}

/**
 * 数组差集
 */
export function arrayDiff<T extends number | string> (...arr: T[][]) {
  const map = {} as Record<T, number>
  arr.forEach(item => {
    arrayUnique(item).forEach(x => {
      if (!map[x]) {
        map[x] = 0
      }
      map[x]++
    })
  })
  return getKeys(map).filter(x => map[x] === 1)
}
