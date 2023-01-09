import type { PropType } from 'vue'
import type {
  Validator,
  SetBooleanPropReturn,
  SetStringPropReturn,
  SetStringNumberPropReturn
} from './interface'

/**
 * 设置 boolean 类型的 prop 参数
 * 
 * @param defaultVal 默认值
 */
export const setBooleanProp = (defaultVal = false): SetBooleanPropReturn => ({
  type: Boolean,
  default: defaultVal
})

/**
 * 设置 string 类型的 prop 参数
 * 
 * @param defaultVal 默认值
 * @param validator 校验器
 */
export const setStringProp = <T extends string>(defaultVal?: T | null, validator?: Validator): SetStringPropReturn => {
  if (validator) {
    return {
      type: String as unknown as PropType<T>,
      default: defaultVal || null,
      validator
    }
  }

  return {
    type: String,
    default: defaultVal || null
  }
}

/**
 * 设置 string & number 类型 props 参数
 * 
 * @param defaultVal 默认值
 */
export const setStringNumberProp = (defaultVal = null): SetStringNumberPropReturn => ({
  type: [String, Number] as PropType<string | number>,
  default: defaultVal
})
