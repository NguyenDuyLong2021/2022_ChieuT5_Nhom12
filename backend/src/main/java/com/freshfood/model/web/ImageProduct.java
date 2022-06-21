package com.freshfood.model.web;

public class ImageProduct {
	private Long id_image;// id image
	private Long id_product;// id product
	private String image;// image product

	public Long getId_image() {
		return id_image;
	}

	public void setId_image(Long id_image) {
		this.id_image = id_image;
	}

	public Long getId_product() {
		return id_product;
	}

	public void setId_product(Long id_product) {
		this.id_product = id_product;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}
