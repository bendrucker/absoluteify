# absoluteify [![Build Status](https://travis-ci.org/bendrucker/absoluteify.svg?branch=master)](https://travis-ci.org/bendrucker/absoluteify)

> Streamingly transform relative HTML paths to absolute urls


## Install

```
$ npm install --save absoluteify
```


## Usage

```js
var absoluteify = require('absoluteify')
var fs = require('fs')

fs.createReadStream('file.html')
  .pipe(absoluteify('https://github.com'))
  .pipe(process.stdout)
```

**Input**

```html
<script src="app.js"></script>
<link href="styles.css">
<img src="photo.jpg">
```

**Output**

```html
<script src="https://github.com/app.js"></script>
<link href="https://github.com/styles.css">
<img src="https://github.com/photo.jpg">
````

## API

#### `absoluteify(base)` -> `TransformStream`

Returns a transform stream that uses [trumpet](https://github.com/substack/node-trumpet) to absolute-ify `<script>`, `<link>`, and `<img>` tags.

##### base

*Required*  
Type: `string`

The base URL to prefix before the relative attribute URLs.


## License

MIT © [Ben Drucker](http://bendrucker.me)
