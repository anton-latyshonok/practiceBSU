CREATE TABLE `USER` (
	`USER_ID` INT NOT NULL AUTO_INCREMENT,
	`NAME` varchar(255) NOT NULL,
	PRIMARY KEY (`USER_ID`)
);

CREATE TABLE `POST` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`USER_ID` INT NOT NULL,
	`DESCRIPTION` varchar(255) NOT NULL,
	`CREATED_AT` DATETIME NOT NULL,
	`PHOTO_LINK` varchar(255) NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `TAGS` (
	`ID` INT(255) NOT NULL AUTO_INCREMENT,
	`POST_ID` INT NOT NULL,
	`DESCRIPTION` varchar(255) NOT NULL,
	PRIMARY KEY (`ID`)
);

ALTER TABLE `POST` ADD CONSTRAINT `POST_fk0` FOREIGN KEY (`USER_ID`) REFERENCES `USER`(`USER_ID`);

ALTER TABLE `TAGS` ADD CONSTRAINT `TAGS_fk0` FOREIGN KEY (`POST_ID`) REFERENCES `POST`(`ID`);

--filling out--
insert into `USER` (name) values ('Roma Chaevich');
insert into `USER` (name) values ('Sasha Shulga');
insert into `USER` (name) values ('Valera Filipchik');
insert into `USER` (name) values ('Popko Gena');
insert into `USER` (name) values ('Krivyla Andrei');
insert into `USER` (name) values ('Arseniy Mironov');
insert into `USER` (name) values ('Anya Albertovna');
insert into `USER` (name) values ('Galina Filipova');
insert into `USER` (name) values ('Simonovich Pavel');
insert into `USER` (name) values ('Ustrenov Jenya');

select * from USER;
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.CREATED_AT, POST.PHOTO_LINK) values (1,'HELLO1','photo1.jpg', '2020-03-01 23:59:59');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.CREATED_AT, POST.PHOTO_LINK) values (2,'GOODNIGHT2','photo2.jpg', '2020-03-01 10:10:10');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.CREATED_AT, POST.PHOTO_LINK) values (3,'HELLO3','photo3.jpg', '2020-03-03 01:04:35');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.CREATED_AT, POST.PHOTO_LINK) values (4,'GOODNIGHT4','photo4.jpg', '2020-03-02 20:08:50');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.CREATED_AT, POST.PHOTO_LINK) values (5,'HELLO5','photo5.jpg', '2020-03-01 15:15:15');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.PHOTO_LINK) values (6,'GOOD6','photo6.jpg');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.PHOTO_LINK) values (7,'HELLO7','photo7.jpg');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.PHOTO_LINK) values (8,'GOODMORNIN8','photo8.jpg');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.PHOTO_LINK) values (9,'HELLO9','photo9.jpg');
insert into POST (POST.USER_ID, POST.DESCRIPTION, POST.PHOTO_LINK) values (10,'GOODMORNING10','photo10.jpg');


insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (1,'DESC1');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (1,'DESC2');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (2,'DESC3');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (2,'DESC2');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (3,'DESC3');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (3,'DESC4');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (4,'POST4');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (4,'4');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (5,'WHAT?');
insert into TAGS (TAGS.POST_ID, TAGS.DESCRIPTION) values (5,'4');

