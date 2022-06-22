package com.freshfood.service.impl;

import java.util.List;

import javax.inject.Inject;

import com.freshfood.dao.impl.CartDao;
import com.freshfood.model.web.Cart;
import com.freshfood.model.web.CartItem;
import com.freshfood.service.ICartService;

public class CartService implements ICartService {
	@Inject
	private CartDao cartDao;

	/*
	 * get data cart by id cart input: id_cart output: a cart
	 */
	@Override
	public Cart getCart(Long id_cart) {
		List<CartItem> cartItems = cartDao.getCart(id_cart);
		Cart cart = new Cart();
		cart.setId_cart(id_cart);
		cart.setId_user(id_cart);
		cart.setListCartItem(cartItems);
		double totalPrice = 0;
		// computed total price cart
		for (CartItem cartItem : cartItems) {
			totalPrice += cartItem.getNumber_product() * cartItem.getPrice();
		}
		cart.setTotalPrice(totalPrice);
		return cart;
	}

	/*
	 * delete cart item from cart user input: id_cart_item: long ouput: a message
	 */
	@Override
	public String deleteCartItem(long id_cart_item) {
		if (cartDao.deleteCartItem(id_cart_item) > 0)
			return "Delete success";
		return "Delete unsuccess";
	}

	/*
	 * delete cart item from cart user
	 * input: id_cart_item, quantity
	 * ouput: message
	 */
	@Override
	public String updateCartItem(long id_cart_item, int quantity) {
		if (cartDao.updateCartItem(id_cart_item, quantity) > 0)
			return "Update success";
		return "Update unsuccess";
	}

}
