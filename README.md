# Vue2 Codemirror Lite
####[CodeMirror](http://codemirror.net/) component for Vue.js 2.x, configured for linting & js mode only to keep it light. 
<a href="https://danmindru.github.io/vue2-codemirror-lite-js"><img src="https://cloud.githubusercontent.com/assets/1515742/21546469/9d452e38-cde7-11e6-8996-758e0ad9ff7c.jpg" alt="Vue2 Codemirror for JS screenshot"/></a>

####[See demo](https://danmindru.github.io/vue2-codemirror-lite-js)

### Motivation
For applications that only use CodeMirror for JavaScript, the bundle size can seriously be decreased by eliminating some of the features, themes and modes. 

**This is not a fully-featured CodeMirror plugin** (that's why it's lite). If you are looking for that, please check out [vue-codemirror](https://surmon-china.github.io/vue-codemirror).

Most things are pre-configured (i.e. mode, theme), but additional CodeMirror options can be set (see [Codemirror config APIs](http://codemirror.net/doc/manual.html#config)). 

### What's inside
- JavaScript only mode (not configurable)
- lint via JSHINT (bundled, not configurable)
- dark theme only (`base16-dark`, [see demo](https://danmindru.github.io/vue2-codemirror-lite-js).)
- line numbers, line wrapping
- accepts additional CodeMirror options ([see some here](http://codemirror.net/doc/manual.html)), except for mode, theme & those that require addons.
- size: ~255kb / ~84kb gzipped

### Getting started
Installing
``` bash
npm install vue2-codemirror-lite-js --save # yarn add vue2-codemirror-lite-js
```

Usage
``` javascript
// Require in Webpack.
var Vue = require('vue')
var CodeMirrorLiteJs = require('vue2-codemirror-lite-js')

Vue.use(CodeMirrorLiteJs)


// Or use as component (ES6)
import Vue from 'vue'
import { codemirror } from 'vue2-codemirror-lite-js'

export default {
  components: {
    codemirror
  }
}
```


Usage in template
```vue
<!-- simple -->
<codemirror :code="code"></codemirror>

<!-- simple (with bindings) -->
<codemirror v-model="code"></codemirror>

<!-- advanced -->
<codemirror
    :code="code"
    :options="{
       tabSize: 2,
       lineNumbers: true,
       lineWrapping: true,
       line: true,
       gutters: ['CodeMirror-linenumbers', 'CodeMirror-lint-markers'],
       lint: true
    }"
    :lintOptions="{
        sub: true,
        notypeof: true
    }"
    @changed="yourCodeChangeMethod">
</codemirror>
```

Lint options are equivalent to JSHINT options (or what you'd normally put in .jshintrc). See all the options [here](https://github.com/jshint/jshint/blob/master/examples/.jshintrc) 


There's also a [code example](https://github.com/danmindru/vue2-codemirror-lite-js/tree/master/demo/index.html) available in the source.

### Developing
There's a simple webpack config setup to get you started. 

Build / watch
```
npm run build
```

Run the example
```
npm run serve
```

Feel free to contribute to the build config and make it better :) 

### Contributing
Contributions are welcome for additional options, themes and modes that don't increase the bundle size. Ideally, if you want to contribute split your code.

### Changelog
#####v3.0.5
- Added watcher for replaceRange, essentially allowing to replace or insert text at line & ch.
#####v3.0.4 
- Added lint options for jshint (`.jshintrc`-like)
