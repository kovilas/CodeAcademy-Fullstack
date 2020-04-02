<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>
<body>
<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>Nupieškite" tokio tipo piramidę:</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            <?php
            for ($c=0; $c<10; $c++) { // į kurį aukštą lipsim
                for($dc=0; $dc<$c; $dc++) { // į kurį butą eisim
                    echo $c;
                }
                echo "<br>";
            }
            ?>
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>Parašykite funkciją kuri unserscore_case konvertuoja i camelCase.</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            <?php
                function to_camel_case($inputUnderscore) {
                    $inputUnderscore = ucwords(str_replace('_',' ',$inputUnderscore)); // nelabai suprantu sekos, kodėl būtina keisti į tarpą, tada tą tarpą naikinti, bet po to lcfisrt suveikia gerai
                    $inputUnderscore = str_replace(' ','',$inputUnderscore);
                    return lcfirst($inputUnderscore);
                }
                $string = 'i_like_bananas_for_scale';
                echo to_camel_case($string);
            ?>
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>Parašykite funkciją kuri priima kaip argumentą/paramėtrą "2014-12-31" formato datą ir grąžina zodiako ženklą.</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            <?php
                function getZodiac($inputDate) {

                    $setZodiac = '';
                    list ($year, $month, $day) = explode ('-', $inputDate); // $year reikalingas, bet nereikalingas

                    if ( ( $month == 3 && $day > 20 ) || ( $month == 4 && $day < 20 ) ) { $setZodiac = "Aries"; }
                    elseif ( ( $month == 4 && $day > 19 ) || ( $month == 5 && $day < 21 ) ) { $setZodiac = "Taurus"; }
                    elseif ( ( $month == 5 && $day > 20 ) || ( $month == 6 && $day < 21 ) ) { $setZodiac = "Gemini"; }
                    elseif ( ( $month == 6 && $day > 20 ) || ( $month == 7 && $day < 23 ) ) { $setZodiac = "Cancer"; }
                    elseif ( ( $month == 7 && $day > 22 ) || ( $month == 8 && $day < 23 ) ) { $setZodiac = "Leo"; }
                    elseif ( ( $month == 8 && $day > 22 ) || ( $month == 9 && $day < 23 ) ) { $setZodiac = "Virgo"; }
                    elseif ( ( $month == 9 && $day > 22 ) || ( $month == 10 && $day < 23 ) ) { $setZodiac = "Libra"; }
                    elseif ( ( $month == 10 && $day > 22 ) || ( $month == 11 && $day < 22 ) ) { $setZodiac = "Scorpio"; }
                    elseif ( ( $month == 11 && $day > 21 ) || ( $month == 12 && $day < 22 ) ) { $setZodiac = "Sagittarius"; }
                    elseif ( ( $month == 12 && $day > 21 ) || ( $month == 1 && $day < 20 ) ) { $setZodiac = "Capricorn"; }
                    elseif ( ( $month == 1 && $day > 19 ) || ( $month == 2 && $day < 19 ) ) { $setZodiac = "Aquarius"; }
                    elseif ( ( $month == 2 && $day > 18 ) || ( $month == 3 && $day < 21 ) ) { $setZodiac = "Pisces"; }

                    return $setZodiac;
                }

            $inputDate = "2014-12-31";
            echo getZodiac($inputDate);

            ?>
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>Parašykite funkciją kuri priima kaip argumentą/paramėtrą skaičių ir grąžina panašų masyvą.<br>Pvz 4 --> [1, [2], [[3]], [[[4]]] ], 5 --> [1, [2], [[3]], [[[4]]], [[[[5]]]] ].</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            <?php
                // nothing to see here, move along
            ?>
        </p>
    </div>
</div>
</body>
</html>