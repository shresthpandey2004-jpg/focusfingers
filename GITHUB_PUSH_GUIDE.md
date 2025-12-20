# 🚀 GitHub Push Guide - Focus Fingers

## ❌ Permission Error Fixed

The push failed due to authentication. Here are 3 ways to fix it:

## 🔑 Option 1: Personal Access Token (Recommended)

### Step 1: Create Token
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Focus Fingers Deploy"
4. Select scopes: **repo** (full control)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Step 2: Push with Token
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/shresthpandey2004-jpg/focusfingers.git
git push -u origin main
```

Replace `YOUR_TOKEN` with the token you copied.

## 🔑 Option 2: GitHub CLI (Easiest)

### Install GitHub CLI
```bash
# Windows (if you have winget)
winget install GitHub.cli

# Or download from: https://cli.github.com/
```

### Login and Push
```bash
gh auth login
git push -u origin main
```

## 🔑 Option 3: SSH Key

### Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

### Add to GitHub
1. Copy public key: `cat ~/.ssh/id_ed25519.pub`
2. GitHub → Settings → SSH and GPG keys → New SSH key
3. Paste the key

### Change Remote to SSH
```bash
git remote set-url origin git@github.com:shresthpandey2004-jpg/focusfingers.git
git push -u origin main
```

## 🎯 Quick Fix (Use This)

**Run this command with your GitHub token:**

```bash
git remote set-url origin https://YOUR_GITHUB_TOKEN@github.com/shresthpandey2004-jpg/focusfingers.git
git push -u origin main
```

## ✅ After Successful Push

Your repository will be live at:
**https://github.com/shresthpandey2004-jpg/focusfingers**

Then you can deploy to Vercel:
1. Go to vercel.com
2. Import your GitHub repository
3. Deploy!

---

**Need help?** Create a GitHub Personal Access Token and use Option 1! 🚀