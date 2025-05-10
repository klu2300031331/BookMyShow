package klu.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import klu.model.Users;
import klu.model.UsersManager;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:5173/")
public class UsersController {
	
	@Autowired
	
	UsersManager UM;
	@PostMapping("/signup")
    public String signup(@RequestBody Users u) {
        //TODO: process POST request
        
        return UM.addUser(u);
    }
	
	@PostMapping("/signin")
	public String signin(@RequestBody Users u)
	{
		return UM.validateCredentials(u.getEmail(), u.getPassword());
	}
	
	@PostMapping("/getfullname")
	  public String getfullname(@RequestBody Map<String, String> data) {
	    return UM.getFullname(data.get("csrid"));
	  }
}
