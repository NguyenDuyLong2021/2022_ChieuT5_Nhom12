package com.freshfood.model.web;

import javax.enterprise.inject.Model;

@Model
public class User extends ADate{
	private Long id_user;// id user
	private String first_name;// first name user
	private String last_name;// last name user
	private String avatar;
	private String phone_number;// phone number
	private String email;// email
	private String address;// address
	private String password_user;// password user
	private Boolean is_delete;// password is deleted
	private Integer quantity_item_cart;
	private Long id_cart;

	// get the user's id
	public Long getId_user() {
		return id_user;
	}

	// set the user's id
	public void setId_user(Long id_user) {
		this.id_user = id_user;
	}

	// get the user's first name user
	public String getFirst_name() {
		return first_name;
	}

	// set the user's first name
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	// get the user's last name
	public String getLast_name() {
		return last_name;
	}

	// set the user's last name
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	// get the user's number phone
	public String getPhone_number() {
		return phone_number;
	}

	// set the user's phone number
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	// get the user's mail
	public String getEmail() {
		return email;
	}

	// set the user's email
	public void setEmail(String email) {
		this.email = email;
	}

	// get the user's address
	public String getAddress() {
		return address;
	}

	// set the user's address
	public void setAddress(String address) {
		this.address = address;
	}

	// get the user's password
	public String getPassword_user() {
		return password_user;
	}
	//set the user's password
	public void setPassword_user(String password_user) {
		this.password_user = password_user;
	}
	//get the user's status delete
	public Boolean isIs_delete() {
		return is_delete;
	}
	//set the user's status delete
	public void setIs_delete(Boolean is_delete) {
		this.is_delete = is_delete;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public Boolean getIs_delete() {
		return is_delete;
	}

	public Integer getQuantity_item_cart() {
		return quantity_item_cart;
	}

	public void setQuantity_item_cart(Integer quantity_item_cart) {
		this.quantity_item_cart = quantity_item_cart;
	}

	public Long getId_cart() {
		return id_cart;
	}

	public void setId_cart(Long id_cart) {
		this.id_cart = id_cart;
	}
	
}
