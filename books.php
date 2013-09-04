<?php
	require_once 'db.php';
	require_once 'bookModel.php';
	connect_db();
	$type = $_SERVER["REQUEST_METHOD"];
	if($type == "GET") {
	if(isset($_GET["id"])) 
		$id = $_GET["id"];
		if(isset($id)) {
			//stub
		} else {
			//return all the books
			$query = mysql_query("SELECT * from books");
			if(!$query) {
    			die(mysql_error());
			}
			$i = 0;
			while($row = mysql_fetch_assoc($query)) {
				$book = new bookModel();
				$book->setName($row['name']);
				$book->setPrice($row['price']);
				$book->setAuthor($row['author']);
				$book->setId($row['id']);
				//$book->setEditingMode($row['editingMode']);
				//$book->setEditButtonValue($row['editButtonValue']);
				$result[] = $book->getBook();
			}
			echo json_encode($result);
		}
	} else if($type == "POST") {
		$book = new bookModel();
		$data = json_decode(file_get_contents('php://input'));
		$name = $data->name;
		$author = $data->author;
		$price = $data->price;
		$editingMode = $data->editingMode;
		$editButtonValue = $data->editButtonValue;
		$query = mysql_query("INSERT into books (name, author, price) values ('$name', '$author', '$price')");
		if(!$query) {
			die(mysql_error());
		}
	} else if($type == "DELETE") {
		$name = $_GET['name'];
		echo $name;
		$query = mysql_query("DELETE from books where name = '$name'");
		if(!$query) {
			die(mysql_error());
		}
	} else if($type == "PUT") {

	}
?>