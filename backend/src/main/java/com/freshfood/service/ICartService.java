package com.freshfood.service;

import com.freshfood.model.web.Cart;

public interface ICartService {
	/*
	 * get data cart by id cart
	 * input: id_cart
	 * output: a cart
	 */
	Cart getCart(Long id_cart);
	/*
	 * delete cart item from cart user
	 * input: id_cart_item
	 * ouput: message
	 */
	String deleteCartItem(long id_cart_item);
	/*
	 * delete cart item from cart user
	 * input: id_cart_item, quantity
	 * ouput: message
	 */
	String updateCartItem(long id_cart_item, int quantity);
	/*
	 * add new product to cart 
	 * input: id cart, id product, quantity 
	 * output: a message
	 */
	String addToCart(long idOrderItem,long idProduct, int quantity);
}
