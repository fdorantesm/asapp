'use strict'

let path = require('path')
let rootPath = path.dirname(require.main.children[0].filename).replace(/\/node_modules\/.*/g,'')
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

let $ = function(dir) {
	return function(sub){
		return function(file){
			let route =  sub!="/" ? `${dir}/${sub}/${file}` : `${dir}/${file}`
			return require(`${rootPath}/${route}`)
		}
	}
}

struct.dirs.forEach(function(item){
	struct.functions[Object.keys(item).toString()] = $(struct.app.relative)(item[Object.keys(item).toString()])
})

struct.functions.APP = struct.app.absolute
struct.functions.ROOT = rootPath
struct.functions.application = struct.functions.app
