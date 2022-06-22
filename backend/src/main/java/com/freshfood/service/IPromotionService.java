package com.freshfood.service;

public interface IPromotionService {
/*
 * check validate voucher
 * input: id user and code voucher
 * output: true or false
 */
	boolean checkValidateVoucher(long id_user, String codeVoucher);
	/*
	 * check voucher is time out
	 * input: timeout
	 * output: true or false
	 */
	boolean checkTimeout(String codeVouc);
}
