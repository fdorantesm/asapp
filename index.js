'use strict'

let path = require('path')
let rootPath = path.dirname(require.main.children[0].filename).replace(/[\/\\]node_modules[\/\\].*/g,'')
let struct = {}

struct.functions = module.exports = {}

struct.app = {
	relative: 'app',
	absolute: `${rootPath}/app`
}

struct.dirs = [
	{ 'app': '/' },
	{ 'config' : 'config' },
	{ 'controller' : 'http/controllers' },
	{ 'middleware' : 'http/middlewares' },
	{ 'route' : 'http/routes' },
	{ 'helper' : 'helpers' },
	{ 'library' : 'libraries' },
	{ 'locale' : 'locales' },
	{ 'model' : 'db/models' },
	{ 'schema' : 'db/schemas' },
]

let $ = (dir) => {
	return (sub) => {
		return (file) => {
			let route =  sub!="/" ? `${dir}/${sub}/${file}` : `${dir}/${file}`
			return require(`${rootPath}/${route}`)
		}
	}
}

for (let item of struct.dirs) {
	struct.functions[Object.keys(item).toString()] = $(struct.app.relative)(item[Object.keys(item).toString()])
}

struct.functions.APP = struct.app.absolute
struct.functions.ROOT = rootPath
struct.functions.application = struct.functions.app
