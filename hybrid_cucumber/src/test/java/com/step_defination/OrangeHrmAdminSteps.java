package com.step_defination;

import org.openqa.selenium.support.ui.Select;

import com.base_class.Library;
import com.pages.OrangeHrmAdminPage;
import com.selenium_reuseablefunction.SeleniumUtility;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class OrangeHrmAdminSteps extends Library {
	OrangeHrmAdminPage orangeAdminPage;
	SeleniumUtility seleniumUtlity;
	
	@Given("To open Admin functionlity of orangehrm")
	public void to_open_Admin_functionlity_of_orangehrm() {
		orangeAdminPage=new OrangeHrmAdminPage(driver);
		orangeAdminPage.clickMenuAdmin();
		logger.info("menu admin button is clicked");   
	}

	@When("To enter {string}")
	public void to_enter(String username) {
		orangeAdminPage=new OrangeHrmAdminPage(driver);
		orangeAdminPage.insertUserName(username);
		logger.info("username is entered");
	}

	@Then("To select {string}")
	public void to_select(String userType) {
		orangeAdminPage=new OrangeHrmAdminPage(driver);
		orangeAdminPage.selectUserType(userType);
		logger.info("the user type is selected");
	}

	@Then("To Enter EmployeeName")
	public void to_Enter_EmployeeName() {
		orangeAdminPage=new OrangeHrmAdminPage(driver);
		orangeAdminPage.insertEmployeeName(properties.getProperty("employeeName"));
		logger.info("enterd the employee name");
	}

	@Then("Select status")
	public void select_status() {
		orangeAdminPage=new OrangeHrmAdminPage(driver);
		orangeAdminPage.selectStatus(properties.getProperty("adminStatusCheck"));
		logger.info("status selected");
	}

	@Then("Click the search button")
	public void click_the_search_button() {
		orangeAdminPage=new OrangeHrmAdminPage(driver);
		orangeAdminPage.clickSubmit();
		logger.info("search button is clicked");
	   
	}

	@Then("To take a screenshot and the title")
	public void to_take_a_screenshot_and_the_title() {
		seleniumUtlity =new SeleniumUtility(driver);
		seleniumUtlity.to_take_screenshot("search admin");
		seleniumUtlity.getTitle();
		logger.info("taken screen shot and search admin");
	    
	}

	@Then("to close the browser")
	public void to_close_the_browser() {
		tearDown();
		logger.info("browser is closed");
	    
	}

}
