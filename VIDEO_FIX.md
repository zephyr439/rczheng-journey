# Video Not Showing - Fix Instructions

## Problem
The video is tracked by Git LFS, but Vercel's free tier doesn't automatically serve Git LFS files.

## Solution Options

### Option 1: Enable Git LFS in Vercel (Recommended)
1. Go to your Vercel project dashboard
2. Go to Settings → Git
3. Enable "Git LFS" toggle
4. Redeploy the project

### Option 2: Remove from Git LFS and commit as regular file
Since the video is 48MB (under GitHub's 100MB limit), we can commit it as a regular file:

```bash
cd /home/zephyr/2025/engs4-lab1

# Remove the file from Git LFS tracking
git lfs untrack "*.mp4"

# Remove the file from Git
git rm --cached assets/video/intro.mp4

# Add it back as a regular file
git add assets/video/intro.mp4

# Commit
git commit -m "Switch video from Git LFS to regular git tracking"

# Push
git push
```

After this, Vercel will serve the video correctly.

### Option 3: Host video elsewhere
Upload the video to a service like:
- YouTube (unlisted)
- Vimeo
- Cloudinary
- AWS S3

Then update the video src in index.html to point to the hosted URL.

## Recommended: Option 1
Try enabling Git LFS in Vercel settings first. It's the cleanest solution.
