package com.freshfood.model.web;

import java.util.List;

public class Product extends ADate{
	private Long id_product;// id product
	private String name_product;// name product
	private String decripstion;// description product
	private double price;// price product
	private String thumnail;// thumbnail product
	private Long id_category;// category product
	private boolean available;// available product(is product stop)
	private String create_by;// who was create
	private String modified_by;// who was modified
	private List<ImageProduct> listImages ;//list images
	private Double rate_discount;//rate discount
	private String name_unit ;

	//get the product's id
	public Long getId_product() {
		return id_product;
	}
	//set the product's id
	public void setId_product(Long id_product) {
		this.id_product = id_product;
	}
	//get the product's name
	public String getName_product() {
		return name_product;
	}
	//set the product's name
	public void setName_product(String name_product) {
		this.name_product = name_product;
	}
	//get the product's description 
	public String getDecripstion() {
		return decripstion;
	}
	//set the product description
	public void setDecripstion(String decripstion) {
		this.decripstion = decripstion;
	}
	//get the product's name
	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getThumnail() {
		return thumnail;
	}
	public void thumnail(String thumbnail) {
		this.thumnail = thumbnail;
	}

	public Long getId_category() {
		return id_category;
	}

	public void setId_category(Long id_category) {
		this.id_category = id_category;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

	public String getCreate_by() {
		return create_by;
	}

	public void setCreate_by(String create_by) {
		this.create_by = create_by;
	}

	public String getModified_by() {
		return modified_by;
	}

	public void setModified_by(String modified_by) {
		this.modified_by = modified_by;
	}
	public void setThumnail(String thumbnail) {
		this.thumnail = thumbnail;
	}
	public List<ImageProduct> getListImages() {
		return listImages;
	}
	public void setListImages(List<ImageProduct> listImages) {
		this.listImages = listImages;
	}
	public Double getRate_discount() {
		return rate_discount;
	}
	public void setRate_discount(Double rate_discount) {
		this.rate_discount = rate_discount;
	}
	public String getName_unit() {
		return name_unit;
	}
	public void setName_unit(String name_unit) {
		this.name_unit = name_unit;
	}

}
