package com.teknotrait.automation.zumic.pages;

import org.openqa.selenium.By;

import com.teknotrait.automation.zumic.webActions.WebPageActions;

public class ForgotPasswordPage extends WebPageActions{
	By inputEmailToResetPwd = By.xpath("//input[@id='email-login\']");
	By btnReset = By.xpath("//button[@id='btn-login']");
	By reset_password_success = By.xpath("//h1[contains(text(),'Success!')]");
	
	
	
	public void enterEmailtoResetPwd(String email) {

		customWaitForElement(inputEmailToResetPwd, 30);
		enterTextInTextBox(inputEmailToResetPwd, email);

	}
	
	public void clickResetBtn() {
		customWaitForElement(btnReset , 30);
		customWaitAndClick(btnReset , 30);
	}
	public boolean isResetPwdEmailsuccessVisible() {

		customWaitForElement(reset_password_success, 30);
		waitForStalenessOfElementLocated(reset_password_success, 30);
		waitForVisibilityOfElement(reset_password_success, 30);
		return getElement(reset_password_success).isDisplayed();
	}
	
}
