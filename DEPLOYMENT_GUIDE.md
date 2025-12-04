# GitHub Pages Deployment Guide

This guide will help you deploy the Paradise Nursery application to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The paradise-nursery project on your local machine

## Step-by-Step Deployment Instructions

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name your repository (e.g., "paradise-nursery")
5. Make sure it's set to **Public**
6. Do NOT initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Update Vite Configuration (if needed)

If your repository name is different from "paradise-nursery", update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Change this to match your repo name
})
```

### Step 3: Initialize Git and Push to GitHub

Open your terminal in the paradise-nursery directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Paradise Nursery shopping cart application"

# Add your GitHub repository as remote (replace with your repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
5. The workflow file is already included in `.github/workflows/deploy.yml`
6. The deployment will start automatically

### Step 5: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once it's done, you'll see a green checkmark

### Step 6: Access Your Deployed Application

Your application will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example:
- Username: `johnsmith`
- Repository: `paradise-nursery`
- URL: `https://johnsmith.github.io/paradise-nursery/`

## Troubleshooting

### Issue: Pages not showing up

**Solution**:
- Check that GitHub Pages is enabled in Settings > Pages
- Make sure "GitHub Actions" is selected as the source
- Verify the workflow completed successfully in the Actions tab

### Issue: Page shows but looks broken (no CSS/images)

**Solution**:
- Check that the `base` path in `vite.config.js` matches your repository name
- Make sure to include the leading `/` and trailing `/`
- Example: `base: '/paradise-nursery/'`

### Issue: 404 on page refresh

**Solution**:
This is normal for client-side routing. GitHub Pages doesn't natively support client-side routing. The app will still work if you navigate from the home page.

### Issue: Workflow fails

**Solution**:
1. Check the Actions tab for error messages
2. Ensure all dependencies are in `package.json`
3. Try running `npm run build` locally to check for build errors

## Making Updates

After the initial deployment, any time you want to update your live site:

```bash
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Description of your changes"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.

## Manual Deployment Alternative

If you prefer not to use GitHub Actions, you can deploy manually:

1. Build the project:
```bash
npm run build
```

2. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

3. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

5. In GitHub Settings > Pages, select:
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" / (root)

## Verification Checklist

After deployment, verify these features work:

- [ ] Landing page loads with background image
- [ ] "Get Started" button navigates to products page
- [ ] All 9 plants display correctly in 3 categories
- [ ] Add to Cart button works and updates badge
- [ ] Cart icon shows correct count
- [ ] Shopping cart displays items correctly
- [ ] Increase/decrease quantity buttons work
- [ ] Delete button removes items
- [ ] Total cost calculates correctly
- [ ] Navigation between all pages works

## Need Help?

If you encounter issues not covered here:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Check the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Review the GitHub Actions workflow logs in your repository

## Project Files for Reference

Important configuration files:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `vite.config.js` - Vite configuration with base path
- `package.json` - Project dependencies and scripts

All files are already configured and ready to deploy!
