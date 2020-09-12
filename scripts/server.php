<?php

session_start();
$clapVar = $_REQUEST['clap'];
$_SESSION['clap'] = $clapVar;
if ($clapVar == 1) {

	#$varfile = fopen("data.txt", "w");
	#fwrite($varfile,$clapVar);
	#fclose($varfile);
	echo $clapVar;
}
else {
	$comment = $_REQUEST['comment'];
	$date = getdate();
	$filename = "../data/comment-".$date[mday]."-".$date[mon]."-".$date[year].".txt";
	$commentfile = fopen($filename, "a+");
	fwrite($commentfile,$comment.PHP_EOL);
	fclose($commentfile);
	echo $comment;
}		
?>
