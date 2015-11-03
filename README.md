<<<<<<< HEAD
# jstransformer-json

Transformer that minifies or beautifies JSON

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-json/master.svg)](https://travis-ci.org/jstransformers/jstransformer-json)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-json/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-json?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-json.svg)](https://www.npmjs.org/package/jstransformer-json)

## Installation

    npm install jstransformer-json

## API

```js
var json = jstransformer(require('jstransformer-json'))
  , obj  = '{          "thisIsAnObject": true,\n    "that"      : [\n        "adsf","af"\n       ],\n    "este": "sí"\n}'

// when options or options.beautify is undefined, the resulting JSON is
// minified.

json.render(obj)
=> { body: '{"thisIsAnObject":true,"that":["adsf","af"],"este":"sí"}',
     dependencies: [] }

// options.beautify is the indentation used to beautify the JSON source
// (internally it is passed as the third argument to JSON.stringify()).

json.render(obj, { beautify: '    ' })
=> { body: '{\n    "thisIsAnObject": true,\n    "that": [\n        "adsf",\n        "af"\n    ],\n    "este": "sí"\n}',
     dependencies: [] }

json.render(obj, { beautify: '@@' })
=> { body: '{\n@@"thisIsAnObject": true,\n@@"that": [\n@@@@"adsf",\n@@@@"af"\n@@],\n@@"este": "sí"\n}',
     dependencies: [] }
=======
# JSTransformer Boilerplate

Use JSTransformer Boilerplate to create and update transformers.

1. Visit [the Boilerplate Wiki](https://github.com/jstransformers/boilerplate/wiki) on how to get started
2. Remove this top notice from any transformers

# jstransformer-foo

[Foo](http://example.com) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-foo/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-foo?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-foo

## API

```js
var foo = require('jstransformer')(require('jstransformer-foo'))

foo.render('blah').body
//=> 'blah'
>>>>>>> baf7091c768ba97174848a3c3f1393ec3cf9cba2
```

## License

MIT
