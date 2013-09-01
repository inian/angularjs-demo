function BooksController($scope, $BookService) {
	var books = $BookService.query();
	$scope.books = books;

	//adding a new book
	// var newBook = new $BookService();
	// newBook.name = "test";
	// newBook.author = "hah";
	// newBook.price = "23";
	// newBook.$save();

	//deleting a book
	// var bookToBeDeleted = new $BookService();
	// var data = {name: "Name"};
	// bookToBeDeleted.$delete(data);
}
BooksController.$inject = ['$scope', 'BookService'];