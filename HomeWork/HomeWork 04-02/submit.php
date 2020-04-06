<?php
$commentsTXT = 'comments.txt';

// tikrinam, ar visi laukai užpildyti, antraip klaida
if(isset($_POST['Name']) && isset($_POST['Email']) && isset($_POST['Comment'])) {
    // tikrinam, ar yra tuščių laukų, antraip klaida
    if(empty($_POST['Name']) || empty($_POST['Email']) || empty($_POST['Comment'])) {
        echo 'All fields are required';
    }
    else {
        // surenkam formą į masyvą
        $formData = array(
            'Name'=> $_POST['Name'],
            'Email'=> $_POST['Email'],
            'Comment'=> $_POST['Comment'],
            'Time' => date("Y-m-d H:i:s"),
        );

        $commentsTXT = 'comments.txt';

        $arrData = array();        // masyvas duomenų sujungimui

        // check if the file exists
        if(file_exists($commentsTXT)) {
            // gauname ankstesnius komentarus JSON formate iš failo
            $jsonData = file_get_contents($commentsTXT);

            // paverčiam JSON į masyvą
            $arrData = json_decode($jsonData, true);
        }

        // priduriam naują komentarą prie esamų komentarų
        $arrData[] = $formData;

        // enkodinam masyvą JSON formatu (JSON_PRETTY_PRINT - skaitomesnis variantas)
        $jsonData = json_encode($arrData, JSON_PRETTY_PRINT);

        // išsaugojam comments.txt, jei ne - pranešame
        if(file_put_contents('comments.txt', $jsonData))
            echo '
                <html>
                    <head>
                        <meta http-equiv="refresh" content="5;url=http://78.57.246.87/comment/" />
                    </head>
                    <body>
                        <h1>Comment successfully saved</h1>
                        <h4>Redirecting in 5 seconds...</h4>
                    </body>
                </html>';
        else echo 'Unable to write in "comments.txt"';
    }
}
else echo '
                <html>
                    <head>
                        <meta http-equiv="refresh" content="5;url=http://78.57.246.87/comment/" />
                    </head>
                    <body>
                        <h1>Form fields not submited</h1>
                        <h4>Redirecting in 5 seconds...</h4>
                    </body>
                </html>';
?>