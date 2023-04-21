package com.teknotrait.automation.zumic.fileHandles;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.util.Properties;

public class PropertyFileHandling {

	public String getProperty(String key) {

		String value = "";

		try {

			FileReader reader = new FileReader(System.getProperty("user.dir") + "/src/main/resources/env.properties");

			Properties prop = new Properties();
			prop.load(reader);
			value = prop.getProperty(key);

		} catch (Exception e) {

			e.printStackTrace();
		}

		return value;
	}

	public void setProperty(String key, String value) {

		try {

			Properties prop = new Properties();
			prop.setProperty(key, value);

			File file = new File(System.getProperty("user.dir") + "/src/main/resources/env.properties");
			FileOutputStream fileOut = new FileOutputStream(file);
			fileOut.close();

		} catch (Exception e) {

			e.printStackTrace();

		}
	}

}
