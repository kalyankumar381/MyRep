package com.learning.cucumber;

import gherkin.lexer.Listener;

import java.awt.List;
import java.util.Map;

import org.apache.log4j.Logger;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HolyTester {
	
	Logger APPLICATION_LOGS= Logger.getLogger("devpinoyLogger");
	
	@Given(value = "^I am a \"([a-zA-Z]{1,})\" tester$")
	public void I_am_a_bad_tester(String testerType, DataTable table){
		APPLICATION_LOGS.debug("********************************");
		
		java.util.List<Map<String,String>> data=table.asMaps(String.class,String.class);			
		
		APPLICATION_LOGS.debug("@Given - I am a "+testerType+" tester in "+ data.get(0).get("industry")+" industry in country "+data.get(0).get("country"));
		APPLICATION_LOGS.debug("@Given - I am a "+testerType+" tester in "+ data.get(1).get("industry")+" industry in country  " + data.get(1).get("country"));
	}
	
	@When("^I got to work$")
	public void I_got_to_work(){
		APPLICATION_LOGS.debug("@When - I got to work");
	}
	
	@Then("^I \"([a-zA-Z]{1,})\" it$")
	public void I_mess_with_it(String workOutPut){
		APPLICATION_LOGS.debug("@The - I "+workOutPut+" it");
	}
	
	@And("^My boss \"([a-zA-Z]{1,})\" me$")
	public void My_boss_fires_me(String boss,DataTable table){
		java.util.List<Map<String,String>> data=table.asMaps(String.class, String.class);
		
		APPLICATION_LOGS.debug("@And- My boss in country "+data.get(0).get("Country")+" " + boss+" me");
		APPLICATION_LOGS.debug("@And- My boss in country "+data.get(1).get("Country")+" " + boss+" me");
	}
	
	@But("^The developer \"([a-zA-Z]{1,})\" me$")
	public void The_developer_likes_me(String dev){
		APPLICATION_LOGS.debug("@But - Developer "+dev+" me");
	}
	
	

}
