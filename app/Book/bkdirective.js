var mDirective = angular.module("my.book.directive", []);

mDirective.directive("addBookButton", ['Book', function(book) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.bind('click', function() {
				scope.$apply(function() {
					book.addBook({title: 'Hi', author: 'Whien'});
				});
			});
		}
	}
}]);