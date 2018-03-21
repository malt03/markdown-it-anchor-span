# markdown-it-anchor-span

[![Build Status](https://img.shields.io/travis/jay-hodgson/markdown-it-br/master.svg?style=flat)](https://travis-ci.org/jay-hodgson/markdown-it-br)
[![NPM version](https://img.shields.io/npm/v/markdown-it-br.svg?style=flat)](https://www.npmjs.org/package/markdown-it-br)
[![Coverage Status](https://img.shields.io/coveralls/jay-hodgson/markdown-it-br/master.svg?style=flat)](https://coveralls.io/r/jay-hodgson/markdown-it-br?branch=master)

> AnchorSpan plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

__v1.+ requires `markdown-it` v4.+, see changelog.__

`Hello {|anchor|} World!` => `Hello <span id="anchor"></span>`


## Install

node.js, browser:

```bash
npm install markdown-it-anchor-span --save
bower install markdown-it-anchor-span --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-anchor-span'));

md.render('Hello {|anchor|} World!') // => 'Hello <span id="anchor"></span>'

```

The widgetparams can be used to determine what kind of html widget should be rendered in the output container.

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitAnchorSpan`.


## License
[MIT](https://github.com/markdown-it/markdown-it-sub/blob/master/LICENSE)
