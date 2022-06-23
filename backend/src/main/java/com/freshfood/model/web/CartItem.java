package com.freshfood.model.web;

public class CartItem {
	private Long id_cart_item;// id cart item
	private Long id_product;// id product
	private String name_product;// name product
	private String thumnail;// thumnail product
	private Double price;// price product
	private Integer quantity;// quantity product

	public Long getId_cart_item() {
		return id_cart_item;
	}

	public void setId_cart_item(Long id_cart_item) {
		this.id_cart_item = id_cart_item;
	}

	public Long getId_product() {
		return id_product;
	}

	public void setId_product(Long id_product) {
		this.id_product = id_product;
	}

	public String getName_product() {
		return name_product;
	}

	public void setName_product(String name_product) {
		this.name_product = name_product;
	}

	public String getThumnail() {
		return thumnail;
	}

	public void setThumnail(String thumnail) {
		this.thumnail = thumnail;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

}
