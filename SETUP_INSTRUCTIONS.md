# Setup Instructions for R. Zheng's World

## Step 1: Install Git LFS on Your Windows Computer

1. Download Git LFS from: https://git-lfs.github.com/
2. Run the installer
3. Open Command Prompt or PowerShell and run:
   ```bash
   git lfs install
   ```

## Step 2: Clone and Setup the Repository

1. Navigate to where you want the project:
   ```bash
   cd C:\Users\35353\Documents
   ```

2. Clone this repository (after I push it to GitHub):
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/engs4-lab1.git
   cd engs4-lab1
   ```

## Step 3: Add Your Video

1. Copy your video from:
   ```
   C:\Users\35353\Videos\My Movie B&W.mp4
   ```

2. Rename it to `intro.mp4`

3. Place it in the `assets/video/` folder:
   ```bash
   copy "C:\Users\35353\Videos\My Movie B&W.mp4" assets\video\intro.mp4
   ```

4. Add and commit using Git LFS:
   ```bash
   git add assets/video/intro.mp4
   git commit -m "Add intro video"
   git push
   ```

## Step 4: Add Your Photos (36 photos total)

### Naming Convention:
- **North America**: `north-america-1.jpg` to `north-america-6.jpg`
- **South America**: `south-america-1.jpg` to `south-america-6.jpg`
- **Europe**: `europe-1.jpg` to `europe-6.jpg`
- **Africa**: `africa-1.jpg` to `africa-6.jpg`
- **Asia**: `asia-1.jpg` to `asia-6.jpg`
- **Oceania**: `oceania-1.jpg` to `oceania-6.jpg`

### Steps:
1. Select 6 photos for each continent
2. Rename them according to the convention above
3. Place them in the corresponding folders:
   - `assets/images/north-america/`
   - `assets/images/south-america/`
   - `assets/images/europe/`
   - `assets/images/africa/`
   - `assets/images/asia/`
   - `assets/images/oceania/`

4. Commit and push:
   ```bash
   git add assets/images/
   git commit -m "Add travel photos"
   git push
   ```

## Step 5: Add Photo Captions

Open `index.html` and update the `<figcaption>` tags for each photo with specific location names.

For example, change:
```html
<figcaption>Location caption 1</figcaption>
```

To:
```html
<figcaption>Banff National Park, Canada</figcaption>
```

Do this for all 30 photos.

## Step 6: Add Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in `assets/documents/resume.pdf`
4. Commit and push:
   ```bash
   git add assets/documents/resume.pdf
   git commit -m "Add resume"
   git push
   ```

## Step 7: Update Statistics Table (Optional)

If you want to update the travel statistics in the table, edit the `index.html` file and modify the table rows in the "Journey Statistics" section.

## Step 8: Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your `engs4-lab1` repository
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (leave empty)
   - **Output Directory**: `./`
6. Click "Deploy"

## Step 9: Configure Custom Domain

After deployment:

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add domain: `rczheng.com`
4. Follow Vercel's instructions to configure DNS
5. Add a rewrite rule to make it accessible at `/engs4/lab1`:

   Create a `vercel.json` file in the root:
   ```json
   {
     "rewrites": [
       { "source": "/engs4/lab1", "destination": "/" },
       { "source": "/engs4/lab1/:path*", "destination": "/:path*" }
     ]
   }
   ```

## Step 10: Test Your Website

Visit: `https://rczheng.com/engs4/lab1`

### Checklist:
- [ ] Video plays automatically
- [ ] All 30 photos load correctly
- [ ] Photo captions are accurate
- [ ] Resume link works (opens in new tab, no download)
- [ ] Navigation links jump to correct sections
- [ ] Continent sections expand/collapse
- [ ] "Back to Top" link works
- [ ] "Home" link goes to rczheng.com
- [ ] Website looks good on mobile

## Troubleshooting

### Video not playing:
- Check file size (should be under 100MB)
- Verify Git LFS is tracking the file: `git lfs ls-files`
- Try converting to a different format or compression

### Photos not loading:
- Verify file names match exactly (case-sensitive)
- Check file paths in `index.html`
- Ensure files are committed and pushed to GitHub

### Resume downloads instead of viewing:
- Make sure the link has `target="_blank"` attribute
- The PDF should open in a new browser tab, not download

## Need Help?
- Git LFS docs: https://git-lfs.github.com/
- Vercel docs: https://vercel.com/docs
- HTML/CSS reference: https://developer.mozilla.org/
