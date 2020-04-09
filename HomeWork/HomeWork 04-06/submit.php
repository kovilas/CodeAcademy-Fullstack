<?php

require_once 'boot.php';

if(isset($_GET['number1']) && isset($_GET['number2'])) {
    // tikrinam, ar yra tuščių laukų, antraip klaida
    if(empty($_GET['number1']) || empty($_GET['number2'])) {
            $_SESSION['error'] = 'All fields are required!';
    } else {

            $Calc = new cCalc($_GET['number1'],$_GET['number2']);

                if(is_numeric($_GET['number1']) && is_numeric($_GET['number2']))
                {
                    if($_GET['operation'] == '+')
                    {
                        $total = $Calc-> add();
                    }
                    if($_GET['operation'] == '-')
                    {
                        $total = $Calc-> subtract();
                    }
                    if($_GET['operation'] == '*')
                    {
                        $total = $Calc-> multiply();
                    }
                    if($_GET['operation'] == '/')
                    {
                        $total = $Calc-> divide();
                    }
                }


            $formData = array(
                'number1'=> $_GET['number1'],
                'operation'=> $_GET['operation'],
                'number2'=> $_GET['number2'],
                'time' => date("Y-m-d H:i:s"),
                'session' => session_id(),
                'result' => $total,
            );

            $dataCache   = getResultsFromFile();
            $dataCache[] = $formData;
            $jsonData    = json_encode($dataCache, JSON_PRETTY_PRINT, );
        if (file_put_contents(RESULTS_FILE, $jsonData)) {
            $_SESSION['success'] = 'Success';
        } else {
            $_SESSION['error'] = 'Error"';
        }
    }
}

header('location: index.php');


