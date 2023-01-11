/**
 * 给数字加0
 */
export function addZero (num: string | number, count: number) {
  let str = String(num)
  while (str.length < count) {
    str = '0' + str
  }
  return str
}

/**
 * 给数字用符号隔开
 */
export function numberFormat (
  number: number | string,
  segregateSymbol = ',',
  splitLength = 3
) {
  const arr = number.toString().split('').reverse()
  const tempArr: string[] = []
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && i % splitLength === 0) {
      tempArr.push(segregateSymbol)
    }
    tempArr.push(arr[i])
  }
  return tempArr.reverse().join('')
}

