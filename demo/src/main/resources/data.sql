insert into role (id, name) values (0, 'ROLE_ADMIN');
insert into role (id, name) values (1, 'ROLE_COMMON');

insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id) values ( nextval('user_id_seq_gen'), 'admin', 'admin', 'Admin', 'Addminic', '1253235', '2019-01-01', 0);
insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id) values ( nextval('user_id_seq_gen'), 'pera', '123', 'Pera', 'Peric', '1253235', '2019-02-01', 1);


insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'traktor', 'Opis oglasa', 'tools.jpg', 223000, 'tools', 2, 'Novi Sad', '2018-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'nesto', 'Opis oglasa', 'tools.jpg', 1230, 'tools', 2, 'Novi Sad', '2014-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'og', 'Opis oglasa', 'pets.jpg', 2220, 'pets', 2, 'Novi Sad', '2019-05-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'technology.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'zazar', 'Opis oglasa', 'technology.jpg', 4200, 'technology', 2, 'Novi Sad', '2005-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Nakit', 'Opis oglasa', 'accessories.jpg', 2000, 'accessories', 2, 'Novi Sad', '2016-11-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'laptop', 'Opis oglasa', 'books.jpg', 36000, 'technology', 2, 'Novi Sad', '2021-07-06');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'mis', 'Opis oglasa', 'technology.jpg', 5000, 'technology', 2, 'Novi Sad', '2022-05-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'tastatura', 'Opis oglasa', 'technology.jpg', 1500, 'technology', 2, 'Novi Sad', '2022-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Dzek rasel terijer', 'Opis oglasa', 'pets.jpg', 7000, 'pets', 2, 'Novi Sad', '2021-06-22');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'Nemacki ovcar', 'Opis oglasa', 'pets.jpg', 2000, 'pets', 2, 'Novi Sad', '2019-02-21');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-13');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-12-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-14');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-05-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-06-01');
insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'books.jpg', 2000, 'technology', 2, 'Novi Sad', '2019-02-01');


