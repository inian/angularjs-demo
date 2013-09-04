<?php
class BookModel {
	private $name;
	private $author;
	private $price;
	private $id;

	public function Books() {

	}
	public function id() {
		return $this->id;
	}
	public function getName() {
		return $this->name;
	}
	public function getAuthor() {
		return $this->author;
	}
	public function getPrice() {
		return $this->price;
	}
	public function getEditingMode() {
		return $this->editingMode;
	}
	public function getEditButtonValue(){
		return $this->editButtonValue;
	}
	public function setName($name) {
		$this->name = $name;
	}
	public function setAuthor($author) {
		$this->author = $author;
	}
	public function setPrice($price) {
		$this->price = $price;
	}
	public function setID($id) {
		$this->id = $id;
	}
	//public function  setEditingMode($editingMode) {
	//	$this->editingMode = $editingMode;
	//}
	//public function setEditButtonValue($editButtonValue) {
	//	$this->editButtonValue = $editButtonValue;
	//}
	public function getBook() {
        $user = new stdClass();
        $user->id = $this->id;
        $user->name = $this->name;
        $user->author = $this->author;
        $user->price = $this->price;
		//$user->editingMode = $this->editingMode;
		//$user->editButtonValue = $this->editButtonValue;
        return $user;
    }
}
?>