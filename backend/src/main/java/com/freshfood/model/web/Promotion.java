package com.freshfood.model.web;

import java.sql.Date;

public class Promotion extends ADate {
	private Long id_promotion;// id promotion
	private String name_promotion;// name promotion
	private Date endDate;// end date promotion

	public Long getId_promotion() {
		return id_promotion;
	}

	public void setId_promotion(Long id_promotion) {
		this.id_promotion = id_promotion;
	}

	public String getName_promotion() {
		return name_promotion;
	}

	public void setName_promotion(String name_promotion) {
		this.name_promotion = name_promotion;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
}
