package com.example.demo.setting;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class DemoController {
	@GetMapping(path="/hello")
	public @ResponseBody String hello() {
		return "ahihi";
	}
	

}