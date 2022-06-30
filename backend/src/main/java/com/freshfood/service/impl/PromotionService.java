package com.freshfood.service.impl;

import java.sql.Timestamp;

import javax.inject.Inject;

import com.freshfood.dao.IPromotionDao;
import com.freshfood.model.web.Voucher;
import com.freshfood.service.IPromotionService;

public class PromotionService implements IPromotionService {

	@Inject
	private IPromotionDao promotionDao;

	/*
	 * check validate voucher input: id user and code voucher output: true or false
	 */
	@Override
	public Voucher checkValidateVoucher(long id_user, String codeVoucher) {
		try {
			Voucher v = promotionDao.isUsed(id_user, codeVoucher);
			if (v.getAvailable())
				return v;
			else {
				return checkTimeout(codeVoucher);
			}
		} catch (NullPointerException e) {
			Voucher v = new Voucher();
			v.setAvailable(false);
			return v;
		}
	}

	/*
	 * check voucher is time out input: timeout output: true or false
	 */
	@Override
	public Voucher checkTimeout(String codeVoucher) {
		Timestamp end_date = promotionDao.getEndDate(codeVoucher);
		Timestamp now = new Timestamp(System.currentTimeMillis());
		Voucher v = new Voucher();
		v.setAvailable(now.after(end_date));
		return v;
	}
}
