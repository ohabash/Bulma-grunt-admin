# moment-filter

The filter for angular.js based on moment.js(http://momentjs.com).

## Installation
1. Get the dependencies: 
`bower install angular-moment-filter --save`
or just include `index.js` anyhow.

2. Inject moment-filter to your app
`angular.module('yourModule', ['moment-filter']);`

## Usage
`{{input | moment:"function":"param1":"param2":...}}`
is equivalent to
`moment(input).function(param1, param2, ...)`

- input: data valid for moment(), string(e.g. "2014-11-01"), object(e.g new Date), etc. If you need to pass multiple strings as parameter for moment(), use array(e.g. [param1, param2] for moment(param1, param2))

- function: function in `moment().__proto__`, e.g. format, fromNow, subtract, etc. 
(Note, you should pass a function name as a string, use `{{str | moment : "fromNow"}}` rather than `{{str | moment : fromNow}}`)

- params: params passed to `function`, each separated by `:`


To chain methods, just use another pipe:
`{{str | moment:"subtract":1:'ms' | moment:"quarter"}}` -> `moment(str).subtract(1, 'ms').quarter()` 

## Examples
![screenshot](./test-result.png?raw=true)

See `test.html` or this Plunker: http://plnkr.co/edit/JXOYvZY7UeRbPxNbPe8i.

## References
- Angular.js filter usage doc: https://docs.angularjs.org/api/ng/filter/filter
- moment.js doc: http://momentjs.com/docs/

