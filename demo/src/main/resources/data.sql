insert into role (id, name) values (0, 'ROLE_ADMIN');
insert into role (id, name) values (1, 'ROLE_COMMON');

insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'admin', 'admin', 'Admin', 'Addminic', '1253235', '2019-01-01', 0, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'pera', '123', 'Pera', 'Peric', '1253235', '2019-02-01', 1, false);

insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'djura', '123', 'Djura', 'Djuric', '2253235', '2016-02-01', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'mika', '123', 'Mika', 'Mikic', '1243235', '2019-05-01', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'zika', '123', 'Zika', 'Zikic', '523235', '2019-02-11', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'tika', '123', 'Tika', 'Tikic', '533235', '2016-03-21', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'mane', '123', 'Mane', 'Manic', '123235', '2014-02-01', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'dane', '123', 'Dane', 'Danic', '54343567', '2020-05-23', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'zare', '123', 'Zare', 'Zaric', '8797854', '2020-05-04', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'kale', '123', 'Kale', 'Kalic', '86974643', '2018-02-21', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'darko', '123', 'Darko', 'Darkovic', '9734563', '2016-03-11', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'goran', '123', 'Goran', 'Goranovic', '865363', '2022-02-07', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'zarko', '123', 'Zarko', 'Zarkovic', '3466785', '2016-11-01', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'ana', '123', 'Ana', 'Anic', '754223', '2019-04-22', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'tamara', '123', 'Tamara', 'Tamaric', '543223', '2014-04-11', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'mia', '123', 'Mia', 'Mijic', '3242343', '2016-06-21', 1, false);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id, is_banned) values ( nextval('user_id_seq_gen'), 'jana', '123', 'Jana', 'Janic', '154352', '2014-05-01', 1, false);

insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Nakovanj', 'Opis oglasa', 'tools.jpg', 22300, 'tools', 17, 'Novi Sad', '2018-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Papagaj', 'Opis oglasa', 'pets.jpg', 1230, 'pets', 16, 'Novi Sad', '2014-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Doberman', 'Opis oglasa', 'pets.jpg', 2220, 'pets', 16, 'Novi Sad', '2019-05-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Zvucnik', 'Opis oglasa', 'technology.jpg', 2000, 'technology', 13, 'Novi Sad', '2020-11-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'zazar', 'Opis oglasa', 'technology.jpg', 4200, 'technology', 2, 'Novi Sad', '2005-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Nakit', 'Opis oglasa', 'accessories.jpg', 2000, 'accessories', 5, 'Novi Sad', '2016-11-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Usb3', 'Opis oglasa', 'technology.jpg', 7000, 'technology', 8, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'laptop', 'Opis oglasa', 'technology.jpg', 36000, 'technology', 6, 'Novi Sad', '2021-07-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'mis', 'Opis oglasa', 'technology.jpg', 5000, 'technology', 7, 'Novi Sad', '2022-05-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'tastatura', 'Opis oglasa', 'technology.jpg', 1500, 'technology', 9, 'Novi Sad', '2022-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Usb2', 'Opis oglasa', 'technology.jpg', 5000, 'technology', 9, 'Novi Sad', '2015-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Usb', 'Opis oglasa', 'technology.jpg', 7000, 'technology', 10, 'Novi Sad', '2018-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Fox Terijer', 'Opis oglasa', 'pets.jpg', 5300, 'pets', 10, 'Novi Sad', '2020-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Dzek rasel terijer', 'Opis oglasa', 'pets.jpg', 7000, 'pets', 10, 'Novi Sad', '2021-06-22');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Roman', 'Opis oglasa', 'books.jpg', 1100, 'books', 11, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Nemacki ovcar', 'Opis oglasa', 'pets.jpg', 22200, 'pets', 6, 'Novi Sad', '2022-02-21');

insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Macka1', 'Opis oglasa', 'pets.jpg', 1000, 'pets', 2, 'Novi Sad', '2019-02-21');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Macka2', 'Opis oglasa', 'pets.jpg', 600, 'pets', 3, 'Novi Sad', '2019-04-21');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Macka3', 'Opis oglasa', 'pets.jpg', 700, 'pets', 6, 'Novi Sad', '2019-05-11');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Macka4', 'Opis oglasa', 'pets.jpg', 300, 'pets', 5, 'Novi Sad', '2019-02-24');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Macka5', 'Opis oglasa', 'pets.jpg', 11200, 'pets', 12, 'Novi Sad', '2018-02-25');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Macka6', 'Opis oglasa', 'pets.jpg', 8700, 'pets', 11, 'Novi Sad', '2019-02-26');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Macka7', 'Opis oglasa', 'pets.jpg', 2500, 'pets', 10, 'Novi Sad', '2017-03-21');


insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Knjiga1', 'Opis oglasa', 'books.jpg', 4500, 'books', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Knjiga2', 'Opis oglasa', 'books.jpg', 4500, 'books', 3, 'Novi Sad', '2019-02-13');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Knjiga3', 'Opis oglasa', 'books.jpg', 4300, 'books', 6, 'Novi Sad', '2019-12-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Knjiga4', 'Opis oglasa', 'books.jpg', 1200, 'books', 11, 'Novi Sad', '2019-02-14');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Knjiga5', 'Opis oglasa', 'books.jpg', 5600, 'books', 4, 'Novi Sad', '2019-05-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Knjiga6', 'Opis oglasa', 'books.jpg', 1200, 'books', 2, 'Novi Sad', '2019-06-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Knjiga7', 'Opis oglasa', 'books.jpg', 8600, 'books', 5, 'Novi Sad', '2019-02-01');

insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Fotelja', 'Opis oglasa', 'furniture.jpg', 88700, 'furniture', 8, 'Novi Sad', '2022-02-15');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Komoda', 'Opis oglasa', 'furniture.jpg', 75400, 'furniture', 6, 'Novi Sad', '2021-11-21');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Sto', 'Opis oglasa', 'furniture.jpg', 34500, 'furniture', 2, 'Novi Sad', '2022-05-09');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Stolica', 'Opis oglasa', 'furniture.jpg', 75300, 'furniture', 3, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Krevet', 'Opis oglasa', 'furniture.jpg', 34300, 'furniture', 4, 'Novi Sad', '2013-04-02');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Tepih', 'Opis oglasa', 'furniture.jpg', 24300, 'furniture', 5, 'Novi Sad', '2012-05-04');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Prozor', 'Opis oglasa', 'furniture.jpg', 9800, 'furniture', 3, 'Novi Sad', '2011-02-21');

insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Game1', 'Opis oglasa', 'games.jpg', 7000, 'games', 3, 'Nis', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Game2', 'Opis oglasa', 'games.jpg', 5000, 'games', 14, 'Nis', '2016-02-05');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Game3', 'Opis oglasa', 'games.jpg', 4500, 'games', 15, 'Nis', '2015-01-02');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Wow', 'Opis oglasa', 'games.jpg', 7700, 'games', 8, 'Nis', '2014-01-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Dota', 'Opis oglasa', 'games.jpg', 8800, 'games', 7, 'Nis', '2012-05-07');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Csgo', 'Opis oglasa', 'games.jpg', 9000, 'games', 5, 'Nis', '2020-02-06');


insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Sal', 'Opis oglasa', 'clothing.jpg', 4000, 'clothing', 2, 'Sabac', '2012-02-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Majica', 'Opis oglasa', 'clothing.jpg', 6500, 'clothing', 11, 'Pirot', '2020-06-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Farmerice', 'Opis oglasa', 'clothing.jpg', 2300, 'clothing', 12, 'Sabac', '2020-11-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Pantalone', 'Opis oglasa', 'clothing.jpg', 4430, 'clothing', 13, 'Pirot', '2020-04-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Jakna', 'Opis oglasa', 'clothing.jpg', 12200, 'clothing', 7, 'Sabac', '2017-02-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Patike', 'Opis oglasa', 'clothing.jpg', 66600, 'clothing', 9, 'Pirot', '2018-02-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Stikle', 'Opis oglasa', 'clothing.jpg', 21200, 'clothing', 8, 'Pirot', '2021-04-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Bela majica', 'Opis oglasa', 'clothing.jpg', 4200, 'clothing', 16, 'Sabac', '2020-02-11');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Zuta majica', 'Opis oglasa', 'clothing.jpg', 3100, 'clothing', 17, 'Pirot', '2016-01-08');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Crvena majica', 'Opis oglasa', 'clothing.jpg', 7400, 'clothing', 7, 'Sabac', '2018-09-09');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Zelena majica', 'Opis oglasa', 'clothing.jpg', 5300, 'clothing', 4, 'Pirot', '2018-07-03');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Plava majica', 'Opis oglasa', 'clothing.jpg', 6500, 'clothing', 3, 'Sabac', '2019-02-05');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Crna majica', 'Opis oglasa', 'clothing.jpg', 5500, 'clothing', 2, 'Pirot', '2017-01-11');

insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Privezak', 'Opis oglasa', 'accessories.jpg', 100, 'accessories', 2, 'Pirot', '2016-01-11');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Magnet', 'Opis oglasa', 'accessories.jpg', 200, 'accessories', 2, 'Pirot', '2014-01-11');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Narukvica', 'Opis oglasa', 'accessories.jpg', 300, 'accessories', 2, 'Pirot', '2013-01-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Olovka', 'Opis oglasa', 'accessories.jpg', 200, 'accessories', 2, 'Pirot', '2012-01-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Hemijska', 'Opis oglasa', 'accessories.jpg', 200, 'accessories', 2, 'Pirot', '2018-01-12');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Gumica', 'Opis oglasa', 'accessories.jpg', 120, 'accessories', 2, 'Sabac', '2016-01-26');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Bojica', 'Opis oglasa', 'accessories.jpg', 50, 'accessories', 2, 'Pirot', '2017-03-21');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Autic', 'Opis oglasa', 'accessories.jpg', 1220, 'accessories', 2, 'Sabac', '2016-04-22');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Igracka', 'Opis oglasa', 'accessories.jpg', 310, 'accessories', 2, 'Valjevo', '2017-05-23');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Sat', 'Opis oglasa', 'accessories.jpg', 5430, 'accessories', 2, 'Pirot', '2022-06-24');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Karte', 'Opis oglasa', 'accessories.jpg', 1230, 'accessories', 2, 'Pirot', '2021-07-25');

insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Fudbalska lopta', 'Opis oglasa', 'sports.jpg', 6600, 'sports', 2, 'Valjevo', '2021-07-25');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Kosarkaska lopta', 'Opis oglasa', 'sports.jpg', 7700, 'sports', 2, 'Beograd', '2022-01-21');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Odbojkaska lopta', 'Opis oglasa', 'sports.jpg', 4400, 'sports', 2, 'Beograd', '2020-08-22');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Rukometna lopta', 'Opis oglasa', 'sports.jpg', 5500, 'sports', 2, 'Valjevo', '2020-06-25');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Traka', 'Opis oglasa', 'sports.jpg', 2342, 'sports', 2, 'Beograd', '2020-04-27');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Kopacke', 'Opis oglasa', 'sports.jpg', 5342, 'sports', 2, 'Beograd', '2011-05-25');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Ragbi lopta', 'Opis oglasa', 'sports.jpg', 3234, 'sports', 2, 'Beograd', '2012-01-15');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Oprema', 'Opis oglasa', 'sports.jpg', 5000, 'sports', 2, 'Valjevo', '2013-02-15');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Oprema2', 'Opis oglasa', 'sports.jpg', 6000, 'sports', 2, 'Beograd', '2014-10-12');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Oprema3', 'Opis oglasa', 'sports.jpg', 7000, 'sports', 2, 'Valjevo', '2016-10-13');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Oprema4', 'Opis oglasa', 'sports.jpg', 12000, 'sports', 2, 'Beograd', '2018-10-14');

insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Cekic', 'Opis oglasa', 'tools.jpg', 2200, 'tools', 2, 'Beograd', '2018-10-14');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Ekser', 'Opis oglasa', 'tools.jpg', 3200, 'tools', 2, 'Beograd', '2018-10-14');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Kljuc', 'Opis oglasa', 'tools.jpg', 5300, 'tools', 2, 'Beograd', '2018-10-14');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Sraf', 'Opis oglasa', 'tools.jpg', 1100, 'tools', 2, 'Beograd', '2018-10-14');


insert into bidding (id, username, current_price, ad_id, date_of_creation) values ( nextval('bidding_id_seq_gen'), 'pera', 50, 1, '2022-09-12');
insert into bidding (id, username, current_price, ad_id, date_of_creation) values ( nextval('bidding_id_seq_gen'), 'mika', 50, 66, '2022-09-12');
insert into bidding (id, username, current_price, ad_id, date_of_creation) values ( nextval('bidding_id_seq_gen'), 'zika', 60, 66, '2022-09-12');