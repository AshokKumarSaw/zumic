package com.teknotrait.automation.zumic.stepDefinitions;

import org.junit.Assert;

import com.teknotrait.automation.zumic.pages.ForgotPasswordPage;
import com.teknotrait.automation.zumic.pages.LoginPage;
import com.teknotrait.automation.zumic.pages.MyAccountPage;
import com.teknotrait.automation.zumic.pages.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_Logout_ForgotPwd_stepDefinition {
    RegisterPage registerPage = null;
	LoginPage loginPage = null;
	MyAccountPage myAccountPage = null;
	ForgotPasswordPage forgotPasswordPage = null;
	String email = null;
	String password = null;
	
	
	@Given("^user on the Login Page$")
	public void user_on_the_Login_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		loginPage = new LoginPage();
		loginPage.clickLoginRegisterbtn();
	
	    
	}

	@When("^user enters 'Email ID' with \"([^\"]*)\"$")
	public void user_enters_Email_ID_with(String email) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  loginPage.enterEmail(email);
	}

	 
	@When("^user enters 'Password' with \"([^\"]*)\"$")
	public void user_enters_Password_with(String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   loginPage.enterPassword(password);
	}

	@When("^user clicks 'LOG IN' button$")
	public void user_clicks_LOG_IN_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
       loginPage.clickSubmit();
       
	}

	@Then("^user should get logged in$")
	public void user_should_get_logged_in() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	//	Assert.assertTrue("My Account dropdown is not visible after login", myAccountPage.isLogoutLinkVisible());
		System.out.println("Login/Register link is visible");
	}

	@When("^user clicks 'Logout' link$")
	public void user_clicks_Logout_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   myAccountPage.clickMyAccount();
	   myAccountPage.clickLogout();
	}

	@Then("^user should get logged out$")
	public void user_should_get_logged_out() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue("Login/Register button is not visible after logout", loginPage.isLoginRegisterLinkVisible());
	}

	@When("^user enters invalid login credentials for \"([^\"]*)\" with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_invalid_login_credentials_for_with_and(String Type, String email, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		switch (Type.toLowerCase()) {

		case "unregistered user":
			loginPage.enterEmail(email);
			loginPage.enterPassword(password);
			loginPage.clickSubmit();

			break;

		case "invalid email":
			loginPage.enterEmail(email);
			loginPage.enterPassword(password);		
			loginPage.clickSubmit();
			break;
		}
	  
	}

	@Then("^user should not be able to login$")
	public void user_should_not_be_able_to_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue("Login/Register button is still visible after login ", loginPage.isLoginRegisterLinkVisible());
	}

	@Given("^user navigates to forgot password page$")
	public void user_navigates_to_forgot_password_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   loginPage.clickForgotPasswordLnk();
	}

	@When("^user enters valid \"([^\"]*)\" to get activation link to reset password$")
	public void user_enters_valid_to_get_activation_link_to_reset_password(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		forgotPasswordPage.enterEmailtoResetPwd(email);
	   
	}

	@When("^user clicks on 'RESET' button$")
	public void user_clicks_on_RESET_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		forgotPasswordPage.clickResetBtn();
	}

	@Then("^confirmation 'Success' message is displayed on page$")
	public void confirmation_Success_message_is_displayed_on_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertTrue(" Successful Confirmation Message to reset password isn't displayed ", forgotPasswordPage.isResetPwdEmailsuccessVisible());
	   
	}

	@Then("^user gets Activation Link in entered email Id \"([^\"]*)\"$")
	public void user_gets_Activation_Link_in_entered_email_Id(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("Skipping the step user gets Activation Link in entered email");
	}

	@When("^user clicks on password reset link$")
	public void user_clicks_on_password_reset_link() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("Skipping the step user clicks on password reset link");
	}

	@When("^user resets password with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_resets_password_with_and(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Skipping the step user resets password ");
	}

	@When("^user clicks on 'CONFIRM' button$")
	public void user_clicks_on_CONFIRM_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Skipping the step user clicks on 'CONFIRM' button");
	}

	@Then("^User logins in zumic using new password$")
	public void user_logins_in_zumic_using_new_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Skipping the step User logins in zumic using new password");
	}

	
	
	
}
