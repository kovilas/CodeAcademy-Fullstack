<?php
function bthrow()
{
    return round(rand(1, 6), 0);
}

//Čia papildoma funkcija, kurios pagalba galima nustatyti kiek kauliukų mesti bei grąžinti išmestų kauliukų taškų sumą
function bthrowmulti($n)
{
    $images_path = "/img/";
    $bonesum = 0;
    for ($i = 1; $i < $n; $i++) {
        $bone = bthrow();
        $bonesum += $bone;
        $image = $images_path . $bone . ".svg";
        echo "<img src=$image>";
    }
    return $bonesum;
}

?>

<?php

        function throwone()
        {
            $images_path = "/img/";
            $bone = bthrow();
            $image = $images_path . $bone . ".svg";
            echo "<img src=$image>";
            return $bone;
        }

        function fivesix()
        {
            $dice = 0;
            while ($dice < 5) {
                $dice = throwone();
            }
        }

        echo fivesix();
        ?>

        <?php
        echo "<br>";

        $a = 6;
        $b = 6;
        while ($a + $b >= 5) {
            $a = throwone();
            $b = throwone();
            echo "<br>";

            if ($a == 6 && $b == 6) {
                echo "<h6>Laimėjote dviratį!</h6><br>";
                break;
            }
            if ($a + $b >= 5 && $a == $b && $a < 6) {
                echo "<h6>Laimėjote bilietą į kiną!</h6><br>";
                break;
            }
            if ($a + $b < 5) {
                echo "Jūs pralaimėjote :(<br>";
            }
        }
        ?>
