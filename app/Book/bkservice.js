var mService = angular.module("my.book.serivce" , []);

mService.service('Book', ['$rootScope', function($rootScope) {
	var service = {
		books: [ {
			title: "Book[1]", author: "WhienLiou"
		}, {
			title:"Book[2]", author: "WhienLiou"
		} ],
		addBook: function(book) {
			service.books.push(book);
			$rootScope.$broadcast( 'books.update' );
		}
	}
	return service;
}]);