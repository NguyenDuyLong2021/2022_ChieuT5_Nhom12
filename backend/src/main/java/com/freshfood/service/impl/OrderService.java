package com.freshfood.service.impl;

import javax.inject.Inject;

import com.freshfood.dao.IOrderDao;
import com.freshfood.dao.impl.ADao;
import com.freshfood.model.web.OrderProduct;
import com.freshfood.service.IOrderService;

public class OrderService extends ADao<OrderProduct> implements IOrderService {

	@Inject
	private IOrderDao orderDao;

	/*
	 * order product input: id_user, id voucher, id_type_payment, date_shipping,
	 * time_shipping, fee_shipping and order item list (OrderProduct model)
	 * output:number row effected
	 */
	@Override
	public String orderProduct(long id_user, OrderProduct orderProduct) {
		if (orderDao.orderProduct(id_user, orderProduct) > 0)
			return "Order success";
		return "Order failed";
	}

}
