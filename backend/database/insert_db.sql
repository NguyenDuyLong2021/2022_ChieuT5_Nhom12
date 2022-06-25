use freshfood;

#inser user
insert into user (first_name, last_name, avatar, phone_number, email, address, password_user, is_delete) 
values('A', 'Trần Văn', 'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'
, '033333333', 'e@gmail.com', 'Phường 1 quận 2 thành phố 4', 'kkkeee', 0
);
insert into user (first_name, last_name, avatar, phone_number, email, address, password_user, is_delete) 
values('B', 'Trần Văn', 'https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png'
, '033333333', 'e1gmail.com', 'Phường 1 quận 2 thành phố 4', 'kkkeee', 0
);
#insert unit
insert into unit (code_unit, name_unit) values ("Kg", "Kg");
insert into unit (code_unit, name_unit) values ("Thung", "Thùng");
insert into unit (code_unit, name_unit) values ("Bo", "Bó");
#inser cart 
insert into cart (id_user) values(1);
insert into cart (id_user) values(2);
#insert category
insert into category (code_category, name_category)values ("GAO", "Gạo");
insert into category (code_category, name_category)values ("HAISAN", "Hải sản");
insert into category (code_category, name_category)values ("DOUONG", "Đồ uống");
insert into category (code_category, name_category)values ("THIT","Thịt");
insert into category (code_category, name_category)values ("RAUCUQUA","Rau củ quả");
#insert product
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Gạo an an","Gạo dẻo thơm ngon",500000,"/assests/img/thumbnailProduct/gaoAnAn.jpg",1,1);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Tôm sú lớn","Tôm xuất khẩu",500000,"/assests/img/thumbnailProduct/tomSu.jpg",2,1);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Cocacola","Nước giải khát bán ế",300000,"/assests/img/thumbnailProduct/cocacola.jpg",3,2);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Thịt bó bắp","Thịt bó bắp Mỹ",200000,"/assests/img/thumbnailProduct/thitBoBapMy.jpg",4,1);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Bia Budweiser","Bia Đức lên men",500000,"/assests/img/thumbnailProduct/biaBubweiser.jpg",3,2);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Thịt heo","Thịt heo sạch không chất tạo nạc",100000,"/assests/img/thumbnailProduct/thitHeo.jpg",4,1);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Cá ngừ","Cá ngừ đánh băt bắng lưới",300000,"/assests/img/thumbnailProduct/caNgu.jpg",2,1);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Cà rốt","Cà rốt Đà Lạt",50000,"/assests/img/thumbnailProduct/caRot.jpg",5,1);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Xà lách","Xà lách siêu sạch",10000,"/assests/img/thumbnailProduct/xaLach.jpg",5,3);
insert into product (name_product,decripstion,price,thumnail,id_category, id_unit) values ("Táo","Táo siêu ngọt",50000,"/assests/img/thumbnailProduct/tao.jpg",5,1);
#inser cart item
insert into cart_item (id_cart, id_product, number_product) values (1,5, 1);
insert into cart_item (id_cart, id_product, number_product) values (1,6, 1);
#insert image product
insert into image_product (id_product, image) values (1, "/assests/img/detailImgProducts/doUong/cocacola/1.jpg");
insert into image_product (id_product, image) values (1, "/assests/img/detailImgProducts/doUong/cocacola/2.jpg");
insert into image_product (id_product, image) values (1, "/assests/img/detailImgProducts/doUong/cocacola/3.jpg");
insert into image_product (id_product, image) values (2, "/assests/img/detailImgProducts/gao/gaoAnAn/1.png");
insert into image_product (id_product, image) values (2, "/assests/img/detailImgProducts/gao/gaoAnAn/2.jpg");
insert into image_product (id_product, image) values (2, "/assests/img/detailImgProducts/gao/gaoAnAn/3.png");
insert into image_product (id_product, image) values (3, "/assests/img/detailImgProducts/haiSan/tomSu/1.jpg");
insert into image_product (id_product, image) values (3, "/assests/img/detailImgProducts/haiSan/tomSu/2.jpg");
insert into image_product (id_product, image) values (3, "/assests/img/detailImgProducts/haiSan/tomSu/3.jpg");
insert into image_product (id_product, image) values (4, "/assests/img/detailImgProducts/thit/thitBoBap/1.jpg");
insert into image_product (id_product, image) values (4, "/assests/img/detailImgProducts/thit/thitBoBap/2.jpg");
insert into image_product (id_product, image) values (4, "/assests/img/detailImgProducts/thit/thitBoBap/3.jpg");
insert into image_product (id_product, image) values (5, "/assests/img/detailImgProducts/doUong/biaBudweiser/1.jpg");
insert into image_product (id_product, image) values (5, "/assests/img/detailImgProducts/doUong/biaBudweiser/2.jpg");
insert into image_product (id_product, image) values (5, "/assests/img/detailImgProducts/doUong/biaBudweiser/3.jpg");
insert into image_product (id_product, image) values (6, "/assests/img/detailImgProducts/haiSan/caNgu/1.jpg");
insert into image_product (id_product, image) values (6, "/assests/img/detailImgProducts/haiSan/caNgu/2.png");
insert into image_product (id_product, image) values (6, "/assests/img/detailImgProducts/haiSan/caNgu/3.jpg");
insert into image_product (id_product, image) values (7, "/assests/img/detailImgProducts/thit/thitHeo/1.jpg");
insert into image_product (id_product, image) values (7, "/assests/img/detailImgProducts/thit/thitHeo/2.jpg");
insert into image_product (id_product, image) values (7, "/assests/img/detailImgProducts/thit/thitHeo/3.jpg");
insert into image_product (id_product, image) values (8, "/assests/img/detailImgProducts/rauCuQua/caRot/1.jpg");
insert into image_product (id_product, image) values (8, "/assests/img/detailImgProducts/rauCuQua/caRot/2.jpg");
insert into image_product (id_product, image) values (8, "/assests/img/detailImgProducts/rauCuQua/caRot/3.jpg");
insert into image_product (id_product, image) values (9, "/assests/img/detailImgProducts/rauCuQua/tao/1.jpg");
insert into image_product (id_product, image) values (9, "/assests/img/detailImgProducts/rauCuQua/tao/2.png");
insert into image_product (id_product, image) values (9, "/assests/img/detailImgProducts/rauCuQua/tao/3.jpg");
insert into image_product (id_product, image) values (10, "/assests/img/detailImgProducts/rauCuQua/xaLach/1.jpg");
insert into image_product (id_product, image) values (10, "/assests/img/detailImgProducts/rauCuQua/xaLach/2.jpg");
insert into image_product (id_product, image) values (10, "/assests/img/detailImgProducts/rauCuQua/xaLach/3.png");
#insert promotion
insert into promotion (name_promotion, create_date, end_date) values ("Ngày hội mua sắm", now(), '2022-12-2 22:22');
#inser voucher
insert into voucher (id_promotion, code_voucher, time_out) values (1, 'FFFEWW12', '120:12:12');
insert into voucher (id_promotion, code_voucher, time_out) values (1, 'PLGGTTT12', '400:12:12');
insert into voucher (id_promotion, code_voucher, time_out) values (1, 'FENBEZ24', '300:12:12');
insert into voucher (id_promotion, code_voucher, time_out) values (1, 'FGRR4F2', '200:12:12');
#insert voucher - user
insert into user_voucher (id_user, id_voucher, available) values (1, 2, true);
insert into user_voucher (id_user, id_voucher, available) values (1, 3, false);
#inser type payment 
insert into type_payment (name_payment) values ("Thanh toán tiền mặt");
insert into type_payment (name_payment) values ("Thanh toán bằng ví điện tử");
insert into type_payment (name_payment) values ("Thanh toán thẻ ngân hàng");
insert into type_payment (name_payment) values ("Thanh toán bằng quẹt thẻ");
