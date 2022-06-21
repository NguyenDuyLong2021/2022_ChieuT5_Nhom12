package com.freshfood.model.web;

public class TypePayment extends ADate {
	private Long id_type_payment;// id type payment
	private String name_payment;// name type payment

	public Long getId_type_payment() {
		return id_type_payment;
	}

	public void setId_type_payment(Long id_type_payment) {
		this.id_type_payment = id_type_payment;
	}

	public String getName_payment() {
		return name_payment;
	}

	public void setName_payment(String name_payment) {
		this.name_payment = name_payment;
	}

}
