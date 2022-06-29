package com.freshfood.model.web;

import java.sql.Timestamp;

public class Voucher {
	private Long id_voucher;// id voucher
	private Long id_promotion;// id promotion
	private String code_voucher;// code voucher
	private Timestamp time_out;// time out
	private Boolean available;

	public Long getId_voucher() {
		return id_voucher;
	}

	public void setId_voucher(Long id_voucher) {
		this.id_voucher = id_voucher;
	}

	public Long getId_promotion() {
		return id_promotion;
	}

	public void setId_promotion(Long id_promotion) {
		this.id_promotion = id_promotion;
	}

	public String getCode_voucher() {
		return code_voucher;
	}

	public void setCode_voucher(String code_voucher) {
		this.code_voucher = code_voucher;
	}

	public Timestamp getTime_out() {
		return time_out;
	}

	public void setTime_out(Timestamp time_out) {
		this.time_out = time_out;
	}

	public Boolean getAvailable() {
		return available;
	}

	public void setAvailable(Boolean available) {
		this.available = available;
	}
	
}
