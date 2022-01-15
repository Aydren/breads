const React = require('react')
const Default = require('./layouts/Default')

function error404 () {
    return (
      <Default>
        <h1>404 Error</h1>
        <p>This page doesnt exist</p>
        <p>Would you like to <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">learn about HTML errors?</a></p>
      </Default>
    )
}

module.exports = error404