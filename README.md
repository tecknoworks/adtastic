[![Build Status](https://travis-ci.org/tecknoworks/adtastic.svg?branch=master)](https://travis-ci.org/tecknoworks/adtastic)

# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
	ruby 2.3.0

* System dependencies

* Configuration

* Database creation
	Database created through rails migrations `rake db:migrate`

* Database initialization

* How to run the test suite
	`bundle exec rspec` or `guard`

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
=======
ADTASTIC - advertising content manager
======================================

OVERVIEW
--------
Application used for managing media content shown on different displays or computers. It uses a main console from where a user can manage the content to be displayed on any display at any given time.

You can find UML diagrams [here](https://github.com/tecknoworks/adtastic/tree/master/Diagrams).

REQUIREMENTS
------------
* Javascript( front end )
* Database
* Backend (RUBY/PYTHON/...)

CODING STYLE
------------
Commit [style](http://chris.beams.io/posts/git-commit/) 

CURL TESTING
------------

CURL commands for user controller. All other controllers have the same format curl commands

GET		`curl localhost:3000/users.json`

PUT		`curl -X PUT -d "id=1&user[email]PUT=user7"	 http://localhost:3000/users.json`

POST	`curl -X POST -d "user[email]=POSTuser7&user[password]=Password7&user[user_type]=true" http://localhost:3000/users.json`

DELETE	`curl -X DELETE -d "id=96" http://localhost:3000/users.json`

CONTRIBUTORS
------------
* Messel Cristian
* Costea Razvan
* Stupariu Filip Tudor

code review [here](https://codeclimate.com/github/tecknoworks/adtastic/code?q=rating%3AA)
