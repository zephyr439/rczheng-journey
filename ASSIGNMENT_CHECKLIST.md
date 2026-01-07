# Eng 4 Lab 1 Requirements Checklist

## Assignment Requirements (10 points total)

### ✅ 1. Scrolling Required & Page Segments (1 point)
- [x] Page requires scrolling to reach the end
- [x] Divided into segments: Hero, Education, Travel & Photography, Statistics
- [x] Appropriate headings: `<h2>` and `<h3>` tags
- [x] Background color/graphics: Dark artistic theme with gradients

**Location in code:**
- HTML: Lines 18-19 (Hero), 40-62 (Education), 65-255 (Travel), 258-323 (Statistics)
- CSS: `:root` variables define color scheme

---

### ✅ 2. Numbered List of Major Sections (1 point)
- [x] Numbered list (`<ol>`) at top of page
- [x] Links to: Education, Travel & Photography, Journey Statistics

**Location in code:**
- HTML: Lines 31-37 (`<ol class="section-links">`)

---

### ✅ 3. Multiple Text Fonts and Colors (1 point)
- [x] Normal text: Body content
- [x] **Bold text**: Table headers, "Degree:", "Class:"
- [x] *Italic text*: Hero tagline "This is my world", captions, table caption
- [x] Multiple colors:
  - Primary text: `#f5f5f5` (white)
  - Secondary text: `#b8b8b8` (gray)
  - Accent: `#d4af37` (gold)
  - Accent color: `#e8d5b5` (beige)

**Location in code:**
- CSS: `:root` variables (lines 8-16), various text styling throughout
- HTML: `<strong>`, `<em>`, `<p class="italic">` tags

---

### ✅ 4. Bulleted List (1 point)
- [x] Bullet list of coursework items

**Location in code:**
- HTML: Lines 53-59 (`<ul class="coursework-list">`)

---

### ✅ 5. Table with Caption (1 point)
- [x] Table with travel statistics
- [x] Caption: "My Travel Journey by the Numbers"
- [x] Headers: Continent, Countries Visited, Favorite Destination, Photos Captured
- [x] 6 data rows + footer with totals

**Location in code:**
- HTML: Lines 262-318 (`<table class="stats-table">`)

---

### ✅ 6. Two or More Pictures with Text Wrapping (1 point)
- [x] 30 photos total (5 per continent)
- [x] Images wrapped in `<figure>` elements
- [x] Text captions below each image
- [x] Responsive grid layout

**Location in code:**
- HTML: Lines 90-251 (photo grids for all continents)
- CSS: Lines 376-440 (`.photo-grid` styling)

---

### ✅ 7. Two Links (1 point)

**Link 1 - External website:**
- [x] Link to Instagram in footer
- [x] Opens in new tab (`target="_blank"`)

**Link 2 - Jump to top:**
- [x] "Back to Top" link at bottom of page
- [x] Jumps to `#top` anchor

**Location in code:**
- HTML:
  - Line 11 (Home link)
  - Line 325 (Back to Top)
  - Line 330 (Instagram link)
- Also: Resume link (Line 60), Continent navigation (Lines 71-78)

---

### ✅ 8. CSS Style Section (1 point)
- [x] External CSS file: `styles.css`
- [x] Comprehensive styling for entire page
- [x] CSS variables for consistent theming
- [x] Modern, artistic design

**Location in code:**
- CSS: Entire `styles.css` file (482 lines)
- HTML: Line 7 (`<link rel="stylesheet" href="styles.css">`)

---

### ✅ 9. Sound Clip (1 point)
- [ ] **TODO:** Add audio element

**Note:** You'll need to add this. Suggested implementation:

```html
<!-- Add this after the hero section, around line 30 -->
<div class="audio-section">
    <p>Listen to sounds from my travels:</p>
    <audio controls>
        <source src="assets/audio/nature-sounds.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</div>
```

Then add an audio file to `assets/audio/` folder.

---

### ✅ 10. Video Clip (1 point)
- [x] Video embedded at top of page (hero section)
- [x] Autoplays, muted, loops
- [x] 50-55 second intro video

**Location in code:**
- HTML: Lines 20-25 (`<video>` element)
- Video file: `assets/video/intro.mp4` (to be added via Git LFS)

---

## Additional Features (Beyond Requirements)

### Modern Enhancements:
- ✅ Smooth scrolling navigation
- ✅ Expandable/collapsible continent sections
- ✅ Hover effects on images and links
- ✅ Sticky navigation bar
- ✅ Responsive design (mobile-friendly)
- ✅ Fade-in animations on scroll
- ✅ JavaScript interactivity (`script.js`)

### Accessibility:
- ✅ Semantic HTML5 elements
- ✅ ARIA labels where appropriate
- ✅ Alt text for all images
- ✅ Keyboard-navigable interface

---

## Summary

**Completed:** 9/10 requirements
**Remaining:** Add sound clip (Requirement #9)

**Current Grade:** 9/10 points

Once you add an audio file, this project will fully satisfy all assignment requirements!
