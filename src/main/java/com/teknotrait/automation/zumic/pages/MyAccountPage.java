package com.teknotrait.automation.zumic.pages;

import org.openqa.selenium.By;

import com.teknotrait.automation.zumic.webActions.WebPageActions;



public class MyAccountPage extends WebPageActions{

	By MyAccount = By.xpath("//header/div[2]/div[1]/div[2]/div[1]/img[1]");
	By lnkLogout = By.xpath("//a[@href='https://zumic.com/account/logout']");
	By btnLoginRegister = By.xpath("//a[@id='login-btn']");
	
	public void clickMyAccount() {
		customWaitForElement(MyAccount, 30);
		customWaitAndClick(MyAccount, 30);
	}
	
	public void clickLogout() {
		customWaitForElement(lnkLogout, 30);
		customWaitAndClick(lnkLogout, 30);
	}
	public boolean isUserLoggedOut() {

		waitForVisibilityOfElement(btnLoginRegister, 30);
		customWaitAndClick(btnLoginRegister, 30);
		return getElement(btnLoginRegister).isDisplayed();

	}
	public boolean isLogoutLinkVisible() {

		customWaitForElement(MyAccount, 30);
		waitForStalenessOfElementLocated(MyAccount, 30);
		customWaitAndClick(MyAccount, 50);
		waitForVisibilityOfElement(lnkLogout, 30);
		return getElement(lnkLogout).isDisplayed();
	}
	
}
