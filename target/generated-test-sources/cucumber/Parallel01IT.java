import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.teknotrait.automation.zumic.fileHandles.PropertyFileHandling;
import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


import java.io.File;


@RunWith(Cucumber.class)
@CucumberOptions(
        strict = true,
        features = {"C:/Users/User/Desktop/zumic/src/test/resources/featureFiles/login_logout.feature"},
        plugin = {"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:C:/Users/User/Desktop/zumic/report/1.html"},
        monochrome = false,
        tags = {"@login_logout, @smokeTest, @RegressionTest"},
        glue = {"com.teknotrait.automation.zumic.stepDefinitions"})

public class Parallel01IT {

	@BeforeClass
    public static void beforeClass() {
    }

    @AfterClass
    public static void afterClass(){
		Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
		PropertyFileHandling prop = new PropertyFileHandling();
		Reporter.setSystemInfo("Server", prop.getProperty("environment"));
		Reporter.setSystemInfo("Browser", prop.getProperty("Browser"));

	}
	
}