# webpack-isomorphic-compiler-notifier

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

[npm-url]:https://npmjs.org/package/webpack-isomorphic-compiler-notifier
[npm-image]:http://img.shields.io/npm/v/webpack-isomorphic-compiler-notifier.svg
[downloads-image]:http://img.shields.io/npm/dm/webpack-isomorphic-compiler-notifier.svg
[travis-url]:https://travis-ci.org/moxystudio/webpack-isomorphic-compiler-notifier
[travis-image]:http://img.shields.io/travis/moxystudio/webpack-isomorphic-compiler-notifier/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/webpack-isomorphic-compiler-notifier
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/webpack-isomorphic-compiler-notifier/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/webpack-isomorphic-compiler-notifier
[david-dm-image]:https://img.shields.io/david/moxystudio/webpack-isomorphic-compiler-notifier.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/webpack-isomorphic-compiler-notifier?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/webpack-isomorphic-compiler-notifier.svg
[greenkeeper-image]:https://badges.greenkeeper.io/moxystudio/webpack-isomorphic-compiler-notifier.svg
[greenkeeper-url]:https://greenkeeper.io

Notify webpack compilation status to your operating system when using [webpack-isomorphic-compiler](https://github.com/moxystudio/webpack-isomorphic-compiler).


## Installation

`$ npm install webpack-isomorphic-compiler-notifier --save-dev`


## Usage

```js
import webpackIsomorphicCompiler from 'webpack-isomorphic-compiler';
import webpackIsomorphicCompilerNotifier from 'webpack-isomorphic-compiler-notifier';

const compiler = webpackIsomorphicCompiler(/* client config */, /* server config */);

webpackIsomorphicCompilerNotifier(compiler);
```

For convenience, the function returns the isomorphic compiler passed as the first argument.   
The second argument accepts an options object:

- `title`: The title for the notification (defaults to the package.json `name` property)
- `icon`: The icon for the notification (defaults to the webpack logo)
- `sound`: Play a sound when notifying on OS that support it (defaults to `false`)


## Tests

`$ npm test`   
`$ npm test -- --watch` during development


## License

[MIT License](http://opensource.org/licenses/MIT)
