#Author: Ashok Kumar Saw
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Login_Validation
              As a user
              I want to run a test to verify login functionality

  @TC_1 @login_logout @smokeTest @RegressionTest
  Scenario Outline: [TC_1] Submit a valid login credentials to verify login and logout functionality
    Given user on the Login Page
    When user enters 'Email ID' with <email>
    And user enters 'Password' with <password>
    And user clicks 'LOG IN' button
    Then user should get logged in
    When user clicks 'Logout' link
    Then user should get logged out

    Examples: 
      | email                     | password     |
      | "teknotrait.ashok+7@gmail.com" | "6360289079" |

  @TC_2 @login_logout @smokeTest @RegressionTest
  Scenario Outline: [TC_2] Login with invalid credentials
    Given user on the Login Page
    When user enters invalid login credentials for <Type> with <Email> and <Password>
    Then user should not be able to login

    Examples: 
      | Type                | Email                        | Password    |
      | "Unregistered User" | "unregistered_email@zumic.com" | "Zumic@123" |
      | "Invalid email"     | "Invalid email"              | "Zumic@123" |

  
  
  @TC_3 @forgot_Pwd @login_logout @smokeTest @RegressionTest
  Scenario Outline: [TC_3] Verify forgot password functionality for existing user
    Given user on the Login Page
    And user navigates to forgot password page
    When user enters valid <emailID> to get activation link to reset password
    And user clicks on 'RESET' button
    Then confirmation 'Success' message is displayed on page
    And user gets Activation Link in entered email Id <emailID>
    When user clicks on password reset link
    And user resets password with <newPassword> and <confirmPassword>
    And user clicks on 'CONFIRM' button
    Then User logins in zumic using new password
    

    Examples: 
      | emailID                  | newPassword | confirmPassword |
      | "forgot_pwd@yopmail.com" | "Zumic@1234" | "Zumic@1234"   |
