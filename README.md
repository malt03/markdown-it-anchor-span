# markdown-it-anchor-span

[![Build Status](https://img.shields.io/travis/malt03/markdown-it-anchor-span/master.svg?style=flat)](https://travis-ci.org/jay-hodgson/markdown-it-br)
[![NPM version](https://img.shields.io/npm/v/markdown-it-anchor-span.svg?style=flat)](https://www.npmjs.org/package/markdown-it-br)
[![Coverage Status](https://coveralls.io/repos/github/malt03/markdown-it-anchor-span/badge.svg?branch=master)](https://coveralls.io/github/malt03/markdown-it-anchor-span?branch=master)

> AnchorSpan plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

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
[MIT](https://github.com/malt03/markdown-it-anchor-span/blob/master/LICENSE)
