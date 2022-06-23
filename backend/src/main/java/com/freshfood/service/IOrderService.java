package com.freshfood.service;

import com.freshfood.model.web.OrderProduct;

public interface IOrderService {

	/*
	 * order product input: id_user, id voucher, id_type_payment, date_shipping,
	 * time_shipping, fee_shipping and order item list (OrderProduct model)
	 * output:number row effected
	 */
	String orderProduct(long id_user, OrderProduct orderProduct);
}
