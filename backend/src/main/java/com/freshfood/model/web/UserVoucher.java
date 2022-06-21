package com.freshfood.model.web;

public class UserVoucher {
	private Long id_user_voucher;// id user voucher
	private Long id_user;// id user
	private Long voucher;// id voucher
	private boolean available;// voucher is available

	public Long getId_user_voucher() {
		return id_user_voucher;
	}

	public void setId_user_voucher(Long id_user_voucher) {
		this.id_user_voucher = id_user_voucher;
	}

	public Long getId_user() {
		return id_user;
	}

	public void setId_user(Long id_user) {
		this.id_user = id_user;
	}

	public Long getVoucher() {
		return voucher;
	}

	public void setVoucher(Long voucher) {
		this.voucher = voucher;
	}

	public boolean isAvailable() {
		return available;
	}

	public void setAvailable(boolean available) {
		this.available = available;
	}

}
