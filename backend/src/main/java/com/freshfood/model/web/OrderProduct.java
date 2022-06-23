package com.freshfood.model.web;

import java.sql.Time;
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class OrderProduct extends ADate {
	private Long id_order;// id order
	private Long id_user;// id user
	private Long id_voucher;// id voucher
	private Long id_type_payment;// id type payment
	private Timestamp date_shipping;// date shipping
	private Time time_shipping;// time shipping
	private Double fee_shipping;// fee shipping
	private List<OrderItem> orderItems;

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

	public Long getId_type_payment() {
		return id_type_payment;
	}

	public void setId_type_payment(Long id_type_payment) {
		this.id_type_payment = id_type_payment;
	}

	public Timestamp getDate_shipping() {
		return date_shipping;
	}

	public void setDate_shipping(String date_shipping) throws ParseException {
		Date date = (Date) new SimpleDateFormat("dd/MM/yyyy").parse(date_shipping);
		System.out.println(date_shipping);
		this.date_shipping = new Timestamp(date.getTime());
	}

	public Time getTime_shipping() {
		return time_shipping;
	}

	public void setTime_shipping(String time_shipping) throws ParseException {
		DateFormat formatter = new SimpleDateFormat("HH:mm");
		Time timeValue = new Time(formatter.parse(time_shipping).getTime());
		this.time_shipping = timeValue;
	}

	public Double getFee_shipping() {
		return fee_shipping;
	}

	public void setFee_shipping(Double fee_shipping) {
		this.fee_shipping = fee_shipping;
	}

	public List<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

}
