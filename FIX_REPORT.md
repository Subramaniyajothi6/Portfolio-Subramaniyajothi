# Fix Report — Audit Remediation

**Project:** Portfolio-Subramaniyajothi  
**Fixed by:** Claude Code (claude-sonnet-4-6)  
**Date:** 2026-05-04  
**Issues fixed:** 31 of 31

---

## Security

### S1 — Missing `rel="noopener noreferrer"` on external link
**File:** `src/components/ProjectDetails.jsx`  
**Strategy:** Locate-and-patch. The anchor's attributes were expanded to include `rel="noopener noreferrer"`.  
**Why it matters:** Without this, the opened page can write to `window.opener` and redirect the originating tab to a phishing URL (reverse tabnapping).  
**Tool:** Write (full file rewrite bundled with S1, B3, B11, A2).

---

### S2 — Form data logged to console in production
**File:** `src/sections/Contact.jsx`  
**Strategy:** Full `handleSubmit` function rewrite. Removed all ~20 `console.log` / `console.log("Approach …")` calls.  
**Why it matters:** Any visitor who opens DevTools can read the user's name, email address, and full outbound payloads.  
**Tool:** Write.

---

### S3 — Unnecessary JWT interceptor on public contact form
**File:** `src/api.js`  
**Strategy:** Deleted the `axiosClient.interceptors.request.use(...)` block (lines 10–16) entirely.  
**Why it matters:** Reading from `localStorage` in a request interceptor is an XSS escalation path — any injected script can steal the token. The contact endpoint is public and needs no auth header.  
**Tool:** Write (small file, full rewrite cleaner than Edit).

---

### S4 — No rate-limiting cooldown on contact form submission
**File:** `src/sections/Contact.jsx`  
**Strategy:** Added a `cooldownRemaining` state (integer, seconds). On successful submission a `setInterval` counts it down from 60 to 0, clearing itself when done. The submit button gets `disabled={isLoading || cooldownRemaining > 0}` and renders a countdown message while active.  
**Why it matters:** Without a cooldown the backend endpoint can be flooded with valid-looking requests as fast as the browser can fire them.  
**Tool:** Write.

---

## Bugs

### B1 — Stray import in constants file
**File:** `src/constants/index.js`  
**Strategy:** Deleted line 1: `import { fill } from "three/src/extras/TextureUtils.js"`.  
**Why it matters:** A Three.js internal module imported into a pure data file adds a dead-weight bundle chunk with no runtime benefit.  
**Tool:** Edit.

---

### B2 — `Array.reverse()` mutates shared module-level array
**File:** `src/components/Frameworks.jsx`  
**Strategy:** Changed `skills.reverse().map(...)` → `[...skills].reverse().map(...)`. The spread creates a fresh copy before reversing so the original `skills` array stays intact for the first `OrbitingCircles`.  
**Why it matters:** `Array.prototype.reverse` mutates in place. Both orbit rings were iterating the same reversed order after the first render.  
**Tool:** Write.

---

### B3 — Missing `key` prop on mapped elements
**File:** `src/components/ProjectDetails.jsx`  
**Strategy:** Added `key={index}` to the `<p>` element inside `subDescription.map(...)`.  
**Why it matters:** React uses keys to reconcile virtual DOM trees. Missing keys degrade diffing performance and produce console warnings.  
**Tool:** Write.

---

### B4 — Broken Tailwind class on mobile hero
**File:** `src/components/HeroText.jsx`  
**Strategy:** Changed `className="flex- flex-col"` → `className="flex flex-col"`. The space between `flex-` and `flex-col` was a typo creating an invalid utility.  
**Why it matters:** `flex-` is not a Tailwind class; without `flex`, the mobile container is a block element and the column layout never applies.  
**Tool:** Write.

---

### B5 — Missing dash in color utility class
**File:** `src/components/HeroText.jsx`  
**Strategy:** Changed `text-neutral300` → `text-neutral-300`.  
**Why it matters:** Tailwind generates nothing for `text-neutral300`; the mobile "Web Applications" text had no colour applied.  
**Tool:** Write.

