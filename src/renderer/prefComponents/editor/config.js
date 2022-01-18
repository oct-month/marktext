import { ENCODING_NAME_MAP } from 'common/encoding'

export const tabSizeOptions = [{
  label: '1',
  value: 1
}, {
  label: '2',
  value: 2
}, {
  label: '3',
  value: 3
}, {
  label: '4',
  value: 4
}]

export const endOfLineOptions = [{
  label: 'Default',
  value: 'default'
}, {
  label: 'Carriage return and line feed (CRLF)',
  value: 'crlf'
}, {
  label: 'Line feed (LF)',
  value: 'lf'
}]

export const trimTrailingNewlineOptions = [{
  label: '删除所有末尾换行',
  value: 0
}, {
  label: '确保只有一个末尾换行',
  value: 1
}, {
  label: '保留文档原始格式',
  value: 2
}, {
  label: '不执行任何操作',
  value: 3
}]

export const textDirectionOptions = [{
  label: '从左至右',
  value: 'ltr'
}, {
  label: '从右向左',
  value: 'rtl'
}]

let defaultEncodingOptions = null
export const getDefaultEncodingOptions = () => {
  if (defaultEncodingOptions) {
    return defaultEncodingOptions
  }

  defaultEncodingOptions = []
  for (const [value, label] of Object.entries(ENCODING_NAME_MAP)) {
    defaultEncodingOptions.push({ label, value })
  }
  return defaultEncodingOptions
}
