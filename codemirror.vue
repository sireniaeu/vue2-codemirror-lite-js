<template>
<textarea></textarea>
</template>

<script>
const theme = 'base16-dark'
const mode = 'javascript'
const CodeMirror = require('codemirror/lib/codemirror.js')
require('codemirror/lib/codemirror.css')

require.ensure([], function(require){
  require(`codemirror/theme/${theme}.css`)
  require('codemirror/addon/display/fullscreen.css')
  require('codemirror/addon/display/fullscreen.js')
})

export default {
  data: function() {
    return {
      content: ''
    }
  },

  props: {
    code: String,
    value: String,
    options: {
      type: Object,
      default: function() {
        return {
          mode: mode,
          line: true,
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-lint-markers']
        }
      }
    },
    lintOptions: {
      type: Object,
      default: function () {
        return { sub: true }
      }
    }
  },

  created () {
    // Require language mode config & basic addons.
    require(`codemirror/mode/javascript/javascript.js`)
    require('codemirror/addon/lint/lint.js')
    require('codemirror/addon/lint/lint.css')
    require('codemirror/addon/lint/javascript-lint.js')
  },

  mounted () {
    const options = { ...this.options, lint: this.lintOptions, theme: theme }
    this.editor = CodeMirror.fromTextArea(this.$el, options)
    this.editor.setValue(this.code || this.value || this.content)

    this.editor.on('change', (cm) => {
      this.content = cm.getValue()
      if (!!this.$emit) {
        this.$emit('changed', this.content)
        this.$emit('input', this.content)
      }
    })

    window.JSHINT = require('jshint').JSHINT
  },
  watch: {
    code (newVal, oldVal) {
      const editorValue = this.editor.getValue()
      if (newVal !== editorValue) {
        let scrollInfo = this.editor.getScrollInfo()
        this.editor.setValue(newVal)
        this.content = newVal
        this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
      }
    },

    value (newVal, oldVal) {
      const editorValue = this.editor.getValue()
      if (newVal !== editorValue) {
        let scrollInfo = this.editor.getScrollInfo()
        this.editor.setValue(newVal)
        this.content = newVal
        this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
      }
    }
  }
}
</script>

<style scoped>
.CodeMirror-code {
  line-height: 1.6em;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
}
</style>
