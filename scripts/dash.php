<?php
session_start();
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$clapVarFile = fopen("../data/clapVar.txt","r");
$clapVar = fgetc($clapVarFile);
fclose($clapVarFile);
$comments = "";
$date = getdate();
$filename = "../data/comment-".$date[mday]."-".$date[mon]."-".$date[year].".txt";
$commentfile = fopen($filename,"r");
while(!feof($commentfile)) {
	$comments=$comments.rtrim(fgets($commentfile), "\r\n")."\\n";
	#echo "data: { \"text\" : \"$comment\"}\n\nretry:10"; 
}
fclose($commentfile);

echo	"data: { \"clap\" : \"$clapVar\", \"text\" : \"$comments\"}\n\nretry:10\n";
#echo "data: { \"clap\" : \"$clapVar\"}\n\nretry:10\n";
#echo "data: $clapVar\n\nretry:10\n";
$clapVar=0;
$clapVarFile = fopen("../data/clapVar.txt","w");
fwrite($clapVarFile,$clapVar);
fclose($clapVarFile);
#$_SESSION['clap']=0;
flush();
?>
