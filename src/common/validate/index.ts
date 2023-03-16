/**
 * 验证手机号
 */
export function validateMobile (value: string) {
  return /^1[3456789]\d{9}$/.test(value)
}

/**
 * 验证邮箱
 */
export function validateEmail (value: string) {
  return /^([a-zA-Z0-9\._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(value)
}
