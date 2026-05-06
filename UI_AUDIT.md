# UI Audit Report

**Project:** Portfolio-Subramaniyajothi  
**Date:** 2026-05-04  
**Audited by:** Claude Code (claude-sonnet-4-6)  
**Status:** Open — unfixed as of audit date

---

## Rendering Bugs (break visible output)

### R1 — CSS typo: `pointer-evets-none` — overlay intercepts pointer events
- **File:** `src/sections/About.jsx:29`
- **Detail:** `className="absolute inset-x-0 pointer-evets-none -bottom-4 ..."` — the gradient overlay at the bottom of Grid 1 does not actually ignore pointer events because the class name is misspelled. Clicks on the bottom portion of the card silently land on the invisible overlay instead of the card.
- **Fix:** Change `pointer-evets-none` → `pointer-events-none`.

---

### R2 — Achievements card gradient missing `from-` prefix
- **File:** `src/sections/Testimonial.jsx` (AchievementCard component)
- **Detail:** `bg-gradient-to-r bg-indigo to-storm` — `bg-indigo` is a background-color utility, not a gradient stop. Tailwind reads this as gradient-to-right with no start color, so only the `to-storm` stop renders and the result is a solid flat colour. The intended indigo→storm gradient is never shown.
- **Fix:** Change `bg-indigo` → `from-indigo`.

---

### R3 — Achievements card hover gradient doesn't work
- **File:** `src/sections/Testimonial.jsx` (AchievementCard)
- **Detail:** `hover:bg-royal` cannot override a CSS gradient (`background-image`). `bg-royal` sets `background-color` which sits below `background-image` in the paint order, so the hover effect is invisible.
- **Fix:** Replace `hover:bg-royal` with `hover:from-royal hover:to-lavender`.

---

## Visual / Polish

### V1 — About Grid 2: "FULL-STACK FLOW" watermark looks unfinished
- **File:** `src/sections/About.jsx:38`
- **Detail:** `<p className="... text-gray-500">FULL-STACK FLOW</p>` — `text-gray-500` on the `from-storm to-indigo` dark background produces barely-perceptible grey text. The floating Card components sit on top, making the text look like a placeholder that was never styled. The `flex items-end` on a `<p>` element is also meaningless.
- **Fix:** Restyle as a visible label or gradient watermark that looks intentional — e.g. white/10 opacity with larger tracking. Remove the `flex items-end` from the `<p>`.

---

### V2 — About Grid 4: CopyEmailButton poor contrast against purple gradient
- **File:** `src/components/CopyEmailButton.jsx:20`, `src/sections/About.jsx:96–104`
- **Detail:** The button uses `bg-primary` (near-black `#030412`) against the card's `from-royal to-lavender` vibrant purple gradient. The contrast between the very dark button and the purple background is jarring — the button looks dropped on the card rather than part of it.
- **Fix:** Change button background to `bg-white/10` with a `border border-white/30 backdrop-blur-sm` glass-morphism treatment so it integrates with the gradient card.

---

### V3 — Contact section heading style differs from every other section
- **File:** `src/sections/Contact.jsx:94–108`
- **Detail:** All other sections (About, SkillSet, Projects, Experiences, Achievements) use the `text-heading` class + a 20px teal accent divider line below the heading. Contact instead uses an `<h2>` with a custom email icon, inline `bg-clip-text text-transparent` gradient, and no divider. This creates an obvious visual inconsistency in the page rhythm.
- **Fix:** Replace Contact's heading block with the standard `text-heading` + teal underline pattern used by all other sections.

---

### V4 — Achievements section missing teal divider under heading
- **File:** `src/sections/Testimonial.jsx:66`
- **Detail:** `<h2 className="text-heading">My Journey & Achievements</h2>` — no divider line below the heading, unlike every other section that has `<div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mb-4"></div>`.
- **Fix:** Add the standard teal divider line below the heading.

---

### V5 — Footer copyright year hardcoded to 2025
- **File:** `src/sections/Footer.jsx:14`
- **Detail:** `© 2025 Subramaniyajothi. All rights reserved.` — the current year is 2026. Using a static year means it falls out of date on every new year.
- **Fix:** Replace with `© {new Date().getFullYear()} ...` so it never goes stale.

---

