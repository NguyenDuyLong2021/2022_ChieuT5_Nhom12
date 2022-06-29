package com.freshfood.dao;

import java.sql.Timestamp;

import com.freshfood.model.web.Voucher;

public interface IPromotionDao {
/*
 * check voucher is used
 * input: id user and code voucher
 * output: a voucher
 */
	Voucher isUsed(long id_user, String code_voucher);
	/*
	 * get end date of voucher
	 * input: a code voucher
	 * output: end date type timestamp
	 */
	Timestamp getEndDate(String codeVoucher);
}
