package com.freshfood.dao;

import java.sql.Timestamp;

public interface IPromotionDao {
/*
 * check voucher is used
 * input: id user and code voucher
 * output: true or false
 */
	boolean isUsed(long id_user, String code_voucher);
	/*
	 * get end date of voucher
	 * input: a code voucher
	 * output: end date type timestamp
	 */
	Timestamp getEndDate(String codeVoucher);
}
