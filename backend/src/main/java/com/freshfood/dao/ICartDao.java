package com.freshfood.dao;

import java.util.List;

import com.freshfood.model.web.CartItem;

public interface ICartDao {
	/*
	 * get data cart by id cart
	 * input: id_cart
	 * output: a list cart item
	 */
	List<CartItem> getCart(Long id_cart);
}
