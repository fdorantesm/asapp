'use strict'

var path = require('path')

var struct = {
	app: 'app',
	functions:{},
	dirs:[
		{ 'config' : 'config/settings' },
		{ 'schema' : 'config/schemas' },
		{ 'route' : 'config/routes' },
		{ 'controller' : 'controllers' },
		{ 'middleware' : 'middlewares' },
		{ 'helper' : 'helpers' },
		{ 'library' : 'libraries' },
		{ 'locale' : 'locales' },
		{ 'model' : 'models' },
		{ 'view' : 'views' }
	],
}


var $ = function(dir) {
	return function(sub){
		return function(file){
			return require(`${path.dirname(require.main.filename)}/${dir}/${sub}/${file}`)
		}
	}
}


struct.dirs.forEach(function(item){
	struct.functions[Object.keys(item).toString()] = $(struct.app)(item[Object.keys(item).toString()])
})

module.exports = struct.functions