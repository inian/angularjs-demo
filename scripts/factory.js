//services file
//include the script files in the app!!
//  <script src="angular.js">
//    <script src="angular-resource.js">
// <script src="http://www.parsecdn.com/js/parse-1.2.9.min.js"></script>
angular.module('moduleName', ['ngResource'])
.factory('BookService', function ($resource) {
	return $resource('/books/:name', {name: '@name'}, {
		query: {method: 'GET', isArray:true},
		save: {method: 'POST'},
		remove: {method: 'DELETE'}
	});
});