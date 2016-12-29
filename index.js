const CodeMirror = require('codemirror/lib/codemirror.js')
const CmComponent = require('./codemirror.vue')

let Codemirror = {
  CodeMirror: CodeMirror,
  codemirror: CmComponent,
  install: function(Vue) {
    Vue.component('codemirror', CmComponent)
  }
}

module.exports = Codemirror
