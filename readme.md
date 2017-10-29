### ASAPP

As simple as possible project structure

#### Changelog v2.0.0

Root and directory path now is based in main node_modules directory instead require.main.filename.

* Routes, middlewares and controllers were moved to app/http
* Models and schemas were moved to app/db
* Settings files are in root config directory (app/config).

This update let you :

* Serve the application inside another directories, like bin. If you use express-generator try it please.

* Better app structure

#### New features

* ROOT: Returns absolute project path. eg: /home/fdorantesm/www/ilumont

* application alias to app: If you define express application as 'app' you couldn't to used the destruct syntax before.

#

#### Installation

```
npm i --save asapp
```

#### Functions

* App / application
* Config
* Schema
* Route
* Controller
* Middleware
* Helper
* Library
* Locale
* Model

Note: Use lower case to call these functions

#### Constants

* APP
* ROOT

#

#### App structure


<pre>

app
├── config
├── db
│ ├── models
│ ├── schemas
├── helpers
├── http
│ ├── controllers
│ ├── middlewares
│ ├── routes
├── libraries
├── locales

</pre>

You can add subdirectories and call modules using the same function as normally: `asapp.helpers('payments/visa')`

#### How to use

```
var express = require('express')
var app = express()

var {config, route} = require('asapp')

app.locals(config('locals'))
app.use('/', route('router'))

module.exports = app

```

Meanwhile in app...


<pre>

.
├── app
│   ├── config
│   │   ├── locals.js
│   ├── http
│   │   ├── controllers
│   │   ├── middlewares
│   │   │   └── test.js
│   │   └── routes
│   │       ├── router.js
│   │       └── test.js





</pre>
router.js
```js

var express = require('express')
var app = express()
var asapp = require('asapp')

app.use('/test', asapp.route('test'))

module.exports = app

```

#

#### Do you like it? 

Try with a base project

[https://github.com/fdorantesm/express-assap](https://github.com/fdorantesm/express-assap)

# 

#### Bugs
No, and we'll hope not.

