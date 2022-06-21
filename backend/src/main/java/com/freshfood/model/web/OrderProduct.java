package com.freshfood.model.web;

import java.sql.Date;
import java.sql.Timestamp;

public class OrderProduct extends ADate{
private Long id_order;//id order
private Long id_user;//id user
private Long id_voucher;//id voucher
private Long id_type_paymetn;//id type payment
private Date date_shipping;//date shipping
private Timestamp time_shipping;//time shipping
private double fee_shipping;// fee shipping

public Long getId_order() {
	return id_order;
}

public void setId_order(Long id_order) {
	this.id_order = id_order;
}

public Long getId_user() {
	return id_user;
}

public void setId_user(Long id_user) {
	this.id_user = id_user;
}

public Long getId_voucher() {
	return id_voucher;
}

public void setId_voucher(Long id_voucher) {
	this.id_voucher = id_voucher;
}

public Long getId_type_paymetn() {
	return id_type_paymetn;
}

public void setId_type_paymetn(Long id_type_paymetn) {
	this.id_type_paymetn = id_type_paymetn;
}

public Date getDate_shipping() {
	return date_shipping;
}

public void setDate_shipping(Date date_shipping) {
	this.date_shipping = date_shipping;
}

public Timestamp getTime_shipping() {
	return time_shipping;
}

public void setTime_shipping(Timestamp time_shipping) {
	this.time_shipping = time_shipping;
}

public double getFee_shipping() {
	return fee_shipping;
}

public void setFee_shipping(double fee_shipping) {
	this.fee_shipping = fee_shipping;
}

}
