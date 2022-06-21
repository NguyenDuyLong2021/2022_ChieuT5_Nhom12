create database freshfood;
use freshfood;
-- create table user
CREATE TABLE user (
    id_user BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(100) NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(255) NULL,
    password_user VARCHAR(100) NOT NULL,
    is_delete BOOLEAN DEFAULT FALSE,
    create_date TIMESTAMP NOT NULL,
    modified_date TIMESTAMP,
    id_groud_role INT
);
-- create table cart 
CREATE TABLE cart (
    id_cart bigint PRIMARY KEY AUTO_INCREMENT,
    id_user bigint NOT NULL,
    create_date timestamp NOT NULL,
    modified_date timestamp NOT NULL
);
-- create table cart item 
CREATE TABLE cart_item (
    id_cart_item bigint PRIMARY KEY AUTO_INCREMENT,
    id_cart bigint NOT NULL,
    id_product bigint NOT NULL,
    number_product int NOT NULL
);
CREATE TABLE product (
    id_product bigint PRIMARY KEY AUTO_INCREMENT,
    name_product VARCHAR(100) NOT NULL,
    decripstion TEXT,
    price DOUBLE,
    thumnail VARCHAR(255),
    id_category bigint NOT NULL,
    available BOOLEAN DEFAULT TRUE,
    create_date timestamp NOT NULL,
    modified_date timestamp ,
    createBy VARCHAR(255),
    modifiedBy VARCHAR(255)
);
CREATE TABLE image_product (
    id_image_product bigint PRIMARY KEY AUTO_INCREMENT,
    id_product bigint NOT NULL,
    image VARCHAR(255)
);
CREATE TABLE category (
    id_category bigint PRIMARY KEY AUTO_INCREMENT,
    code_category char(20) not null,
    name_category VARCHAR(100),
    create_date timestamp NOT NULL,
    modified_date timestamp 
);
CREATE TABLE promotion (
    id_promotion bigint PRIMARY KEY AUTO_INCREMENT,
    name_promotion VARCHAR(255),
    create_date timestamp NOT NULL,
    end_date timestamp NOT NULL,
    modified_date timestamp 
);
CREATE TABLE voucher (
    id_voucher bigint PRIMARY KEY AUTO_INCREMENT,
    id_promotion bigint NOT NULL,
    code_voucher CHAR(255) NOT NULL,
    time_out TIME NOT NULL
);
CREATE TABLE order_product (
    id_order bigint PRIMARY KEY AUTO_INCREMENT,
    id_user bigint NOT NULL,
    id_voucher bigint NOT NULL,
    id_type_payment bigint NOT NULL,
    date_shipping timestamp NOT NULL,
    time_shipping TIME NOT NULL,
    fee_shipping DOUBLE NOT NULL,
    create_date timestamp NOT NULL,
    modified_date timestamp
);
CREATE TABLE order_item (
    id_order_item BIGINT PRIMARY KEY AUTO_INCREMENT,
    id_order BIGINT NOT NULL,
    id_product BIGINT NOT NULL,
    number_product INT NOT NULL
);
CREATE TABLE user_voucher (
    id_user_voucher bigint PRIMARY KEY AUTO_INCREMENT,
    id_user bigint NOT NULL,
    id_voucher bigint NOT NULL,
    available BOOLEAN DEFAULT TRUE
);
CREATE TABLE type_payment (
    id_type_payment bigint PRIMARY KEY AUTO_INCREMENT,
    name_payment VARCHAR(100),
    create_date timestamp NOT NULL,
    modified_date timestamp 
);

-- add foreign keys
alter table cart add constraint fk_id_user foreign key (id_user) references user(id_user);
alter table cart_item add constraint fk_id_cart foreign key (id_cart) references cart(id_cart);
alter table cart_item add constraint fk_id_product foreign key (id_product) references product(id_product); 
alter table product add constraint fk_id_category foreign key (id_category) references category(id_category);
alter table image_product add constraint fk_id_product_image foreign key (id_product) references product(id_product);
alter table voucher add constraint fk_id_promotion foreign key (id_promotion) references promotion(id_promotion);
alter table order_product add constraint fk_id_user_product foreign key (id_user) references user(id_user);
alter table order_product add constraint fk_id_voucher foreign key (id_voucher) references voucher(id_voucher);
alter table order_product add constraint fk_id_type_payment foreign key (id_type_payment) references type_payment(id_type_payment);
alter table user_voucher add constraint fk_id_user_voucher foreign key (id_user) references user(id_user);
alter table user_voucher add constraint fk_id_voucher_voucher foreign key (id_voucher) references voucher(id_voucher);
alter table order_item add constraint fk_id_order foreign key (id_order) references order_product(id_order);
alter table order_item add constraint fk_id_product_oi foreign key (id_product) references product(id_product);