---

### B6 — Null-dereference race in Globe on unmount
**File:** `src/components/globe.jsx`  
**Strategy:** Wrapped the `setTimeout` callback with a null guard:  
```js
setTimeout(() => {
  if (canvasRef.current) canvasRef.current.style.opacity = "1";
}, 0);
```
**Why it matters:** If the component unmounts in the 0 ms window before the callback fires, `canvasRef.current` is null and the assignment throws a `TypeError`, crashing the Suspense boundary.  
**Tool:** Write.

---

### B7 — `<style jsx>` is a Next.js feature, not available in Vite
**File:** `src/sections/SkillSet.jsx`  
**Strategy:** Deleted the entire `<style jsx>{...}</style>` block (originally lines 132–160). The `@keyframes shine`, `.animate-shine`, `@keyframes fadeIn`, and `.animate-fadeIn` definitions already exist in `src/index.css`, so the component picks them up globally.  
**Why it matters:** In Vite + React, `<style jsx>` renders as an unscoped `<style>` tag injected into `<head>`, polluting global CSS.  
**Tool:** Write.

---

### B8 — `@keyframes shine` defined twice with conflicting durations
**Files:** `src/index.css` (2 s) vs `src/sections/SkillSet.jsx` (3 s)  
**Strategy:** Removing the `<style jsx>` block (B7 fix) eliminated the duplicate. The canonical 2 s definition in `src/index.css` is the only one that remains.  
**Why it matters:** The last loaded rule wins, making the shine duration unpredictable across page loads and HMR refreshes.  
**Tool:** Write (via B7 fix — no separate change to `index.css` needed).

---

### B9 — Broken project image path with typo
**Files:** `src/constants/index.js` + `public/assets/projects/`  
**Strategy:** Two-step fix:  
1. Renamed the disk file from `Placement Mangement System.png` → `Placement Management System.png` using PowerShell `Rename-Item`.  
2. Updated the path in `constants/index.js` from `"assets/projects/Placement Mangement System.png"` → `"/assets/projects/Placement Management System.png"` (added leading `/`, fixed spelling).  
**Why it matters:** The relative path without `/` fails in nested routes; the typo caused a 404 at the disk level.  
**Tool:** PowerShell rename + Edit.

---

### B10 — `useFrame` animation runs every frame indefinitely
**File:** `src/components/Astronaut.jsx`  
**Strategy:** Added `const landedRef = useRef(false)`. Inside `useFrame`, added an early return when `landedRef.current` is true, and set it to `true` once the target position is reached:
```js
useFrame(() => {
  if (landedRef.current) return;
  if (group.current && group.current.position.y > -1) {
    group.current.position.y -= 0.02;
  } else {
    landedRef.current = true;
  }
});
```
**Why it matters:** The no-op frame callback was executing at 60 fps for the entire page session after the astronaut landed — wasted CPU and GPU time. Using a `ref` (not state) avoids a re-render when the flag flips.  
**Tool:** Write.

---

### B11 — Project detail modal permanently scaled to 75%
**File:** `src/components/ProjectDetails.jsx`  
**Strategy:** Changed `animate={{ opacity: 1, scale: 0.75 }}` → `animate={{ opacity: 1, scale: 1 }}`. The `initial={{ opacity: 0, scale: 0.5 }}` is already correct for an enter animation.  
**Why it matters:** The modal was rendering at 75% of its intended size on every open — visually broken layout.  
**Tool:** Write.

---

## Performance

### P1 — Skills array recreated on every render
**File:** `src/sections/SkillSet.jsx`  
**Strategy:** Moved `const skills = [...]` from inside the component body to module scope (before the `SkillSet` function declaration).  
**Why it matters:** JavaScript creates a new array object and allocates 11 object literals on every render. Moving it to module scope means it is created once when the module loads.  
**Tool:** Write.

---

