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
    '/trabalho',
    function () {

    	require_once("view/trabalho.php");

    }
);

$app->get(
    '/cv',
    function () {

    	require_once("view/cv.php");

    }
);

$app->get(
    '/contatos',
    function () {

       require_once("view/contatos.php");

    }
);

$app->get(
   '/acupuntura',
   function () {

      require_once("view/trab_acupuntura.php");

   }
);

$app->get(
    '/orlando_city',
    function () {

       require_once("view/trab_orlando.php");

    }
);

$app->get(
    '/onepage',
    function () {

       require_once("view/trab_onepage.php");

    }
);

$app->get(
    '/midia',
    function () {

       require_once("view/trab_midia.php");

    }
);

$app->get(
    '/fashion',
    function () {

       require_once("view/trab_fashion.php");

    }
);

$app->get(
    '/restaurants',
    function () {

       require_once("view/trab_restaurants.php");

    }
);


$app->run();

