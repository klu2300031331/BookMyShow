package klu.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Menus {
	
	@Id
	Long mid;
	public Long getMid() {
		return mid;
	}
	public void setMid(Long mid) {
		this.mid = mid;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getMenu() {
		return menu;
	}
	public void setMenu(String menu) {
		this.menu = menu;
	}
	String icon;
	String menu;

}