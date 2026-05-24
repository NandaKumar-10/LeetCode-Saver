# LeetCode to GitHub

A Chrome Extension that automatically saves your successfully accepted LeetCode solutions directly into your GitHub repository.

## Features

- **Automated Saving**: Automatically monitors for an "Accepted" verdict on LeetCode.
- **Easy Upload**: Extracts your solution code and uploads it directly to your GitHub repository.
- **Background Sync**: Operates smoothly in the background via the GitHub API.

## Prerequisites

- A GitHub account.
- A GitHub Personal Access Token.
- A GitHub Repository to store your LeetCode solutions.

## Installation

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click on **Load unpacked** in the top left.
5. Select the `Leetcode saver` directory (where this project's `manifest.json` is located).

## Setup & Configuration

1. **Create a GitHub Token:**
   - Go to [GitHub Token settings](https://github.com/settings/tokens/new).
   - Select **Generate new token (classic)**.
   - Set an appropriate note (e.g., "LeetCode Sync").
   - ⚠️ **Important:** Check the `repo` scope to grant full control of private and public repositories.
   - Click **Generate token**.
   - Copy the token (starts with `ghp_...`).

2. **Configure the Extension:**
   - Click the **LeetCode to GitHub** extension icon in your Chrome browser.
   - Paste your GitHub Personal Access Token.
   - Enter your target repository name in the format: `username/repo-name`.
   - Click **Save**.

## How It Works

Once set up, whenever you submit a solution on LeetCode and receive an **Accepted** verdict, the extension will automatically extract your code from the editor and commit it as a new file (e.g., `Two_Sum.py`) into your configured GitHub repository.

## Limitations

- The current implementation saves files with a `.py` extension by default. 
- It relies on DOM manipulation to extract the code and detect the accepted status. If LeetCode changes their UI layout, the extension might need an update.

## Privacy & Security

Your GitHub Personal Access Token is saved locally in your browser's storage (`chrome.storage.sync`) and is only used to upload files to your designated repository. It is never transmitted anywhere else.
