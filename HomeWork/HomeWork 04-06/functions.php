<?php

// function to get results from global results history file
if (function_exists('getCalc') == false) {
    function getResultsFromFile()
    {
        $results = [];
        if (file_exists(RESULTS_FILE)) {
            $results = file_get_contents(RESULTS_FILE);
            $results = json_decode($results, true) ?? [];
        }
        return $results;
    }
}

