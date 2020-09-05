<?php

$clap = $_GET['clap'];
$myfile = fopen("data.txt", "w");
fwrite($myfile,$clap);
fclose($myfile);
echo $clap;
?>
