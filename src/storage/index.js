
// storage 封装
const STORAGE_KEY = 'mall'
export default {
  // 存储值
  setItem (key, value, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName)
      val[key] = value
      this.setItem(moduleName, val)
    } else {
      const val = this.getStorage()
      val[key] = value
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },
  // 获取值
  getItem (key, moduleName) {
    if (moduleName) {
      const val = this.getItem(moduleName)
      if (val) {
        return val[key]
      }
    }
    return this.getStorage()[key]
  },
  // 获取缓存信息
  getStorage () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  clear (key, moduleName) {
    const val = this.getStorage()
    if (moduleName) {
      delete val[moduleName][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.getItem(STORAGE_KEY, JSON.stringify(val))
  }
}
