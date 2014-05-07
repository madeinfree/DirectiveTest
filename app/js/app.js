/* Author: Whien 
   FaceBook: sal95610@yahoo.com.tw
   Email: sal95610@gmail.com
   Update: 2014 - 04 - 27 
*/
'use strict';

var app = angular.module('myApp', ['ngRoute','my.book.serivce','my.book.directive']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'myBook',
			templateUrl: './app/views/addBook.html'
		});
});

app.controller('myBook', ['$scope', 'Book', function($scope, book) {
	$scope.books = book.books;
}]);