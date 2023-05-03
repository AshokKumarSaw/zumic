package com.teknotrait.automation.zumic.pages;

import org.openqa.selenium.By;

import com.teknotrait.automation.zumic.webActions.WebPageActions;



public class LoginPage extends WebPageActions{
	// defining all the web elements of Login Page
 	By btnLoginRegister = By.xpath("//a[@id='login-btn']");
	By inputEmail = By.xpath("//input[@id='email-login']");
	By inputPassword = By.xpath("//input[@id='password-login']");
	//By btnSubmit = By.xpath("//button[@type='submit']");
	By btnSubmit = By.xpath("//button[@id='btn-login']");
	By emailPasswordUnmatchError = By.xpath("//body/div[@id='page-wrapper']/div[@id='page-body']/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]");
	By lnkForgotPassword = By.xpath("//a[contains(text(),'Forgot Your Password?')]");
	
	public void clickLoginRegisterbtn() {

		customWaitForElement(btnLoginRegister, 30);
		customWaitAndClick(btnLoginRegister, 30);

	}

	public void enterEmail(String email) {

		customWaitForElement(inputEmail, 30);  
		enterTextInTextBox(inputEmail, email);

	}

	public void enterPassword(String password) {

		customWaitForElement(inputPassword, 30);
		enterTextInTextBox(inputPassword, password);
	}
	
	public void clickSubmit() {
		customWaitForElement(btnSubmit, 30);
		customWaitAndClick(btnSubmit, 30);
		waitForVisibilityOfElement(btnLoginRegister, 60);
	}
	public boolean isLoginRegisterLinkVisible() {

		customWaitForElement(btnLoginRegister, 30);
		waitForStalenessOfElementLocated(btnLoginRegister, 30);
		waitForVisibilityOfElement(btnLoginRegister, 30);
		return getElement(btnLoginRegister).isDisplayed();
	}
	public boolean isEmailPasswordNotMatchedErrorDisplayed() {

		waitForVisibilityOfElement(emailPasswordUnmatchError, 30);
		return getElement(emailPasswordUnmatchError).isDisplayed();

	}
	public void clickForgotPasswordLnk() {
		customWaitForElement(lnkForgotPassword , 30);
		customWaitAndClick(lnkForgotPassword , 30);
	}
	
}
