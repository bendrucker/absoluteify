'use strict'

const assert = require('assert')
const trumpet = require('trumpet')
const partialRight = require('ap').partialRight
const isAbsolute = require('is-absolute-url')
const join = require('url-join')

module.exports = absoluteify

function absoluteify (base) {
  assert(base, 'base url is required')
  const tr = trumpet()

  tr.selectAll('img', partialRight(absolute, base, 'src'))
  tr.selectAll('script', partialRight(absolute, base, 'src'))
  tr.selectAll('link', partialRight(absolute, base, 'href'))

  return tr
}

function absolute (element, base, attribute) {
  element.setAttribute(
    attribute,
    (value) => isAbsolute(value) ? value : join(base, value)
  )
}
