<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Riskis kol nusirisi</title>
</head>
<body>
<?php


if (isset($_POST['roll'])) {
    $roll1 = 0;
    $roll2 = 0;
    $counter = 0;

    while ($roll1 + $roll2 < 10) { //pakeist ridenimus į funkciją su 2 parametrais (?) ir playginti su winCondition funkcija
        $roll1 = rand(1, 6);
        $roll2 = rand(1, 6);
        echo 'Išridenau ' . $roll1 . ' ir ' . $roll2 . '<br>';
        $counter++;
    }
    echo 'Pagaliau išridenau daugiau nei 10 (' . $roll1 . ' ir ' . $roll2 . '). Prireikė ' . $counter . ' ridenimų.<br>';

}
/*
function winCondition(){

}
*/
?>

<form action="index.php" method="POST">
    <input type="Submit" name="roll" value="Ridenti">
</form>

</body>
</html>
