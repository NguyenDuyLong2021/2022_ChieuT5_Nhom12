package com.freshfood.service;

import com.freshfood.model.web.Voucher;

public interface IPromotionService {
/*
 * check validate voucher
 * input: id user and code voucher
 * output: true or false
 */
	Voucher checkValidateVoucher(long id_user, String codeVoucher);
	/*
	 * check voucher is time out
	 * input: timeout
	 * output: a voucher
	 */
	Voucher checkTimeout(String codeVouc);
}
