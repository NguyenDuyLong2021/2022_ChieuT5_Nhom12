package com.freshfood.dao;

import com.freshfood.model.web.OrderProduct;

public interface IOrderDao {
	/*
	 * order product 
	 * input: id_user, id voucher, id_type_payment, date_shipping, time_shipping, fee_shipping and order item list (OrderProduct model)
	 * output: number row effected
	 */
	int orderProduct(long idUser,OrderProduct orderProduct);
}
