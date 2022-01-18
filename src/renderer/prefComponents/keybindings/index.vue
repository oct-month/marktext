<template>
  <div class="pref-keybindings">
    <h4>快捷键设置</h4>
    <div class="keybinding-info">
      <span>
        可以通过编辑名为 <code>keybindings.json</code> 的配置文件自定义MarkText快捷方式。
        有关如何使用自定义密钥绑定的详细信息，请 <span class="link" @click="openKeybindingsDocumentation">联机查看</span>。
        所有更改都需要重新启动以生效。
      </span>

      <separator></separator>
      <el-button size="medium" @click="openKeybindingsFile">打开 keybindings.json</el-button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, shell } from 'electron'
import Compound from '../common/compound'
import Separator from '../common/separator'

export default {
  components: {
    Compound,
    Separator
  },
  data () {
    return {}
  },
  methods: {
    openKeybindingsDocumentation () {
      shell.openExternal('https://github.com/marktext/marktext/blob/master/docs/KEYBINDINGS.md')
    },
    openKeybindingsFile () {
      ipcRenderer.send('mt::open-keybindings-config')
    }
  }
}
</script>

<style scoped>
.pref-keybindings {
  & .keybinding-info {
    font-size: 14px;
    margin: 20px 0;
    color: var(--editorColor);
  }
  & .link {
    color: var(--themeColor);
    cursor: pointer;
  }
  & button.el-button {
    font-size: 13px;
  }
}
</style>
