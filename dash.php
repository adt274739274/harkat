<?php

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$datafile = fopen("data.txt","r+");
$clap = fgetc($datafile);

echo "data: $clap\n\nretry:10\n";
$clap = 0;
fclose($datafile);
$datafile = fopen("data.txt","w");
fwrite($datafile,$clap);
fclose($datafile);
flush();
?>
