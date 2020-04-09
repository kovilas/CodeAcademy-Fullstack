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
        <p>» Sukurti funkciją, kuri ima 3 parametrus, ir atspausdina juos h3 HTML tag‘'.</p>
    </div>
    <div class="card-body">
        <p class="card-text">
<?php
function parFunction($num1, $num2, $num3)
{
    echo "<h3>".$num1.$num2.$num3."</h3>";
}
parFunction(11, 22, 33);
?>
        </p>
    </div>
</div>
<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>» Sukurti funkciją, kuri ima 2 parametrus, juos sudaugina, ir grąžina rezultatą į iškvietimo vietą.</p>
    </div>
    <div class="card-body">
        <p class="card-text">
<?php
function multiFunction($multi1, $multi2)
    {
    return $multi1 * $multi2;
    }
$multi1=11;
$multi2=22;
    echo "Sandauga: ".multiFunction($multi1, $multi2)
?>
        </p>
    </div>
</div>
<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>» Sukurti funkciją, kuri ima 1 parametrą ir grąžiną teigiamą reikšmę. (Patikrinti tipą).</p>
    </div>
    <div class="card-body">
        <p class="card-text">
<?php
function absFunction($abs)
{
    $abs = abs($abs);
    echo "Teigiama reikšmė: $abs";
}

absFunction(-11);
?>
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>

<div class="card text-center mx-10 my-5">
    <div class="card-header">
        <p>uzduotis</p>
    </div>
    <div class="card-body">
        <p class="card-text">
            PHP skriptas
        </p>
    </div>
</div>




</body>
</html>
