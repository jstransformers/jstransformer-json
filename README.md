# jstransformer-json

JSON support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-json/master.svg)](https://travis-ci.org/jstransformers/jstransformer-json)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-json/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-json?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-json/master.svg)](http://david-dm.org/jstransformers/jstransformer-json)
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
```

## License

MIT
