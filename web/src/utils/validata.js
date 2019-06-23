/**
 * Created by brady on 2019-06-23.
 */
import { Toast } from 'antd-mobile'

export const validata = (validataArr) => {
  let flag = true
  validataArr.forEach(element => {
    if (!flag) return false
    switch (element.type) {
      case 'isnull':
        if (element.val === '' || element.val === null) {
          Toast.fail(`${element.name}不能为空`)
          flag = false
        }
        break
      default:
        flag = true
        break
    }
  })
  return flag
}
