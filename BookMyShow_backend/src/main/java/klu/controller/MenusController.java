package klu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import klu.model.MenuManager;

@RestController
@CrossOrigin
@RequestMapping("/menus")
public class MenusController {
	
	@Autowired
	MenuManager M;

	@PostMapping("/getmenus")
	public String getMenus() {
		return M.getMenus();
	}
}