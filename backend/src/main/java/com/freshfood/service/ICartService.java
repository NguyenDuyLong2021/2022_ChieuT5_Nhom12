package com.freshfood.service;

import com.freshfood.model.web.Cart;

public interface ICartService {
	/*
	 * get data cart by id cart
	 * input: id_cart
	 * output: a cart
	 */
	Cart getCart(Long id_cart);
}
