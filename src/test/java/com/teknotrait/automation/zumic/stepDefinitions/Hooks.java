package com.teknotrait.automation.zumic.stepDefinitions;

import com.aventstack.extentreports.ExtentReports;
import com.teknotrait.automation.zumic.webActions.WebPageActions;
import com.vimalselvam.cucumber.listener.Reporter;
import net.bull.javamelody.*;
import net.bull.javamelody.internal.model.*;
import net.bull.javamelody.internal.common.*;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends WebPageActions {

	// private static boolean deleteReportFlag = true;

	@Before
	public void setUp() throws Exception {

		// if (deleteReportFlag) {
		// deleteAllReports();
		// deleteReportFlag = false;
		// }
		
		long before = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
	    System.gc();
	    long after = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
	    System.out.println(I18N.getFormattedString("ramasse_miette_execute", Math.round((before - after) / 1024)));

		String browser = getProperty("Browser");
		String url = getProperty("testSiteURL");
		launchBroswer(browser);
		if (getProperty("environment").equalsIgnoreCase("qa")) {
			String serverUserName = "zumic";
			String serverPassword = "writeMoreTests";
			String authenticatedURL = url.split("//")[0] + "//" + serverUserName + ":" + serverPassword + "@"
					+ url.split("//")[1];
			System.err.println("authenticatedURL:" + authenticatedURL);
			sendUrl(authenticatedURL);
		} else {
			sendUrl(url);
		}
	}

	@After()
	public void tearDown(Scenario scenario) throws Exception {

		String scenarionName = scenario.getName();

		String fileName = scenarionName.substring(0, scenarionName.lastIndexOf("]") + 1);

		if (scenario.isFailed()) {
			String snapshot = getScreenShot(fileName);

			/*
			 * String path = System.getProperty("user.dir") + File.separator + "screenshots"
			 * + File.separator + fileName + ".png";
			 */

			Reporter.addScreenCaptureFromPath(snapshot);

		}

		ExtentReports report = Reporter.getExtentReport();
		report.flush();

		quit();
		renameReport();
		generateZippedReport();

	}
}
