package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.base_class.Library;

public class OrangeHrmAdminPage extends Library {
	
	Select select;
	public OrangeHrmAdminPage(WebDriver driver) {
		
		PageFactory.initElements(driver, this);
		
	}
	@FindBy(xpath = "//*[@id=\'menu_admin_viewAdminModule\']/b")
	WebElement menu_AdminButton;
	@FindBy(id = "searchSystemUser_userName")
	WebElement adminUserNameText;
	@FindBy(id = "searchSystemUser_userType")
	WebElement adminUserType;
	@FindBy(id = "searchSystemUser_employeeName_empName")
	WebElement adminEmployeeTxt;
	@FindBy(id = "searchSystemUser_status")
	WebElement adminStatusCheck;
	@FindBy(id = "searchBtn")
	WebElement adminSearchBtn;
	public void clickMenuAdmin() {
		menu_AdminButton.click();
	}
	public void insertUserName(String username) {
		adminUserNameText.sendKeys(username);
	}
	public void selectUserType(String userType) {
		select= new Select(adminUserType);
		select.selectByVisibleText(userType);
	}
	public void insertEmployeeName(String employeeName) {
		adminEmployeeTxt.sendKeys(employeeName);
	}
	public void selectStatus(String status) {
		select= new Select(adminStatusCheck);
		select.selectByVisibleText(status);
	}
	public void clickSubmit() {
		adminSearchBtn.click();
	}

}
