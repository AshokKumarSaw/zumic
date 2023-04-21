package com.teknotrait.automation.zumic.webActions;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;



import org.apache.commons.codec.binary.Base64;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.zeroturnaround.zip.ZipUtil;

import com.teknotrait.automation.zumic.fileHandles.PropertyFileHandling;

import io.github.bonigarcia.wdm.WebDriverManager;
import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;

public class WebPageActions extends PropertyFileHandling {

	static WebDriver driver;

	public WebDriverWait wait;

	public void launchBroswer(String browserType) {

		if (browserType.equalsIgnoreCase("Chrome")) {

			WebDriverManager.chromedriver().setup();

			driver = new ChromeDriver();

		} else if (browserType.equalsIgnoreCase("IE")) {

			WebDriverManager.iedriver().setup();

			driver = new InternetExplorerDriver();

		} else if (browserType.equalsIgnoreCase("Firefox")) {

			WebDriverManager.firefoxdriver().setup();

			driver = new FirefoxDriver();

		}

		driver.manage().window().maximize();

		driver.manage().timeouts().pageLoadTimeout(300, TimeUnit.SECONDS);

		driver.manage().timeouts().implicitlyWait(10000, TimeUnit.MILLISECONDS);

	}

	public void sendUrl(String url) {

		driver.get(url);

	}

	public void navigateToUrl(String url) {

		driver.navigate().to(url);

	}

	public String getTitle() {

		return driver.getTitle();
	}

	public void customWaitForElement(By locator, long seconds) {

		for (int i = 0; i <= seconds; i++) {

			try {

				if (getElement(locator) == null) {

					Thread.sleep(1000);

				} else {

					break;
				}

			} catch (Exception e) {

				continue;
			}
		}

	}

	public void customWaitAndClick(By locator, long seconds) {

		wait = new WebDriverWait(driver, seconds);

		try {

			wait.until(ExpectedConditions.visibilityOf(getElement(locator)));
			wait.until(ExpectedConditions.elementToBeClickable(locator)).click();

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public WebElement getElement(By locator) {

		return driver.findElement(locator);

	}

	public List<WebElement> getElements(By locator) {

		return driver.findElements(locator);

	}

	public void clickElement(By locator) {

		getElement(locator).click();

	}

	public void enterTextInTextBox(By locator, String text) {

		clearTextInTextBox(locator);
		getElement(locator).sendKeys(text);

	}

	public void clearTextInTextBox(By locator) {

		try {

			getElement(locator).clear();
			Thread.sleep(500);

		} catch (Exception e) {

			e.printStackTrace();
		}

	}

	public String getText(By locator) {

		return getElement(locator).getText();
	}

	public List<String> getTextFormListofWebElements(By locator) {

		List<String> listData = new ArrayList<String>();

		for (WebElement ele : getElements(locator)) {

			listData.add(ele.getText());
		}

		return listData;

	}

	public void pressEnter(By locator) {

		getElement(locator).sendKeys(Keys.ENTER);

	}

	public void quit() {

		driver.quit();
	}

	// // Take screenshot function
	// public String getScreenShot(String ssName) {
	//
	// TakesScreenshot scrShot = ((TakesScreenshot) driver);
	//
	// File srcFile = scrShot.getScreenshotAs(OutputType.FILE);
	//
	// File destFile = new File(
	// System.getProperty("user.dir") + File.separator + "screenshots" +
	// File.separator + ssName + ".png");
	//
	// String encodedBase64 = null;
	// FileInputStream fileInputStreamReader = null;
	//
	// try {
	//
	// fileInputStreamReader = new FileInputStream(srcFile);
	// byte[] bytes = new byte[(int) srcFile.length()];
	// fileInputStreamReader.read(bytes);
	// encodedBase64 = new String(Base64.encodeBase64(bytes));
	//
	// FileUtils.copyFile(srcFile, destFile);
	//
	// } catch (Exception e) {
	//
	// e.printStackTrace();
	// }
	//
	// return "data:image/png;base64," + encodedBase64;
	// }

	// Take screenshot function
	public String getScreenShot(String ssName) {

		String encodedBase64 = null;
		FileInputStream fileInputStreamReader = null;

		try {

			File srcFile = new File(
					System.getProperty("user.dir") + File.separator + "screenshots" + File.separator + ssName + ".png");

			Screenshot screenshot = new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000))
					.takeScreenshot(driver);

			ImageIO.write(screenshot.getImage(), "PNG", srcFile);

			fileInputStreamReader = new FileInputStream(srcFile);
			byte[] bytes = new byte[(int) srcFile.length()];
			fileInputStreamReader.read(bytes);
			encodedBase64 = new String(Base64.encodeBase64(bytes));

		} catch (Exception e) {

			e.printStackTrace();
		}

		return "data:image/png;base64," + encodedBase64;
	}

