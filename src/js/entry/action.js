// require('../css/side.less')
require('../../css/side.less');
module.exports = {
	'sayHello':function(){
		// console.log('hello world')
		document.getElementById('mydiv').innerHTML = 'hello world hao'
	},
	'jump':function(){
		console.log('jump')
	}
}