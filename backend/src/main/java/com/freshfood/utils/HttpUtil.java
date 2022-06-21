package com.freshfood.utils;

import java.io.BufferedReader;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
// this class is used to convert JSON formatted to a string value
public class HttpUtil {
	private String stringJson;

	public HttpUtil(String stringJson) {
		super();
		this.stringJson = stringJson;
	}
	/*
	 * This method used to convert string to model
	 * input includes a type class
	 * return a model
	 */
	public <T> T toModel(Class<T> classT) {
		try {
			return new ObjectMapper().readValue(stringJson, classT);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	
	/*
	 * this method is used to convert json to string
	 * input inclues: a buffereader from request
	 * return this object with a string
	 */
	public static HttpUtil of(BufferedReader reader) {
		StringBuffer stringBufereader = new StringBuffer();
		String line="";
		try {
			while ((line=reader.readLine()) != null) {
				stringBufereader.append(line);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return new HttpUtil(stringBufereader.toString());
	}
}
