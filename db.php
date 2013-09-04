<?php

function connect_db() {
    $database = "angulardemo";
    $connect = mysql_connect('localhost', 'root', '');
    if (!$connect) {
        echo 'mur';
        die(mysql_error());
    }
    $db_connect = mysql_select_db($database, $connect);
    if (!$db_connect) {
        die(mysql_error());
    }
}
?>
