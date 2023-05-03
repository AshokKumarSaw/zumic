$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login_logout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Ashok Kumar Saw"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Login_Validation",
  "description": "            As a user\r\n            I want to run a test to verify login functionality",
  "id": "login-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "[TC_1] Submit a valid login credentials to verify login and logout functionality",
  "description": "",
  "id": "login-validation;[tc-1]-submit-a-valid-login-credentials-to-verify-login-and-logout-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@TC_1"
    },
    {
      "line": 24,
      "name": "@login_logout"
    },
    {
      "line": 24,
      "name": "@smokeTest"
    },
    {
      "line": 24,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enters \u0027Email ID\u0027 with \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \u0027Password\u0027 with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user clicks \u0027LOG IN\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should get logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks \u0027Logout\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user should get logged out",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "login-validation;[tc-1]-submit-a-valid-login-credentials-to-verify-login-and-logout-functionality;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 35,
      "id": "login-validation;[tc-1]-submit-a-valid-login-credentials-to-verify-login-and-logout-functionality;;1"
    },
    {
      "cells": [
        "\"teknotrait.ashok+7@gmail.com\"",
        "\"6360289079\""
      ],
      "line": 36,
      "id": "login-validation;[tc-1]-submit-a-valid-login-credentials-to-verify-login-and-logout-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12047756600,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "[TC_1] Submit a valid login credentials to verify login and logout functionality",
  "description": "",
  "id": "login-validation;[tc-1]-submit-a-valid-login-credentials-to-verify-login-and-logout-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@login_logout"
    },
    {
      "line": 24,
      "name": "@RegressionTest"
    },
    {
      "line": 24,
      "name": "@smokeTest"
    },
    {
      "line": 24,
      "name": "@TC_1"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user enters \u0027Email ID\u0027 with \"teknotrait.ashok+7@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters \u0027Password\u0027 with \"6360289079\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user clicks \u0027LOG IN\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user should get logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user clicks \u0027Logout\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user should get logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_on_the_Login_Page()"
});
formatter.result({
  "duration": 3373423800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teknotrait.ashok+7@gmail.com",
      "offset": 29
    }
  ],
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_enters_Email_ID_with(String)"
});
formatter.result({
  "duration": 910274300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6360289079",
      "offset": 29
    }
  ],
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_enters_Password_with(String)"
});
formatter.result({
  "duration": 835054900,
  "status": "passed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_clicks_LOG_IN_button()"
});
formatter.result({
  "duration": 416455600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_should_get_logged_in()"
});
formatter.result({
  "duration": 202200,
  "status": "passed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_clicks_Logout_link()"
});
formatter.result({
  "duration": 2403100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.teknotrait.automation.zumic.stepDefinitions.Login_Logout_ForgotPwd_stepDefinition.user_clicks_Logout_link(Login_Logout_ForgotPwd_stepDefinition.java:62)\r\n\tat ✽.When user clicks \u0027Logout\u0027 link(login_logout.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_should_get_logged_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3712604300,
  "error_message": "java.lang.NullPointerException\r\n\tat com.vimalselvam.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:94)\r\n\tat com.teknotrait.automation.zumic.stepDefinitions.Hooks.tearDown(Hooks.java:63)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "[TC_2] Login with invalid credentials",
  "description": "",
  "id": "login-validation;[tc-2]-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@TC_2"
    },
    {
      "line": 38,
      "name": "@login_logout"
    },
    {
      "line": 38,
      "name": "@smokeTest"
    },
    {
      "line": 38,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid login credentials for \u003cType\u003e with \u003cEmail\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user should not be able to login",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "login-validation;[tc-2]-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Type",
        "Email",
        "Password"
      ],
      "line": 45,
      "id": "login-validation;[tc-2]-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "\"Unregistered User\"",
        "\"unregistered_email@zumic.com\"",
        "\"Zumic@123\""
      ],
      "line": 46,
      "id": "login-validation;[tc-2]-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "\"Invalid email\"",
        "\"Invalid email\"",
        "\"Zumic@123\""
      ],
      "line": 47,
      "id": "login-validation;[tc-2]-login-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18211915300,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "[TC_2] Login with invalid credentials",
  "description": "",
  "id": "login-validation;[tc-2]-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@login_logout"
    },
    {
      "line": 38,
      "name": "@RegressionTest"
    },
    {
      "line": 38,
      "name": "@smokeTest"
    },
    {
      "line": 38,
      "name": "@TC_2"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid login credentials for \"Unregistered User\" with \"unregistered_email@zumic.com\" and \"Zumic@123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_on_the_Login_Page()"
});
formatter.result({
  "duration": 4390293900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Unregistered User",
      "offset": 43
    },
    {
      "val": "unregistered_email@zumic.com",
      "offset": 68
    },
    {
      "val": "Zumic@123",
      "offset": 103
    }
  ],
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_enters_invalid_login_credentials_for_with_and(String,String,String)"
});
formatter.result({
  "duration": 1997630300,
  "status": "passed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 30477190800,
  "status": "passed"
});
formatter.after({
  "duration": 2697300,
  "error_message": "java.lang.NullPointerException\r\n\tat com.teknotrait.automation.zumic.stepDefinitions.Hooks.tearDown(Hooks.java:68)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 19319665200,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "[TC_2] Login with invalid credentials",
  "description": "",
  "id": "login-validation;[tc-2]-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@login_logout"
    },
    {
      "line": 38,
      "name": "@RegressionTest"
    },
    {
      "line": 38,
      "name": "@smokeTest"
    },
    {
      "line": 38,
      "name": "@TC_2"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user enters invalid login credentials for \"Invalid email\" with \"Invalid email\" and \"Zumic@123\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_on_the_Login_Page()"
});
formatter.result({
  "duration": 3590409900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email",
      "offset": 43
    },
    {
      "val": "Invalid email",
      "offset": 64
    },
    {
      "val": "Zumic@123",
      "offset": 84
    }
  ],
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_enters_invalid_login_credentials_for_with_and(String,String,String)"
});
formatter.result({
  "duration": 1983937600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_should_not_be_able_to_login()"
});
formatter.result({
  "duration": 30252707400,
  "status": "passed"
});
formatter.after({
  "duration": 133800,
  "error_message": "java.lang.NullPointerException\r\n\tat com.teknotrait.automation.zumic.stepDefinitions.Hooks.tearDown(Hooks.java:68)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "[TC_3] Verify forgot password functionality for existing user",
  "description": "",
  "id": "login-validation;[tc-3]-verify-forgot-password-functionality-for-existing-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@TC_3"
    },
    {
      "line": 51,
      "name": "@forgot_Pwd"
    },
    {
      "line": 51,
      "name": "@login_logout"
    },
    {
      "line": 51,
      "name": "@smokeTest"
    },
    {
      "line": 51,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "user navigates to forgot password page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user enters valid \u003cemailID\u003e to get activation link to reset password",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user clicks on \u0027RESET\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "confirmation \u0027Success\u0027 message is displayed on page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user gets Activation Link in entered email Id \u003cemailID\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user clicks on password reset link",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user resets password with \u003cnewPassword\u003e and \u003cconfirmPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user clicks on \u0027CONFIRM\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User logins in zumic using new password",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "login-validation;[tc-3]-verify-forgot-password-functionality-for-existing-user;",
  "rows": [
    {
      "cells": [
        "emailID",
        "newPassword",
        "confirmPassword"
      ],
      "line": 66,
      "id": "login-validation;[tc-3]-verify-forgot-password-functionality-for-existing-user;;1"
    },
    {
      "cells": [
        "\"forgot_pwd@yopmail.com\"",
        "\"Zumic@1234\"",
        "\"Zumic@1234\""
      ],
      "line": 67,
      "id": "login-validation;[tc-3]-verify-forgot-password-functionality-for-existing-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17645949400,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "[TC_3] Verify forgot password functionality for existing user",
  "description": "",
  "id": "login-validation;[tc-3]-verify-forgot-password-functionality-for-existing-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@login_logout"
    },
    {
      "line": 51,
      "name": "@RegressionTest"
    },
    {
      "line": 51,
      "name": "@smokeTest"
    },
    {
      "line": 51,
      "name": "@forgot_Pwd"
    },
    {
      "line": 51,
      "name": "@TC_3"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "user navigates to forgot password page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user enters valid \"forgot_pwd@yopmail.com\" to get activation link to reset password",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "user clicks on \u0027RESET\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "confirmation \u0027Success\u0027 message is displayed on page",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "user gets Activation Link in entered email Id \"forgot_pwd@yopmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user clicks on password reset link",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "user resets password with \"Zumic@1234\" and \"Zumic@1234\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user clicks on \u0027CONFIRM\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User logins in zumic using new password",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_on_the_Login_Page()"
});
formatter.result({
  "duration": 4171413100,
  "status": "passed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_navigates_to_forgot_password_page()"
});
formatter.result({
  "duration": 1471299600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "forgot_pwd@yopmail.com",
      "offset": 19
    }
  ],
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_enters_valid_to_get_activation_link_to_reset_password(String)"
});
formatter.result({
  "duration": 207803500,
  "error_message": "java.lang.NullPointerException\r\n\tat com.teknotrait.automation.zumic.stepDefinitions.Login_Logout_ForgotPwd_stepDefinition.user_enters_valid_to_get_activation_link_to_reset_password(Login_Logout_ForgotPwd_stepDefinition.java:108)\r\n\tat ✽.When user enters valid \"forgot_pwd@yopmail.com\" to get activation link to reset password(login_logout.feature:55)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_clicks_on_RESET_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.confirmation_Success_message_is_displayed_on_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "forgot_pwd@yopmail.com",
      "offset": 47
    }
  ],
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_gets_Activation_Link_in_entered_email_Id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_clicks_on_password_reset_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Zumic@1234",
      "offset": 27
    },
    {
      "val": "Zumic@1234",
      "offset": 44
    }
  ],
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_resets_password_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_clicks_on_CONFIRM_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Logout_ForgotPwd_stepDefinition.user_logins_in_zumic_using_new_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4458612500,
  "error_message": "java.lang.NullPointerException\r\n\tat com.vimalselvam.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:94)\r\n\tat com.teknotrait.automation.zumic.stepDefinitions.Hooks.tearDown(Hooks.java:63)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});