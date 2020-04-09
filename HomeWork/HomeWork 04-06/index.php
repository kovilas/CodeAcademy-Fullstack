<?php

require_once 'boot.php';

?>

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
      <div class="row">
        <div class="col-md-6 mx-auto calculate-form">
          <div class="card card-body text-center mt-5">
            <h1 class="heading display-5 pb-3">Calculator</h1>

<!-- FORMA -->

            <form id="calc-form" method="GET" action="submit.php">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Value 1</span>
                            </div>
                            <input
                                    name="number1"
                                    type="number"
                                    class="form-control"
                                    id="inputValue1"
                            />
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Operation</span>
                            </div>
                                <select name="operation" class="form-control">
                                    <option value="plus">+</option>
                                    <option value="minus">-</option>
                                    <option value="multi">*</option>
                                    <option value="div">/</option>
                                </select>
                        </div>
                    </div>

                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Value 2</span>
                        </div>
                        <input
                                name="number2"
                                type="number"
                                class="form-control"
                        />
                    </div>
                </div>

              <div class="form-group">
                <input
                        name="submit"
                        type="submit"
                        value="Calculate"
                        class="btn btn-dark btn-block"
                />
              </div>
            </form>

<!-- RESULTS -->
              <?php
              $resultsFileData = getResultsFromFile();


              foreach ($resultsFileData as $fetch):
              ?>
            <div id="result">
              <h5>Results</h5>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                  </div>
                  <input
                          placeholder="<?php echo $fetch['number1']?>"
                          type="number"
                          class="form-control"
                          id="resultsHistorical"
                          disabled
                    />
                </div>
              </div>
            </div>
              <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>