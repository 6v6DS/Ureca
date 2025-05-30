package com.uplus.eureka.member.model.dto;

import java.io.Serializable;

public class Member implements Serializable {
	private static final long serialVersionUID=1L;
	private String id;
	private String password;
	private String name;
	private String email;
	private String address;
	private String phone;
	
	public Member() {}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Member [id=").append(id).append(", password=").append(password).append(", name=").append(name)
				.append(", email=").append(email).append(", address=").append(address).append(", phone=").append(phone)
				.append("]");
		return builder.toString();
	}
}
