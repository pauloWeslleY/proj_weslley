<?php

require 'include/Slim-2.x/Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

// GET route
$app->get(
    '/',
    function () {

        require_once("view/index.php");

    }
);

$app->get(
    '/trabalhos',
    function () {

    	require_once("view/trabalhos.php");

    }
);

$app->get(
    '/',
    function () {

    	require_once("view/.php");

    }
);

$app->get(
    '/',
    function () {

    	require_once("view/.php");

    }
);

$app->get(
    '/',
    function () {

    	require_once("view/.php");

    }
);

$app->get(
    '/contatos',
    function () {

    	require_once("view/contatos.php");

    }
);

$app->run();

