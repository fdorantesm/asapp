### ASAPP

As simple as possible project structure

#

#### Installation

```
npm i --save asapp
```

#### Functions

* App
* Config
* Schema
* Route
* Controller
* Middleware
* Helper
* Library
* Locale
* Model
* View

Note: Use lower case to call these functions

#### How to use

```
var express = require('express')
var app = express()

var asapp = require('asapp')

app.locals(asapp.config('locals'))
app.use('/', asapp.route('router'))

module.exports = app

```

Meanwhile in app...

#
<pre>
.
|-- app
|   `-- config
|       |-- routes
|       |   |-- posts.js
|       |   |-- router.js
|       |   `-- users.js
|       `-- settings
|           `-- locals.js


</pre>
router.js
```js

var express = require('express')
var app = express()
var asapp = require('asapp')

app.use('/users', asapp.route('users'))
app.use('/posts', asapp.route('posts'))

module.exports = app

```

#

#### Bugs
No, and we'll hope not.

