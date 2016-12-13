'use strict'

const test = require('tape')
const path = require('path')
const fs = require('fs')
const concat = require('concat-stream')
const absoluteify = require('./')

test('relative to absolute', function (t) {
  t.plan(1)

  fs.createReadStream(path.resolve(__dirname, 'example-relative.html'))
    .pipe(absoluteify('https://base'))
    .pipe(concat(function (html) {
      t.equal(
        html.toString(),
        fs.readFileSync(path.resolve(__dirname, 'example-absolute.html')).toString(),
        'outputs re-formatted html with absolute paths'
      )
    }))
})

test('already absolute', function (t) {
  t.plan(1)

  fs.createReadStream(path.resolve(__dirname, 'example-absolute.html'))
    .pipe(absoluteify('https://base'))
    .pipe(concat(function (html) {
      t.equal(
        html.toString(),
        fs.readFileSync(path.resolve(__dirname, 'example-absolute.html')).toString(),
        'outputs the input'
      )
    }))
})

test('inline <script>', function (t) {
  t.plan(1)

  fs.createReadStream(path.resolve(__dirname, 'inline-script.html'))
    .pipe(absoluteify('https://base'))
    .pipe(concat(function (html) {
      t.ok(html)
    }))
})
