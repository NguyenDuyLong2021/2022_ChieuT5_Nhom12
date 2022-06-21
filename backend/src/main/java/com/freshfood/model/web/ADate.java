package com.freshfood.model.web;

import java.sql.Timestamp;

public abstract class ADate {
	private Timestamp create_date;// create date add product
	private Timestamp modified_date;// modified date modified product
	// get create date

	public Timestamp getCreate_date() {
		return create_date;
	}

	// set create date
	public void setCreate_date(Timestamp create_date) {
		this.create_date = create_date;
	}

	// get modified date
	public Timestamp getModified_date() {
		return modified_date;
	}

	// set modified date
	public void setModified_date(Timestamp modified_date) {
		this.modified_date = modified_date;
	}

}
