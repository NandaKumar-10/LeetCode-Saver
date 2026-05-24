chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "upload_to_github") {
    
    chrome.storage.sync.get(['githubToken', 'githubRepo'], (data) => {
      const { githubToken, githubRepo } = data;
      
      const filename = request.problemTitle.replace(/\s+/g, '_') + ".py";
      const url = `https://api.github.com/repos/${githubRepo}/contents/${filename}`;

      fetch(url, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Solved ${request.problemTitle}`,
          content: btoa(unescape(encodeURIComponent(request.code)))
        })
      })
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error));
    });
  }
});