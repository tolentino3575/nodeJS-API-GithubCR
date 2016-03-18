#Github Search Code Review
Javascript Week 1 Code Review: Modern JS Apps

##Author

This project was created by Erik Tolentino

##Description

This page will allow the user to enter the name of any Github username. The page will then display out that specific Github users public repositories, along with a description of it if provided, the date it was created, and who it was created by. The page will also display some bits of info about the user, such as how many followers they have, how many people they are followings, their name and email if provided, and their Github avatar.

##Known Bugs
If the user enters a username that doesn't exist (for example if they mashed a bunch of keys), the page will still display the 'repositories' and 'user info' columns, but they will be empty. Page will append info to the bottom of the page if a second username is entered.

#Setup

* Git clone this repository

* From terminal enter the following commands:
    npm init
    npm install
    bower init
    bower install
    gulp build
    gulp serve

* From bash terminal, enter "apachectl start" to start PhpMyAdmin
* In browser, type "localhost:8080/phpmyadmin"
* If prompted, both your username and password are "root"

* From PhpMyAdmin, import "shoes" and "shoes_test" databases included in php-shoestore-cr folder

* From mysql shell in terminal, enter "USE shoes;" to enter database

* From bash terminal, run "composer install" while in project root folder

* From bash terminal, enter "php -S localhost:8000" while in the web folder

* To view, type "localhost:8000" in browser

#Technologies Used:

* Php
* PhpMyAdmin
* Apache
* MySQL
* PHPUnit
* Silex
* Twig
* Atom
* Terminal
* GitHub
* Bootstrap
* HTML

#Legal

* MIT Licensed
* Copyright (c) 2016 Erik Tolentino
