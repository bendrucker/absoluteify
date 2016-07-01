'use strict'

const test = require('tape')
const path = require('path')
const fs = require('fs')
const concat = require('concat-stream')
const absoluteify = require('./')

test(function (t) {
  t.plan(1)

  fs.createReadStream(path.resolve(__dirname, 'example-relative.html'))
    .pipe(absoluteify('https://base'))
    .pipe(concat(function (html) {
      t.equal(html, fs.readFileSync(path.resolve(__dirname, 'example-absolute.html')))
    }))
})
