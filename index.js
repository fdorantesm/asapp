'use strict'

var path = require('path')

var struct = {
	app: {
		relative: 'app',
		absolute: `${path.dirname(require.main.filename)}/app`
	},
	functions:{},
	dirs:[
		{ 'app': '/' },
		{ 'config' : 'config/settings' },
		{ 'schema' : 'config/schemas' },
		{ 'route' : 'config/routes' },
		{ 'controller' : 'controllers' },
		{ 'middleware' : 'middlewares' },
		{ 'helper' : 'helpers' },
		{ 'library' : 'libraries' },
		{ 'locale' : 'locales' },
		{ 'model' : 'models' }
	],
}


var $ = function(dir) {
	return function(sub){
		return function(file){
			var route =  sub!="/" ? `${dir}/${sub}/${file}` : `${dir}/${file}`
			return require(`${path.dirname(require.main.filename)}/${route}`)
		}
	}
}


struct.dirs.forEach(function(item){
	struct.functions[Object.keys(item).toString()] = $(struct.app.relative)(item[Object.keys(item).toString()])
})

struct.functions.APP = struct.app.absolute

module.exports = struct.functions
