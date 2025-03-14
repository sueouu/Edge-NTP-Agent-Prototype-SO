chrome.runtime.onInstalled.addListener(() => {
  console.log("Proactive Assistant Installed");
});

// Function to extract news domain from browsing history
function extractNewsDomain(url) {
  const newsDomains = {
    "cnn.com": "CNN",
    "reuters.com": "Reuters",
    "bbc.com": "BBC",
    "nytimes.com": "New York Times",
    "bloomberg.com": "Bloomberg"
  };

  let parsedUrl = new URL(url);
  let hostname = parsedUrl.hostname.replace("www.", "");

  for (let domain in newsDomains) {
    if (hostname.includes(domain)) {
      return newsDomains[domain];
    }
  }

  return null;
}

// Function to find the latest visited news site
function detectLatestNewsDomain(callback) {
  chrome.history.search({ text: "", maxResults: 50 }, function (historyItems) {
    let latestNewsSite = null;

    for (let item of historyItems) {
      let newsDomain = extractNewsDomain(item.url);
      if (newsDomain) {
        latestNewsSite = newsDomain;
        break; // Stop at the latest visited news site
      }
    }

    callback(latestNewsSite || "latest news"); // Default text if no news site found
  });
}

// Ensures all async responses use sendResponse properly
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_LATEST_SEARCH") {
    chrome.history.search({ text: "", maxResults: 50 }, function (historyItems) {
      let latestSearch = "something special";

      for (let item of historyItems) {
        let url = new URL(item.url);
        let params = new URLSearchParams(url.search);

        if (url.hostname.includes("amazon.com") && params.has("k")) {
          latestSearch = params.get("k").replace(/\+/g, " ");
          break;
        } else if (url.hostname.includes("ebay.com") && params.has("_nkw")) {
          latestSearch = params.get("_nkw").replace(/\+/g, " ");
          break;
        } else if (url.hostname.includes("walmart.com") && params.has("query")) {
          latestSearch = params.get("query").replace(/\+/g, " ");
          break;
        } else if (url.hostname.includes("target.com") && params.has("searchTerm")) {
          latestSearch = params.get("searchTerm").replace(/\+/g, " ");
          break;
        } else if (url.hostname.includes("bestbuy.com") && params.has("st")) {
          latestSearch = params.get("st").replace(/\+/g, " ");
          break;
        }
      }

      sendResponse({ searchQuery: latestSearch });
    });
    return true; // Keep the message channel open
  }

  if (request.type === "GET_LATEST_JOB_SEARCH") {
    chrome.history.search({ text: "linkedin.com/jobs", maxResults: 50 }, function (historyItems) {
      let latestJobSearch = "job opportunities";

      for (let item of historyItems) {
        let url = new URL(item.url);
        let params = new URLSearchParams(url.search);
        if (params.has("keywords")) {
          latestJobSearch = params.get("keywords").replace(/%20/g, " ");
          break;
        }
      }

      sendResponse({ jobQuery: latestJobSearch });
    });
    return true; // Keep the message channel open
  }

  if (request.type === "GET_LATEST_NEWS") {
    detectLatestNewsDomain(newsDomain => {
      sendResponse({ newsDomain });
    });
    return true; // Keep the message channel open
  }

  return false; // If no matching request type, return false
});