### P2 — `handleMouseMove` recreated on every render
**File:** `src/sections/Projects.jsx`  
**Strategy:** Added `useCallback` to the React import and wrapped `handleMouseMove`:  
```js
const handleMouseMove = useCallback((e) => {
  x.set(e.clientX + 20);
  y.set(e.clientY + 20);
}, [x, y]);
```
**Why it matters:** A new function reference on every render forces `onMouseMove` to diff as changed, triggering unnecessary work in the event system.  
**Tool:** Write.

---

### P3 — Astronaut `useFrame` never exits after landing
Already resolved under **B10** above.

---

## Code Quality

### Q1 — Triple-fallback contact form payload
**File:** `src/sections/Contact.jsx`  
**Strategy:** Replaced the three nested try/catch approaches with a single clean request using Approach 1's payload shape (all five fields). The double/triple fallbacks were debugging scaffolding that was never removed.  
**Tool:** Write.

---

### Q2 — 54 lines of commented-out code in Testimonial
**File:** `src/sections/Testimonial.jsx`  
**Strategy:** Deleted lines 1–54 (the entire commented-out `ReviewCard` / `Testimonial` component). The live `Achievements` component that replaced it is kept intact.  
**Tool:** Write.

---

### Q3 — Commented-out duplicate mobile CTA in HeroText
**File:** `src/components/HeroText.jsx`  
**Strategy:** Deleted the `{/* <motion.div ... </motion.div> */}` block (originally lines 133–164). An active replacement CTA already exists immediately after it.  
**Tool:** Write.

---

### Q4 — Orphaned `Achievements` component never rendered
**File:** `src/App.jsx`  
**Strategy:** Added a lazy import and a `<Suspense>` wrapper between Experiences and Contact:  
```js
const Achievements = lazy(() => import("./sections/Testimonial"));
// ...
<Suspense fallback={<Loader />}>
  <Achievements />
</Suspense>
```
**Tool:** Edit (two sequential edits — import line, then JSX render block).

---

### Q5 — `"use client"` directive in Vite/React files
**Files:** `src/components/Timeline.jsx`, `src/components/globe.jsx`  
**Strategy:** Removed the `"use client";` line from both files.  
**Why it matters:** `"use client"` is a React Server Components / Next.js boundary directive. It is silently ignored in Vite, causing confusion and indicating copy-paste origin.  
**Tool:** Edit (Timeline), Write (globe — bundled with other changes).

---

### Q6 — Inverted boolean name for modal state
**File:** `src/components/Project.jsx`  
**Strategy:** Renamed `isHidden` / `setIsHidden` → `isOpen` / `setIsOpen` throughout the component. Updated the conditional render from `{isHidden && ...}` → `{isOpen && ...}` and both setter calls.  
**Tool:** Write.

---

### Q7 — Empty `<div>` element
**File:** `src/components/HeroText.jsx`  
**Strategy:** Removed the empty `<div></div>` block (originally lines 87–89) that had no children, no class, and no purpose.  
**Tool:** Write.

---

### Q8 — Leftover placeholder comments in Navbar
**File:** `src/sections/Navbar.jsx`  
**Strategy:** Removed all four `// Add your contact logic here` comments from the nav link `onClick` handlers.  
**Tool:** Write.

---

## Accessibility

### A1 — Nav links are `<a>` elements without `href`
**File:** `src/sections/Navbar.jsx`  
**Strategy:** Added `href="#home"`, `href="#about"`, `href="#work"`, `href="#contact"` to each anchor. Added `e.preventDefault()` inside each `onClick` to prevent the default browser jump while preserving smooth scroll behaviour.  
**Why it matters:** Anchor tags without `href` are not keyboard-focusable and convey no destination to screen readers or link crawlers.  
**Tool:** Write.

---

### A2 — Modal has no keyboard close handler and does not trap focus
**File:** `src/components/ProjectDetails.jsx`  
**Strategy:** Added a `useEffect` that registers a `keydown` listener for `Escape` (calls `closeModal`) and removes it on cleanup. Added `closeButtonRef` pointing to the close `<button>`, then called `closeButtonRef.current?.focus()` on mount so keyboard focus moves into the modal immediately on open.  
**Tool:** Write.

