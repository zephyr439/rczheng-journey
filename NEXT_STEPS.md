# Next Steps for R. Zheng's World

## What I've Created

I've built a complete, modern, artistic personal biography website with:

✅ **HTML Structure** (`index.html`)
- Video hero section (your intro video as the page header)
- Artistic bio text beneath video
- Education section with resume link
- Travel & Photography gallery (6 continents, expandable sections)
- Statistics table
- All required HTML elements (lists, tables, links, etc.)

✅ **Modern CSS Design** (`styles.css`)
- Dark artistic theme (black/gold color scheme)
- Smooth animations and transitions
- Responsive (mobile-friendly)
- Hover effects
- Clean, professional typography

✅ **Interactive JavaScript** (`script.js`)
- Smooth scrolling
- Expandable/collapsible continent sections
- Fade-in animations
- Active navigation highlighting

✅ **Git Repository**
- Initialized with all files
- Git LFS configuration ready for large video file
- Professional README and documentation

---

## What YOU Need to Do Now

### 1. Create GitHub Repository (5 minutes)

Since I don't have access to GitHub CLI, you'll need to create the repository manually:

1. Go to https://github.com/new
2. Repository name: `engs4-lab1`
3. Description: "Personal biography website for Eng 4 Lab 1"
4. Public or Private (your choice)
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

7. Then in your terminal on Windows:
   ```bash
   cd C:\path\to\where\you\want\it
   git clone /home/zephyr/2025/engs4-lab1
   cd engs4-lab1
   git remote add origin https://github.com/YOUR_USERNAME/engs4-lab1.git
   git push -u origin main
   ```

---

### 2. Install Git LFS (5 minutes)

Download and install from: https://git-lfs.github.com/

Then run:
```bash
git lfs install
```

---

### 3. Add Your Content

#### A. Video (Required)
1. Copy your video: `C:\Users\35353\Videos\My Movie B&W.mp4`
2. Rename to `intro.mp4`
3. Place in `assets/video/intro.mp4`
4. Commit:
   ```bash
   git add assets/video/intro.mp4
   git commit -m "Add intro video"
   git push
   ```

#### B. Photos (Required - 30 total)
Select and rename 5 photos for each continent:
- `north-america-1.jpg` through `north-america-5.jpg`
- `south-america-1.jpg` through `south-america-5.jpg`
- `europe-1.jpg` through `europe-5.jpg`
- `africa-1.jpg` through `africa-5.jpg`
- `asia-1.jpg` through `asia-5.jpg`
- `oceania-1.jpg` through `oceania-5.jpg`

Place in respective folders under `assets/images/`

#### C. Photo Captions (Required)
Edit `index.html` and replace "Location caption 1", "Location caption 2", etc. with actual location names like:
- "Banff National Park, Canada"
- "Serengeti National Park, Tanzania"
- "Kyoto Temple, Japan"
- etc.

#### D. Resume (Required)
Export your resume as `resume.pdf` and place in `assets/documents/resume.pdf`

#### E. Audio Clip (Required - missing!)
**This is the only missing requirement!**

You need to add a sound clip. Here's how:

1. Find or record an audio file (nature sounds, travel ambience, etc.)
2. Name it something like `ambient-sound.mp3`
3. Place in `assets/audio/` folder (you'll need to create this)
4. Add this HTML after line 29 in `index.html`:

```html
<section class="audio-section content-section">
    <h2>Sounds of Travel</h2>
    <p>Listen to ambient sounds from my journeys:</p>
    <audio controls>
        <source src="assets/audio/ambient-sound.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</section>
```

5. Add this CSS to `styles.css`:

```css
.audio-section {
    text-align: center;
}

.audio-section audio {
    margin-top: 1rem;
    width: 100%;
    max-width: 600px;
}
```

---

### 4. Optional Customizations

You might want to update:
- Travel statistics in the table (if numbers aren't accurate)
- Instagram link in footer (change to your actual Instagram)
- Any text that needs personalization

---

### 5. Deploy to Vercel (10 minutes)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `engs4-lab1` repository
5. Settings:
   - Framework: Other
   - Build Command: (leave empty)
   - Output Directory: ./
6. Deploy!

After deployment, configure domain routing:
- Add `vercel.json` if not already present (for `/engs4/lab1` path)

---

### 6. Update Main Website

Add a link to your Lab 1 project on your main rczheng.com page, similar to the HCI project link.

I'll help you with this step once the lab1 site is deployed!

---

## Files Overview

```
engs4-lab1/
├── index.html                   # Main website
├── styles.css                   # All styling
├── script.js                    # Interactivity
├── README.md                    # Project documentation
├── SETUP_INSTRUCTIONS.md        # Detailed setup guide
├── ASSIGNMENT_CHECKLIST.md      # Requirements checklist
├── NEXT_STEPS.md               # This file
├── .gitattributes              # Git LFS configuration
├── .gitignore                  # Git ignore rules
└── assets/
    ├── video/
    │   └── intro.mp4           # YOUR VIDEO (to add)
    ├── images/
    │   ├── north-america/      # 5 photos (to add)
    │   ├── south-america/      # 5 photos (to add)
    │   ├── europe/             # 5 photos (to add)
    │   ├── africa/             # 5 photos (to add)
    │   ├── asia/               # 5 photos (to add)
    │   └── oceania/            # 5 photos (to add)
    ├── documents/
    │   └── resume.pdf          # YOUR RESUME (to add)
    └── audio/                  # CREATE THIS
        └── (your-audio.mp3)    # ADD AUDIO FILE
```

---

## Questions?

Let me know when you're ready for the next step, or if you need help with any of these tasks!

**Estimated total time:** 1-2 hours (mostly selecting and preparing photos)