	// At the end of the test convert the html report into Zipped file
	public void generateZippedReport() {

		try {

			ZipUtil.pack(new File(System.getProperty("user.dir") + "/automationReports"),
					new File(System.getProperty("user.dir") + "\\eargo-automation-report.zip"));

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	// At the beginning of the tests, we run this function to clean up existing test
	// reports
	public void deleteAllReports() {

		File directory = new File(System.getProperty("user.dir") + "/report");

		File[] files = directory.listFiles();
		for (File file : files) {

			file.delete();

		}

	}

	public void scrollToElement(By elementLocator) {

		try {

			String script_string = "var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); var elementTop = arguments[0].getBoundingClientRect().top; window.scrollBy(0, elementTop-(viewPortHeight/4));";
			((JavascriptExecutor) driver).executeScript(script_string, getElement(elementLocator));
			Thread.sleep(1000);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public void scrollDownPage(int pixel) {

		try {

			String script_string = "window.scrollBy(0," + pixel + ")";
			((JavascriptExecutor) driver).executeScript(script_string);
			Thread.sleep(500);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public void scrollToElementViewAndWait(By elementLocator, int seconds) {

		try {

			String script_string = "arguments[0].scrollIntoView();";
			((JavascriptExecutor) driver).executeScript(script_string, getElement(elementLocator));
			Thread.sleep(seconds * 1000);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public void scrollDownInContainer(By scrollableContainerLocator) {

		try {

			String script_string = "arguments[0].scrollTo(0, arguments[0].scrollHeight);";
			((JavascriptExecutor) driver).executeScript(script_string, getElement(scrollableContainerLocator));
			Thread.sleep(500);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public String generatePhoneNumber() {

		Random rand = new Random();
		int num1 = (rand.nextInt(7) + 1) * 100 + (rand.nextInt(8) * 10) + rand.nextInt(8);
		int num2 = rand.nextInt(743);
		int num3 = rand.nextInt(10000);

		DecimalFormat df3 = new DecimalFormat("000"); // 3 zeros
		DecimalFormat df4 = new DecimalFormat("0000"); // 4 zeros

		String phoneNumber = df3.format(num1) + df3.format(num2) + df4.format(num3);

		return phoneNumber;

	}

	public String generateUniqueEmailIDForInsurance() {

		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss");
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String currentTimeStamp = sdf.format(timestamp);
		String timeStampEmail = currentTimeStamp + "@eargoautomation.com";
		return timeStampEmail;
	}

	public String getCurrentURL() {

		return driver.getCurrentUrl();
	}

	public void moveToElement(By locator) {

		Actions action = new Actions(driver);
		action.moveToElement(getElement(locator)).build().perform();
		action.release().perform();
	}

	public void customSwitchToFrame(By locator, int seconds) {

		wait = new WebDriverWait(driver, seconds);
		wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(locator));
	}

	public void switchToParentFrame() {

		driver.switchTo().defaultContent();
	}

	public void openNewWindowAndSwitchToIt() {

		((JavascriptExecutor) driver).executeScript("window.open()");

		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get((tabs.size() - 1)));
	}

	public void navigateToTab(int tabIndex) {

		ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
		driver.switchTo().window(tabs.get(tabIndex));
	}

	public double getFormattedAmount(String amount, int decimalPlace) {

		double formattedAmount = Double.parseDouble(amount.replaceAll("[^.0-9]", ""));
		int scale = (int) Math.pow(10, decimalPlace);
		return (double) Math.round(formattedAmount * scale) / scale;
	}

	public WebElement waitForVisibilityOfElement(By locator, long seconds) {

		try {

			Thread.sleep(seconds);

		} catch (Exception e) {

		}

		wait = new WebDriverWait(driver, seconds);
		return wait.until(ExpectedConditions.visibilityOf(getElement(locator)));

	}

	public boolean isElementPresent(By locator) {

		try {

			driver.findElement(locator);
			return true;

		} catch (Exception e) {

			return false;
		}
	}

	public void waitFor(long seconds) {

		try {

			Thread.sleep(seconds);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public void scrollToPageTop() {

		try {

			String script_string = "window.scrollTo(0, -document.body.scrollHeight)";
			((JavascriptExecutor) driver).executeScript(script_string);
			Thread.sleep(500);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public void clickElementByJS(By locator) {

		JavascriptExecutor js = ((JavascriptExecutor) driver);
		js.executeScript("arguments[0].click();", getElement(locator));

	}

	public Boolean waitForURLtoMatch(String url, long seconds) {

		wait = new WebDriverWait(driver, seconds);
		return wait.until(ExpectedConditions.urlMatches(url));

	}

	public void waitForVisibilityOfElementLocated(By locator, long seconds) {

		wait = new WebDriverWait(driver, seconds);
		wait.until(ExpectedConditions.visibilityOfElementLocated(locator));

	}

	public WebElement customWaitForElementToClick(By locator, long seconds) {

		wait = new WebDriverWait(driver, seconds);
		return wait.until(ExpectedConditions.elementToBeClickable(locator));

	}

	public void waitForPageToLoad(long seconds) {

		wait = new WebDriverWait(driver, seconds);
		wait.until(webDriver -> ((JavascriptExecutor) webDriver).executeScript("return document.readyState")
				.equals("complete"));

	}

	public void refreshPage() {
		driver.navigate().refresh();
	}

	public String getElementAttributeValue(By locator, String attributeName) {

		try {
			return getElement(locator).getAttribute(attributeName);

		} catch (Exception e) {

			return "";
		}

	}

	public void customWaitForWindow(int windowIndex) {

		try {

			wait.until(ExpectedConditions.numberOfWindowsToBe(windowIndex));

		} catch (Exception e) {

			e.printStackTrace();
		}

	}

	/**
	 * 
	 * @author Tapas Mahato
	 *
	 * @param seconds
	 */
	public void selectOptionFromDropDown(By locator, String text) {

		Select selectDrpDwn = new Select(getElement(locator));
		selectDrpDwn.selectByVisibleText(text);

	}

	public void pressBackSpace(By locator) {

		getElement(locator).sendKeys(Keys.BACK_SPACE);

	}

	/**
	 * @author Abinaya Prabakaran
	 */

	public void enterTextAndPressEnter(By locator, String value) {

		if (!(getElementAttributeValue(locator, "value").isEmpty())) {
			clearTextInTextBox(locator);
		}

		getElement(locator).sendKeys(value + Keys.ENTER);

	}

	/**
	 * @author Abinaya Prabakaran
	 * @param locator
	 * @param seconds
	 * @return
	 */
	public String customWaitToGetText(By locator, long seconds) {

		wait = new WebDriverWait(driver, seconds);
		wait.until(ExpectedConditions.elementToBeClickable(locator));
		return getElement(locator).getText();

	}

	public String getCurrentWindowId() {

		try {
			String mainWindow = driver.getWindowHandle();
			return mainWindow;
		} catch (Exception e) {

			e.printStackTrace();
			return null;
		}

	}

	/**
	 * @author Abinaya Prabakaran
	 */
	public void customSwitchToWindow() {

		try {
			// String parentWindow = driver.getWindowHandle();
			// customWaitForWindow(2);
			Set<String> allWindow = driver.getWindowHandles();
			for (String window : allWindow) {
				switchToWindow(window);

			}
		} catch (Exception e) {

			e.printStackTrace();
		}

	}

	/**
	 * @author Abinaya Prabakaran
	 */

	public void switchToWindow(String window) {
		driver.switchTo().window(window);
	}

	/**
	 * 
	 * @author Tapas Mahato
	 *
	 * @param locator
	 * @param seconds
	 */
	public void waitForStalenessOfElementLocated(By locator, long seconds) {
		try {
			wait = new WebDriverWait(driver, seconds);
			wait.until(ExpectedConditions.stalenessOf(getElement(locator)));
		} catch (Exception e) {

		}

	}

	/**
	 * 
	 * @author Tapas Mahato
	 *
	 * @param locator
	 * @param seconds
	 */
	public void waitForInvisibilityOfElementLocated(By locator, long seconds) {
		try {
			wait = new WebDriverWait(driver, seconds);
			wait.until(ExpectedConditions.invisibilityOf(getElement(locator)));
		} catch (Exception e) {

		}

	}

	public void waitForVisibilityOfAllElementLocated(By locator, long seconds) {
		try {
			wait = new WebDriverWait(driver, seconds);
			wait.until(ExpectedConditions.visibilityOfAllElements(getElements(locator)));
		} catch (Exception e) {

		}

	}

	public boolean elementEnabled(By locator) {
		try {

			return getElement(locator).isEnabled();

		} catch (Exception e) {

			return false;
		}

	}

	public boolean elementSelected(By locator) {
		try {

			return getElement(locator).isSelected();

		} catch (Exception e) {
			return false;
		}

	}

	public void waitForElementEnabled(By locator, long seconds) {
		try {
			wait = new WebDriverWait(driver, seconds);
			wait.until(ExpectedConditions.elementToBeClickable(locator));

		} catch (Exception e) {

		}
	}

	public void scrollToWebElementViewAndWait(WebElement element, int seconds) {

		try {

			// String script_string = "arguments[0].scrollIntoView(true);";
			((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
			Thread.sleep(seconds * 1000);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public int generateRandomNumber(int upperbound) {

		Random rand = new Random();
		int randomNumber = (rand.nextInt(upperbound) + 1);

		return randomNumber;
	}

	public void renameReport() {

		File directory = new File(System.getProperty("user.dir") + "/report");

		File[] files = directory.listFiles();

		try {

			for (File file : files) {

				String reportPath = file.getAbsolutePath();
				String reportName = getFeatureName(reportPath);

				File requiredFileName = new File(
						System.getProperty("user.dir") + "\\automationReports\\" + reportName + ".html");
				if (requiredFileName.exists()) {

					requiredFileName.delete();
				}
				file.renameTo(requiredFileName);

			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public String getFeatureName(String path) {

		String content = "";

		try {

			BufferedReader in = new BufferedReader(new FileReader(path));
			String str;

			while ((str = in.readLine()) != null) {

				content += str;
			}

			in.close();

		} catch (IOException e) {

			e.printStackTrace();
		}

		String featureName = content.split("class='test-name'>")[1].split("<")[0];
		return featureName;
	}

	public void scrollToElementViewAndWait(WebElement wbel, int sec) {

		try {

			String script_string = "var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); var elementTop = arguments[0].getBoundingClientRect().top; window.scrollBy(0, elementTop-(viewPortHeight/4));";
			((JavascriptExecutor) driver).executeScript(script_string, wbel);
			Thread.sleep(1000 * sec);

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

	public void waitForURLContains(String urlText, long seconds) {

		wait = new WebDriverWait(driver, seconds);
		wait.until(ExpectedConditions.urlContains(urlText));

	}

	public void navigatebackPage() {
		driver.navigate().back();
	}

	public void clickWebElement(WebElement wbel) {
		try {

			wait.until(ExpectedConditions.elementToBeClickable(wbel)).click();

		} catch (Exception e) {

		}

	}

	/**
	 * @author X-TM
	 * @param amount
	 * @param decimalPlace
	 * @return
	 */
	public double getFormatedAmount(double amount, int decimalPlace) {

		BigDecimal bdDown = new BigDecimal(amount).setScale(decimalPlace, RoundingMode.HALF_UP);
		double formattedAmount = bdDown.doubleValue();
		return formattedAmount;

	}
	
	/**
	 * @author Abinaya Prabakaran
	 */
	public void acceptAlert() {
		driver.switchTo().alert().accept();
	}
	
	public void dismissAlert() {
		driver.switchTo().alert().dismiss();
	}
	
}
