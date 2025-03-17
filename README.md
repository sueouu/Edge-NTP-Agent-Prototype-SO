# Edge Extension - Personal Assistant 

## Overview
The **Personal Assistant** browser extension enhances your browsing experience by providing AI-powered assistance for **shopping**, **career opportunities**, and **news updates**. It dynamically analyzes your browsing history and offers personalized recommendations.

## Features
- **Shopping Assistant**: Detects recent shopping searches and helps you find the best deals.
- **Career Assistant**: Extracts job search queries from LinkedIn and suggests relevant job opportunities.
- **News Assistant**: Identifies the latest visited news site and summarizes the latest headlines for you.
- **AI-Powered Search**: Opens Copilot with relevant prompts based on your browsing activity.
- **Side Panel Support**: Opens Copilot in a right-docked small window for a seamless user experience.

## Supported Domains

The extension detects activity from the following websites:

### **Shopping Domains:**
- [Amazon](https://www.amazon.com/)
- [eBay](https://www.ebay.com/)
- [Walmart](https://www.walmart.com/)
- [Target](https://www.target.com/)
- [Best Buy](https://www.bestbuy.com/)

### **Job Search Domains:**
- [LinkedIn Jobs](https://www.linkedin.com/jobs/)

### **News Domains:**
- [CNN](https://www.cnn.com/)
- [Reuters](https://www.reuters.com/)
- [BBC](https://www.bbc.com/)
- [The New York Times](https://www.nytimes.com/)
- [Bloomberg](https://www.bloomberg.com/)

## Installation
1. **Download the extension**:  
   [Download personal-assistant-extension.zip](sandbox:/mnt/data/personal-assistant-extension.zip)  
2. **Extract the zip file** to a convenient location.
3. **Open Microsoft Edge** and navigate to `edge://extensions/`.
4. **Enable Developer Mode** (toggle in the bottom left corner).
5. **Click "Load unpacked"** and select the extracted folder.
6. The **Personal Assistant** extension will now be installed and ready to use!

## How It Works
1. **New Tab Experience**:  
   - When you open a new tab, the extension displays three cards:
     - **Shopping Assistant** 
     - **Career Assistant** 
     - **News Assistant** 
   - Each card provides a **personalized prompt** based on your browsing history.

2. **Click on any card** to open **Microsoft Copilot** with an AI-powered query:
   - Example: *"Summarize the latest CNN news for me."*
   - Example: *"Find the best deals on wireless headphones for me."*

## Privacy & Permissions
- The extension **only accesses your browsing history** to detect **shopping searches, job listings, and news sites**.
- No data is stored, collected, or sent to external servers.
- The extension operates **entirely locally on your device**.

## Limitations
- The extension currently retrieves **up to the last 50 history entries**.
- It does **not specify a time range**, so it pulls the most recent history available.
- If **browsing history is cleared**, the extension will not be able to access past searches.
- **Incognito/Private Mode**: The extension **cannot** access browsing history from private sessions.

## Troubleshooting
- If the extension does not appear in new tabs:
  - Ensure **Developer Mode** is enabled in `edge://extensions/`.
  - Try **reloading the unpacked extension**.
  - Open a new tab
