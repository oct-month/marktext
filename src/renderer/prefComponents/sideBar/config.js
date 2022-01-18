import GeneralIcon from '@/assets/icons/pref_general.svg'
import EditorIcon from '@/assets/icons/pref_editor.svg'
import MarkdownIcon from '@/assets/icons/pref_markdown.svg'
import ThemeIcon from '@/assets/icons/pref_theme.svg'
import ImageIcon from '@/assets/icons/pref_image.svg'
import ImageUploaderIcon from '@/assets/icons/pref_image_uploader.svg'
import SpellIcon from '@/assets/icons/pref_spellcheck.svg'

import preferences from '../../../main/preferences/schema'

export const category = [{
  name: '常规',
  label: 'general',
  icon: GeneralIcon,
  path: '/preference/general'
}, {
  name: '编辑',
  label: 'editor',
  icon: EditorIcon,
  path: '/preference/editor'
}, {
  name: 'Markdown',
  label: 'markdown',
  icon: MarkdownIcon,
  path: '/preference/markdown'
}, {
  name: '拼写',
  label: 'spelling',
  icon: SpellIcon,
  path: '/preference/spelling'
}, {
  name: '主题',
  label: 'theme',
  icon: ThemeIcon,
  path: '/preference/theme'
}, {
  name: '图片',
  label: 'image',
  icon: ImageIcon,
  path: '/preference/image'
}, {
  name: '快捷键设置',
  label: 'keybindings',
  icon: ImageUploaderIcon, // TODO: Replace icon
  path: '/preference/keybindings'
}]

export const searchContent = Object.keys(preferences).map(k => {
  const { description, enum: emums } = preferences[k]
  let [category, preference] = description.split('--')
  if (Array.isArray(emums)) {
    preference += ` optional values: ${emums.join(', ')}`
  }
  return {
    category,
    preference
  }
})
  .filter(({ category: ca }) => category.some(c => c.label === ca.toLowerCase()))
