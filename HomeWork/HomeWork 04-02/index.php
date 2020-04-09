<!DOCTYPE html>
<html lang="en">
<head>
    <title>Comment</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</head>
<body>
<div class="container">
    <div id="wrap">
        <div class="container">
            <h2>Leave a comment:</h2>
            <form action="submit.php" method="POST" class="mx-3 mt-3">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" name="Name">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email:</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" name="Email">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="exampleFormControlTextarea1" class="col-sm-2 col-form-label">Comment:</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="exampleFormControlTextarea1" name="Comment" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mx-auto my-2" name="submit">Submit</button>
                </div>
            </form>
        </div>
    <div id="second">
        <div class="row">
            <div class="col-md-2">
                <h3 class="second_heading"><b>Previous comments:</b></h3>
            </div>
            <div class="col-md-10">
            </div>
        </div>
    </div>
    <div id="middle">
        <?php
        $fileTXT = 'comments.txt';

        if(file_exists($fileTXT)) {
            // paimam JSON iš failo
            $jsonData = file_get_contents($fileTXT);

            // verčiam JSON į masyvą
            $arrData = json_decode($jsonData, true);

            // dabar galime vartoti comments.txt esančius duomenis kaip masyvą $arr_data
            //var_export($arrData);        // Test to see the array
            foreach ($arrData as $pullData):
                ?>
                <div class="card bg-light ml-4 mb-3 pl-2" style="max-width: 60rem;">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2" class="border bottom" style=" height: 10rem;">
                                <img src="https://img.icons8.com/color/96/000000/mime.png" class="img-thumbnail"/>
                            </div>
                            <div class="col-md-10">
                                <span class="text-primary font-weight-bold"><?php echo $pullData['Name'] ?></span> made a post
                                <br>
                                <?php echo $pullData['Time'] ?>
                            </div>
                        </div>
                        <div class="ml-1"><?php echo $pullData['Comment'] ?></div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php } ?>
    </div>
</div>
</body>
</html>