<?php

session_start();

// session payload
if (!isset($_SESSION['results'])) {
    $_SESSION['results'] = [];
}

// defining and requiring standard configs and functions
define('ROOT_PATH', dirname(__FILE__));
define('RESULTS_FILE', ROOT_PATH . '/results.txt'); // global results history, just for checking

require_once ROOT_PATH . '/functions.php';

// default timezone
date_default_timezone_set('EET');