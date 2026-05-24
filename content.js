let isObserving = false;
document.addEventListener('click', (e) => {
    if (e.target.closest('button') && !isObserving) {
        monitorForSuccess();
    }
});

function monitorForSuccess() {
    isObserving = true;
    const observer = new MutationObserver((mutations) => {
        const successElement = document.querySelector('[data-e2e-locator="submission-result-accepted-verdict"]')
            || document.querySelector('.text-green-s');
        if (successElement) {
            const code = getCodeFromEditor();
            const title = document.title.split("-")[0].trim();
            chrome.runtime.sendMessage({
                action: "upload_to_github",
                code: code,
                problemTitle: title
            });
            observer.disconnect();
            isObserving = false;
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(() => {
        observer.disconnect();
        isObserving = false;
    }, 30000);
}

function getCodeFromEditor() {
    const lines = document.querySelectorAll(".view-lines .view-line");
    let code = "";
    lines.forEach(line => code += line.innerText + "\n");
    return code;
}