---

### A3 — "Read More" button lacks accessible label
**File:** `src/components/Project.jsx`  
**Strategy:** Added `aria-label={\`Read more about ${title}\`}` to the button.  
**Why it matters:** "Read More" repeated for every project card is meaningless in isolation to a screen reader user scanning the button list.  
**Tool:** Write.

---

### A4 — Framework icons have no `alt` attribute
**File:** `src/components/Frameworks.jsx`  
**Strategy:** Updated the `Icon` component to accept and render an `alt` prop (`const Icon = ({ src, alt }) => <img ... alt={alt} />`). Updated both `OrbitingCircles` render calls to pass `alt={skill}`.  
**Tool:** Write.

---

### A5 — Progress bars have no ARIA semantics
**File:** `src/sections/SkillSet.jsx`  
**Strategy:** Added `role="progressbar"`, `aria-valuenow={skill.level}`, `aria-valuemin={0}`, `aria-valuemax={100}`, and `aria-label={\`${skill.name} proficiency\`}` to the outer progress bar `<div>`.  
**Tool:** Write.

---

## Summary Table

| ID | Category | File(s) | Fix Method |
|----|----------|---------|------------|
| S1 | Security | ProjectDetails.jsx | Added `rel="noopener noreferrer"` |
| S2 | Security | Contact.jsx | Removed ~20 `console.log` calls |
| S3 | Security | api.js | Deleted JWT interceptor |
| S4 | Security | Contact.jsx | Added 60 s cooldown with countdown |
| B1 | Bug | constants/index.js | Deleted stray Three.js import |
| B2 | Bug | Frameworks.jsx | `[...skills].reverse()` copy-before-reverse |
| B3 | Bug | ProjectDetails.jsx | Added `key={index}` to mapped `<p>` |
| B4 | Bug | HeroText.jsx | `flex-` → `flex` |
| B5 | Bug | HeroText.jsx | `text-neutral300` → `text-neutral-300` |
| B6 | Bug | globe.jsx | Null-guard on `canvasRef.current` in `setTimeout` |
| B7 | Bug | SkillSet.jsx | Deleted `<style jsx>` block |
| B8 | Bug | SkillSet.jsx / index.css | Single definition remains in `index.css` |
| B9 | Bug | constants/index.js + disk | Renamed file + fixed path (leading `/`, correct spelling) |
| B10 | Bug | Astronaut.jsx | `landedRef` early-exit in `useFrame` |
| B11 | Bug | ProjectDetails.jsx | `scale: 0.75` → `scale: 1` |
| P1 | Performance | SkillSet.jsx | Moved `skills` array to module scope |
| P2 | Performance | Projects.jsx | `useCallback` on `handleMouseMove` |
| P3 | Performance | Astronaut.jsx | Resolved by B10 |
| Q1 | Quality | Contact.jsx | Replaced 3-fallback logic with single request |
| Q2 | Quality | Testimonial.jsx | Deleted 54 lines of commented code |
| Q3 | Quality | HeroText.jsx | Deleted commented-out duplicate mobile CTA |
| Q4 | Quality | App.jsx | Imported and rendered `Achievements` section |
| Q5 | Quality | Timeline.jsx, globe.jsx | Removed `"use client"` directives |
| Q6 | Quality | Project.jsx | Renamed `isHidden` → `isOpen` |
| Q7 | Quality | HeroText.jsx | Deleted empty `<div>` |
| Q8 | Quality | Navbar.jsx | Removed placeholder `// Add your contact logic here` comments |
| A1 | Accessibility | Navbar.jsx | Added `href` to nav anchors + `e.preventDefault()` |
| A2 | Accessibility | ProjectDetails.jsx | Escape key handler + focus on close button |
| A3 | Accessibility | Project.jsx | `aria-label` on "Read More" button |
| A4 | Accessibility | Frameworks.jsx | `alt={skill}` on icon `<img>` |
| A5 | Accessibility | SkillSet.jsx | `role="progressbar"` + ARIA value attributes |
