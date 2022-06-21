package com.freshfood.model.web;

public class OrderItem {
	private Long id_order_item;// id order item
	private Long id_order;// id order
	private Long id_product;// id product
	private int quantity;// quantity product

	public Long getId_order_item() {
		return id_order_item;
	}

	public void setId_order_item(Long id_order_item) {
		this.id_order_item = id_order_item;
	}

	public Long getId_order() {
		return id_order;
	}

	public void setId_order(Long id_order) {
		this.id_order = id_order;
	}

	public Long getId_product() {
		return id_product;
	}

	public void setId_product(Long id_product) {
		this.id_product = id_product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
