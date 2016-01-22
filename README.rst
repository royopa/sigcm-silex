Silex Skeleton
==============

## Features

### System Stuff

- Ubuntu 14.04 LTS (Trusty Tahr)
- PHP 5.6
- Ruby 2.2.x
- Vim
- Git
- cURL
- GD and Imagick
- Composer
- Beanstalkd
- Node
- NPM
- Mcrypt

### Database Stuff
- MySQL
- PostgreSQL
- SQLite

### Caching Stuff

- Redis
- Memcache and Memcached

### Node Stuff

- Grunt
- Bower
- Yeoman
- Gulp
- Browsersync
- PM2

### Laravel Stuff

- Laravel Installer
- Laravel Envoy
- Blackfire Profiler

### Other Useful Stuff

- No Internet connection required
- PHP Errors turned on
- Laravel and WordPress ready
- Operating System agnostic
- Goodbye XAMPP / WAMP
- New Vagrant version? Update worry free. ScotchBox is very reliable with a lesser chance of breaking with various updates
- Super easy database access and control
- [Virtual host ready](https://scotch.io/bar-talk/announcing-scotch-box-2-0-our-dead-simple-vagrant-lamp-stack-improved#multiple-domains-(virtual-hosts))
- PHP short tags turned on
- H5BP’s server configs
- MIT License



## Get Started

* Download and Install [Vagrant][3]
* Download and Install [VirtualBox][4]
* Clone the Scotch Box [GitHub Repository](https://github.com/scotch-io/scotch-box)
* Run ``` vagrant up ```
* Access Your Project at  [http://192.168.33.10/][14]

## Basic Vagrant Commands


### Start or resume your server
```bash
vagrant up
```

### Pause your server
```bash
vagrant suspend
```

### Delete your server
```bash
vagrant destroy
```

### SSH into your server
```bash
vagrant ssh
```



## Database Access

### MySQL 

- Hostname: localhost or 127.0.0.1
- Username: root
- Password: root
- Database: scotchbox

### PostgreSQL

- Hostname: localhost or 127.0.0.1
- Username: root
- Password: root
- Database: scotchbox
- Port: 5432


### MongoDB

- Hostname: localhost
- Database: scotchbox
- Port: 27017


## SSH Access

- Hostname: 127.0.0.1:2222
- Username: vagrant
- Password: vagrant

## Mailcatcher

Just do:

```
vagrant ssh
mailcatcher --http-ip=0.0.0.0
```

Then visit:

```
http://192.168.33.10:1080
```


## Updating the Box

Although not necessary, if you want to check for updates, just type:

```bash
vagrant box outdated
```

It will tell you if you are running the latest version or not, of the box. If it says you aren't, simply run:

```bash
vagrant box update
```


## Setting a Hostname

If you're like me, you prefer to develop at a domain name versus an IP address. If you want to get rid of the some-what ugly IP address, just add a record like the following example to your computer's host file.

```bash
192.168.33.10 whatever-i-want.local
```

Or if you want "www" to work as well, do:

```bash
192.168.33.10 whatever-i-want.local www.whatever-i-want.local
```

Technically you could also use a Vagrant Plugin like [Vagrant Hostmanager][15] to automatically update your host file when you run Vagrant Up. However, the purpose of Scotch Box is to have as little dependencies as possible so that it's always working when you run "vagrant up".


Welcome to the Silex Skeleton - a fully-functional Silex application that you
can use as the skeleton for your new applications.

This document contains information on how to start using the Silex Skeleton.

Creating a Silex Application
----------------------------

Silex uses `Composer`_ to ease the creation of a new project:

.. code-block:: console

$ composer create-project fabpot/silex-skeleton path/to/install

Composer will create a new Silex project under the `path/to/install` directory.

Browsing the Demo Application
-----------------------------

Congratulations! You're now ready to use Silex.

To see a real-live Silex page in action, start the PHP built-in web server with
command:

.. code-block:: console

$ cd path/to/install
$ php -S localhost:8888 -t web/ web/index_dev.php

Then, browse to http://localhost:8888/.

Getting started with Silex
--------------------------

This distribution is meant to be the starting point for your Silex applications.

A great way to start learning Silex is via the `Documentation`_, which will
take you through all the features of Silex.

What's inside?
---------------

The Silex Skeleton is configured with the following service providers:

* `UrlGeneratorServiceProvider`_ - Provides a service for generating URLs for
named routes.

* `ValidatorServiceProvider`_ - Provides a service for validating data. It is
most useful when used with the FormServiceProvider, but can also be used
standalone.

* `ServiceControllerServiceProvider`_ - As your Silex application grows, you
may wish to begin organizing your controllers in a more formal fashion.
Silex can use controller classes out of the box, but with a bit of work,
your controllers can be created as services, giving you the full power of
dependency injection and lazy loading.

* `TwigServiceProvider`_ - Provides integration with the Twig template engine.

* `WebProfilerServiceProvider`_ - Enable the Symfony web debug toolbar and
the Symfony profiler in your Silex application when developing.

* `MonologServiceProvider`_ - Enable logging in the development environment.

Read the `Providers`_ documentation for more details about Silex Service
Providers.

Enjoy!

.. _Composer: http://getcomposer.org/
.. _Documentation: http://silex.sensiolabs.org/documentation
.. _UrlGeneratorServiceProvider: http://silex.sensiolabs.org/doc/providers/url_generator.html
.. _ValidatorServiceProvider: http://silex.sensiolabs.org/doc/providers/validator.html
.. _ServiceControllerServiceProvider: http://silex.sensiolabs.org/doc/providers/service_controller.html
.. _TwigServiceProvider: http://silex.sensiolabs.org/doc/providers/twig.html
.. _WebProfilerServiceProvider: http://github.com/silexphp/Silex-WebProfiler
.. _MonologServiceProvider: http://silex.sensiolabs.org/doc/providers/monolog.html
.. _Providers: http://silex.sensiolabs.org/doc/providers.html
