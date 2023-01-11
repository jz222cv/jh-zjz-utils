import { addZero } from '../math'

/**
 * 日期格式化
 */
export function dayJsformat (
  date?: Date | number | string,
  format:
    | 'YYYY-MM-DD HH:mm:ss'
    | 'YYYY-MM-DD'
    | 'HH:mm:ss'
    | string = 'YYYY-MM-DD HH:mm:ss'
) {
  const d = date
    ? typeof date === 'object'
      ? date
      : new Date(date)
    : new Date()
  const year = String(d.getFullYear())
  const month = addZero(d.getMonth() + 1, 2)
  const day = addZero(d.getDate(), 2)
  const hour = addZero(d.getHours(), 2)
  const minute = addZero(d.getMinutes(), 2)
  const second = addZero(d.getSeconds(), 2)

  let res = format
  res = res.replace(/YYYY/g, year)
  res = res.replace(/MM/g, month)
  res = res.replace(/DD/g, day)
  res = res.replace(/HH/g, hour)
  res = res.replace(/mm/g, minute)
  res = res.replace(/ss/g, second)

  return res
}
