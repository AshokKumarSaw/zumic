package com.teknotrait.automation.zumic.runner;

import java.io.File;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


import com.vimalselvam.cucumber.listener.Reporter;
import com.teknotrait.automation.zumic.fileHandles.PropertyFileHandling;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		tags = {"@RegressionTest" },
		features = { "src/test/resources/featureFiles/" }, 
		glue = { "com.teknotrait.automation.zumic.stepDefinitions" }, 
	//	plugin = { "pretty", "com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:report/Zumic-Automation-Report.html" },
		plugin = {"pretty", "html:report/Zumic-Automation-Report"},
		monochrome = true 
		//strict = false, 
		//dryRun = true

)

public class TestRunner {

	@AfterClass
	public static void writeExtentReport() {

		Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
		PropertyFileHandling prop = new PropertyFileHandling();
		Reporter.setSystemInfo("Server", prop.getProperty("environment"));
		Reporter.setSystemInfo("Browser", prop.getProperty("Browser"));

	}

}
