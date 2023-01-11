type storage = {
  expired: number
  package: any
}

export function setStorage (key: string, value: any, expired?: number) {
  if (!expired) {
    expired = Date.now() + 86400000
  }
  const storage: storage = {
    expired: expired,
    package: value
  }
  localStorage.setItem(key, JSON.stringify(storage))
}

export function getStorage<T> (key: string): T | null {
  const str = localStorage.getItem(key)
  if (!str) {
    return null
  }
  let storage: storage | undefined
  try {
    storage = JSON.parse(str)
  } catch (error) {}
  if (!storage || storage.expired < Date.now()) {
    removeStorage(key)
    return null
  }
  return storage.package
}

export function removeStorage (key: string) {
  localStorage.removeItem(key)
}
