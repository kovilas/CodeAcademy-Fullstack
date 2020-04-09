<?php

require_once 'boot.php';

if(isset($_GET['number1']) && isset($_GET['number2'])) {
    // tikrinam, ar yra tuščių laukų, antraip klaida
    if(empty($_GET['number1']) || empty($_GET['number2'])) {
            $_SESSION['error'] = 'All fields are required!';
    } else {
            $formData = array(
                'number1'=> $_GET['number1'],
                'operation'=> $_GET['operation'],
                'number2'=> $_GET['number2'],
                'time' => date("Y-m-d H:i:s"),
                'session' => session_id(),
            );

            $dataCache   = getResultsFromFile();
            $dataCache[] = $formData;
            $jsonData    = json_encode($dataCache, JSON_PRETTY_PRINT, );
        if (file_put_contents(RESULTS_FILE, $jsonData)) {
            $_SESSION['error'] = 'Success';
        } else {
            $_SESSION['error'] = 'Error"';
        }
    }
}

/*
if($_GET['operation'] == 'plus')
{
    $total = $_GET['number1'] + $_GET['number2'];
}
if($_GET['operation'] == 'minus')
{
    $total = $_GET['number1'] - $_GET['number2'];
}
if($_GET['operation'] == 'multi')
{
    $total = $_GET['number1'] * $_GET['number2'];
}
if($_GET['operation'] == 'div')
{
    $total = $_GET['number1'] / $_GET['number2'];
}

echo "{$_GET['number1']} {$_GET['operation']} {$_GET['number2']} = {$total}";

}
else {

    echo 'Klaida!';

}*/




