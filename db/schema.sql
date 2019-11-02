DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

/* Create a table for all the burgers */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL DEFAULT false,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);
