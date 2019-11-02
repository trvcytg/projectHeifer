DROP DATABASE IF EXISTS `aprox1dyrdqq4t0m`;
CREATE DATABASE `aprox1dyrdqq4t0m`;
USE `aprox1dyrdqq4t0m`;

/* Create a table for all the burgers */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burgerName` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL DEFAULT false,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);
