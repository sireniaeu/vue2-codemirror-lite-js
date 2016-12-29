import CodeMirror from 'codemirror/lib/codemirror.js'
import CmComponent from './codemirror.vue'

let Codemirror = {
  CodeMirror: CodeMirror,
  codemirror: CmComponent,
  install: function(Vue) {
    Vue.component('codemirror', CmComponent)
  }
}

module.exports = Codemirror
