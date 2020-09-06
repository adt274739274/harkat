<?php
session_start();
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$clapVar = $_SESSION['clap'];
#$comments = "";
$commentfile = fopen("comment.txt","r");
while(!feof($commentfile)) {
	$comments=$comments.rtrim(fgets($commentfile), "\r\n")."\\n";
	#echo "data: { \"text\" : \"$comment\"}\n\nretry:10"; 
}
fclose($commentfile);

echo	"data: { \"clap\" : \"$clapVar\", \"text\" : \"$comments\"}\n\nretry:10\n";
#echo "data: { \"clap\" : \"$clapVar\"}\n\nretry:10\n";
#echo "data: $clapVar\n\nretry:10\n";
$_SESSION['clap']=0;
flush();
?>
