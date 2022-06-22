package com.freshfood.service.impl;

import java.sql.Timestamp;

import javax.inject.Inject;

import com.freshfood.dao.IPromotionDao;
import com.freshfood.service.IPromotionService;

public class PromotionService implements IPromotionService{

	@Inject
	private IPromotionDao promotionDao;
	/*
	 * check validate voucher
	 * input: id user and code voucher
	 * output: true or false
	 */	
	@Override
	public boolean checkValidateVoucher(long id_user, String codeVoucher) {
		if(promotionDao.isUsed(id_user, codeVoucher)) return true;
		else {
			return checkTimeout(codeVoucher);
		}
	}
	/*
	 * check voucher is time out
	 * input: timeout
	 * output: true or false
	 */
	@Override
	public boolean checkTimeout(String codeVoucher) {
		Timestamp end_date = promotionDao.getEndDate(codeVoucher);
		Timestamp now =  new Timestamp(System.currentTimeMillis());
		int compare = now.compareTo(end_date);
		if(compare>=0) {
			return true;
		}
		return false;
	}
}
