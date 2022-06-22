package com.freshfood.model.web;
import java.util.List;
public class Cart {
	private Long id_cart;// id cart
	private Long id_user;// id user
	private List<CartItem> listCartItem;// list cartItem
	private Double totalPrice;//total price

	// get the cart's id
	public Long getId_cart() {
		return id_cart;
	}

	// set the cart's id
	public void setId_cart(Long id_cart) {
		this.id_cart = id_cart;
	}

	// get the user's id for the cart
	public Long getId_user() {
		return id_user;
	}

	// set the user's id for the cart
	public void setId_user(Long id_user) {
		this.id_user = id_user;
	}

	public List<CartItem> getListCartItem() {
		return listCartItem;
	}

	public void setListCartItem(List<CartItem> listCartItem) {
		this.listCartItem = listCartItem;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
}
