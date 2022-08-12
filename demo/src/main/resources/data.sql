insert into role(id, name) values (0, 'ROLE_ADMIN');
insert into role(id, name) values (1, 'ROLE_COMMON');

insert into user_app (id, username,password, first_name, last_name, role_id) values ( nextval('user_id_seq_gen'), 'pera', 'pera123', 'Pera', 'Peric', 0);