document.addEventListener("DOMContentLoaded", function() {
  const shoppingCard = document.getElementById("shoppingCard");
  const jobCard = document.getElementById("jobCard");
  const newsCard = document.getElementById("newsCard");

  const shoppingPromptTextElement = document.getElementById("shoppingPromptText");
  const jobPromptTextElement = document.getElementById("jobPromptText");
  const newsPromptTextElement = document.getElementById("newsPromptText");

  // Request latest shopping search query
  chrome.runtime.sendMessage({ type: "GET_LATEST_SEARCH" }, response => {
    if (response && response.searchQuery) {
      shoppingPromptTextElement.textContent = `Looking for ${response.searchQuery}? Let's find the best options!`;
      shoppingCard.dataset.searchQuery = response.searchQuery;
    }
  });

  // Request latest job search query
  chrome.runtime.sendMessage({ type: "GET_LATEST_JOB_SEARCH" }, response => {
    if (response && response.jobQuery) {
      jobPromptTextElement.textContent = `Explore latest ${response.jobQuery} job opportunities!`;
      jobCard.dataset.jobQuery = response.jobQuery;
    }
  });

  // Request latest news domain
  chrome.runtime.sendMessage({ type: "GET_LATEST_NEWS" }, response => {
    if (response && response.newsDomain) {
      newsPromptTextElement.textContent = `Catch up on the latest ${response.newsDomain} news!`;
      newsCard.dataset.newsDomain = response.newsDomain;
    }
  });

  function openCopilot(query) {
    let copilotUrl = `https://copilot.microsoft.com/?q=${encodeURIComponent(query)}`;

    // Define window size for a side-panel effect
    const windowWidth = 400; // Side panel width
    const windowHeight = window.screen.height;
    const windowLeft = window.screen.width - windowWidth; // Dock to right

    // Open Copilot as a right-docked window
    window.open(copilotUrl, "_blank", `width=${windowWidth},height=${windowHeight},top=0,left=${windowLeft}`);
  }

  shoppingCard.addEventListener("click", function() {
    let searchQuery = shoppingCard.dataset.searchQuery || "something special";
    let copilotQuery = `help me find the best ${searchQuery} for me`;
    openCopilot(copilotQuery);
  });

  jobCard.addEventListener("click", function() {
    let jobQuery = jobCard.dataset.jobQuery || "job opportunities";
    let copilotQuery = `latest ${jobQuery} jobs in my area`;
    openCopilot(copilotQuery);
  });

  newsCard.addEventListener("click", function() {
    let newsDomain = newsCard.dataset.newsDomain || "latest news";
    let copilotQuery = `summarize the latest ${newsDomain} news for me`;
    openCopilot(copilotQuery);
  });
});
