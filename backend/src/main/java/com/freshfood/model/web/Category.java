package com.freshfood.model.web;

public class Category extends ADate{
	private Long id_category;// id category
	private String name_category;// name category

	public Long getId_category() {
		return id_category;
	}

	public void setId_category(Long id_category) {
		this.id_category = id_category;
	}

	public String getName_category() {
		return name_category;
	}

	public void setName_category(String name_category) {
		this.name_category = name_category;
	}

}