### V6 — Footer social icon centering uses brittle negative-margin hack
- **File:** `src/sections/Footer.jsx:19`
- **Detail:** `className="flex gap-4 order-1 md:order-2 md:-ml-[8rem] lg:-ml-[10rem]"` — the social links are visually "centred" by pushing them left with magic-number negative margins. This will break if the copyright text or the Terms links change in length, or at screen widths between breakpoints.
- **Fix:** Change the footer flex layout to `justify-between` with `absolute` centring or use a three-column grid so true centring is guaranteed without magic numbers.

---

### V7 — Footer "Terms" and "Privacy Policy" link to non-existent sections
- **File:** `src/sections/Footer.jsx:40–42`
- **Detail:** `<a href="#terms">Terms</a>` and `<a href="#privacy">Privacy Policy</a>` — neither `id="terms"` nor `id="privacy"` exists anywhere in the page. Clicking either link scrolls to the top without any feedback.
- **Fix:** Remove both links (this is a portfolio, not a product), or replace them with a direct email link and GitHub link.

---

### V8 — Hero section has no scroll indicator
- **File:** `src/sections/Hero.jsx`, `src/components/HeroText.jsx`
- **Detail:** The hero occupies 100vh with no visual cue that the page continues below. First-time visitors may not realise there is more content below the fold.
- **Fix:** Add an animated bounce-scroll chevron indicator anchored to the bottom of the hero section.

---

### V9 — Navbar has no active-section highlight
- **File:** `src/sections/Navbar.jsx`
- **Detail:** All four nav links look identical regardless of which section is currently in the viewport. Users have no visual anchor for where they are in the page.
- **Fix:** Add an `IntersectionObserver` that tracks the active section and applies a white / accent colour to the corresponding nav link.

---

## Code Hygiene (affects maintainability / bundle)

### C1 — `SkillsProgress` imported but never rendered in About
- **File:** `src/sections/About.jsx:5`
- **Detail:** `import SkillsProgress from "../components/SkillsProgress";` — the component is never used in the `About` JSX. Dead import increases the bundle.
- **Fix:** Remove the import line.

---

### C2 — `SkillsProgress.jsx` has 37 lines of commented-out code
- **File:** `src/components/SkillsProgress.jsx:1–40`
- **Detail:** The original bar-only version of the component is entirely commented out above the live version.
- **Fix:** Delete the commented-out block.

---

### C3 — `FlipWords.jsx` has `"use client"` directive
- **File:** `src/components/FlipWords.jsx:1`
- **Detail:** `"use client"` is a React Server Components / Next.js directive. In Vite it is silently ignored and indicates the file was copied from a Next.js project. It is the same issue as the `globe.jsx` and `Timeline.jsx` fixes applied in the prior audit.
- **Fix:** Remove the `"use client";` line.

---

### C4 — `Timeline.jsx` imports `framer-motion` instead of `motion/react`
- **File:** `src/components/Timeline.jsx:2`
- **Detail:** `import { useScroll, useTransform, motion } from "framer-motion"` — every other animated component in the project uses `motion/react` (the React-specific re-export). Using the base `framer-motion` package adds a second entry point that may result in two instances of the library being bundled.
- **Fix:** Change to `import { useScroll, useTransform, motion } from "motion/react"`.

---

### V10 — Project detail modal overflows the viewport
- **File:** `src/components/ProjectDetails.jsx`
- **Severity:** High — bottom content (tags, "View Project" link) completely unreachable on most screens
- **Detail:** The modal has no `max-height` constraint and the project image renders at `w-full` with no height cap. For projects with tall screenshots (e.g. QuickCart), the modal grows beyond 100vh with no scroll mechanism. The close button, tags, and "View Project" link become inaccessible. Additionally, clicking outside the modal does nothing — there is no backdrop-dismiss.
- **Fix:**
  - Set `max-w-2xl max-h-[85vh] flex flex-col overflow-hidden` on the modal container so it never exceeds 85% of viewport height.
  - Cap the image to `h-48 sm:h-56 object-cover flex-shrink-0` — fixed height, crops intelligently, never shrinks.
  - Wrap text content in `overflow-y-auto` so it scrolls when needed while the image stays pinned at the top.
  - Add `p-4` to the outer overlay so the modal has breathing room near viewport edges.
  - Add `onClick={closeModal}` to the backdrop and `onClick={(e) => e.stopPropagation()}` to the modal to support click-outside-to-close.
  - Add `z-10` to the close button and `rounded-full bg-midnight/80 backdrop-blur-sm` so it is always visible above the image.

---

## Issue Count Summary

| Category | Count |
|----------|-------|
| Rendering Bugs | 3 |
| Visual / Polish | 8 |
| Code Hygiene | 4 |
| **Total** | **15** |
