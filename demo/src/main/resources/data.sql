insert into role (id, name) values (0, 'ROLE_ADMIN');
insert into role (id, name) values (1, 'ROLE_COMMON');

insert into user_app (id, username,password, first_name, last_name, phone_number, date_of_registration, role_id) values ( nextval('user_id_seq_gen'), 'pera', 'pera123', 'Pera', 'Peric', '1253235', '2019-01-01', 0);


insert into ad (id, name, description, url_photo, price, status, user_id, city, date_of_creation) values ( nextval('ad_id_seq_gen'), 'oglas1', 'Opis oglasa', 'link slike', 2000, 'technology', 1, 'Novi Sad', '2019-02-01');

