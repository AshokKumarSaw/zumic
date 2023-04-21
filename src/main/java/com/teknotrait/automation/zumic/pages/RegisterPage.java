package com.teknotrait.automation.zumic.pages;

import org.openqa.selenium.By;

import com.teknotrait.automation.zumic.webActions.WebPageActions;



public class RegisterPage extends WebPageActions{
By tabRegister = By.xpath("//a[@class='login-tab']");
By inputEmailRegister = By.xpath("//input[@id='email-reg']");
By inputPasswordRegister = By.xpath("//input[@id='password-reg']");
By btnRegister = By.xpath("//button[@type='submit']");
}
