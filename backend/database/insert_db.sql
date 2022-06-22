use freshfood;
#insert promotion
insert into promotion (name_promotion, create_date, end_date) values ("Ngày hội mua sắm", now(), '2022-12-2 22:22');
#inser voucher
insert into voucher (id_promotion, code_voucher, time_out) values (2, 'FFFEWW12', '120:12:12');
insert into voucher (id_promotion, code_voucher, time_out) values (2, 'PLGGTTT12', '400:12:12');
insert into voucher (id_promotion, code_voucher, time_out) values (2, 'FENBEZ24', '300:12:12');
insert into voucher (id_promotion, code_voucher, time_out) values (2, 'FGRR4F2', '200:12:12');
#insert voucher - user
insert into user_voucher (id_user, id_voucher, available) values (1, 2, true);
insert into user_voucher (id_user, id_voucher, available) values (1, 3, false);