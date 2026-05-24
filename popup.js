document.getElementById('save_btn').addEventListener('click', () => {
    const token = document.getElementById('github_token').value;
    const repo = document.getElementById('github_repo').value;
    
    if (!token || !repo) {
        showStatus('Please enter both Token and Repo!', 'red');
        return;
    }

    chrome.storage.sync.set({
        githubToken: token,
        githubRepo: repo
    }, () => {
        showStatus('Saved Successfully!', 'green');
    });
});

function showStatus(text, color) {
    const statusEl = document.getElementById('status');
    statusEl.textContent = text;
    statusEl.style.color = color;
    setTimeout(() => { statusEl.textContent = ''; }, 2000);
}

chrome.storage.sync.get(['githubToken', 'githubRepo'], (items) => {
    if (items.githubToken) document.getElementById('github_token').value = items.githubToken;
    if (items.githubRepo) document.getElementById('github_repo').value = items.githubRepo;
});