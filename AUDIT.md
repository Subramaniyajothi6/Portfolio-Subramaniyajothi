# Code Audit Report

**Project:** Portfolio-Subramaniyajothi  
**Date:** 2026-05-03  
**Audited by:** Claude Code (claude-sonnet-4-6)  
**Status:** Open — unfixed as of audit date

---

## Security Vulnerabilities

### S1 — Missing `rel="noopener noreferrer"` on external link
- **File:** `src/components/ProjectDetails.jsx:42`
- **Severity:** Medium
- **Detail:** `<a href={href} target="_blank">` has no `rel` attribute. The linked page can access `window.opener` and redirect the portfolio tab to a malicious URL (reverse tabnapping).
- **Fix:** Add `rel="noopener noreferrer"` to all `target="_blank"` anchors.

---

### S2 — Form data logged to console in production
- **File:** `src/sections/Contact.jsx:38–96`
- **Severity:** Medium
- **Detail:** ~20 `console.log` statements output the user's name, email address, and full request payloads to the browser DevTools console. Any user who opens DevTools can see this.
- **Fix:** Remove all debug `console.log` calls before deploying.

---

### S3 — Unnecessary JWT interceptor on public contact form
- **File:** `src/api.js:10–14`
- **Severity:** Low
- **Detail:** The Axios client reads a JWT from `localStorage` and attaches it to every request. `localStorage` is accessible to any JavaScript running on the page (XSS vector). The contact form is a public endpoint that requires no authentication — the interceptor serves no purpose and silently attaches credentials to outbound requests.
- **Fix:** Remove the request interceptor entirely.

---

### S4 — No rate-limiting or cooldown on contact form submission
- **File:** `src/sections/Contact.jsx`
- **Severity:** Low
- **Detail:** The submit button is disabled only while `isLoading` is true. Once the request completes, the form can be submitted again immediately with no wait. The backend endpoint can be flooded with requests from the browser.
- **Fix:** After a successful submission, disable the button for a cooldown period (e.g. 60 seconds) and show a countdown.

---

## Bugs

### B1 — Stray import in constants file
- **File:** `src/constants/index.js:1`
- **Detail:** `import { fill } from "three/src/extras/TextureUtils.js"` — an accidental Three.js internal import in a pure data file. Adds an unnecessary module to the bundle.
- **Fix:** Delete the line.

---

### B2 — `Array.reverse()` mutates shared module-level array
- **File:** `src/components/Frameworks.jsx:34`
- **Detail:** `skills.reverse()` called inside the render path mutates the array that was declared at module scope. Both `OrbitingCircles` instances end up iterating the same reversed order.
- **Fix:** Use `[...skills].reverse()` to create a copy first.

---

### B3 — Missing `key` prop on mapped elements
- **File:** `src/components/ProjectDetails.jsx:28–29`
- **Detail:** `subDescription.map((subDesc, index) => <p ...>{subDesc}</p>)` — no `key` prop. React will warn and diffing is degraded.
- **Fix:** Add `key={index}` to the `<p>` element.

---

### B4 — Broken Tailwind class on mobile hero
- **File:** `src/components/HeroText.jsx:93`
- **Detail:** `className="flex- flex-col"` — `flex-` is not a valid Tailwind utility. The mobile hero layout does not apply flexbox.
- **Fix:** Change to `className="flex flex-col"`.

---

### B5 — Missing dash in color utility class
- **File:** `src/components/HeroText.jsx:126`
- **Detail:** `className="text-neutral300"` — missing dash. Tailwind generates no style for this token, so the text colour is not applied.
- **Fix:** Change to `text-neutral-300`.

---

### B6 — Null-dereference race in Globe on unmount
- **File:** `src/components/globe.jsx:89`
- **Detail:** `setTimeout(() => (canvasRef.current.style.opacity = "1"), 0)` — if the component unmounts before the timeout fires, `canvasRef.current` is `null` and this throws a TypeError.
- **Fix:** Guard with `if (canvasRef.current) canvasRef.current.style.opacity = "1"`.

---

### B7 — `<style jsx>` is a Next.js feature, not available in Vite
- **File:** `src/sections/SkillSet.jsx:132–160`
- **Detail:** `<style jsx>{...}</style>` is a styled-jsx / Next.js construct. In Vite + React it renders as a plain unscoped `<style>` tag injected into the document, polluting the global stylesheet with unscopable class names.
- **Fix:** Move the keyframe definitions into `src/index.css` and delete the `<style>` block.

---

### B8 — `@keyframes shine` defined twice with conflicting durations
- **File:** `src/index.css` (2s) vs `src/sections/SkillSet.jsx` (3s)
- **Detail:** Both files define `@keyframes shine` and `.animate-shine`. The last loaded wins, making the animation duration unpredictable.
- **Fix:** Keep exactly one definition in `src/index.css`.

---

### B9 — Broken project image path with typo
- **File:** `src/constants/index.js:18`
- **Detail:** `image: "assets/projects/Placement Mangement System.png"` — two issues: (1) typo "Mangement" instead of "Management", (2) missing leading `/`, inconsistent with all other project images that use `/assets/...`. The image will fail to load.
- **Fix:** Change to `"/assets/projects/Placement Management System.png"` and confirm the filename on disk matches.

---

### B10 — `useFrame` animation runs every frame indefinitely
- **File:** `src/components/Astronaut.jsx:26–29`
- **Detail:** The descent animation checks `group.current.position.y > -1` each frame but never cancels itself after the condition becomes false. The frame callback is registered for the lifetime of the component even though it does nothing after landing.
- **Fix:** Add a `useRef` landed flag, set it to `true` when the target is reached, and return early in `useFrame`.

---

### B11 — Project detail modal permanently scaled to 75%
- **File:** `src/components/ProjectDetails.jsx:16`
- **Detail:** `animate={{ opacity: 1, scale: 0.75 }}` — the modal animates to 75% scale and stays there. It was likely intended to animate in from a smaller scale (e.g. `initial={{ scale: 0.5 }}`) and land at full size.
- **Fix:** Change to `animate={{ opacity: 1, scale: 1 }}`.

---

## Performance

### P1 — Skills array recreated on every render
- **File:** `src/sections/SkillSet.jsx:8–20`
- **Detail:** The `skills` array is declared inside the component body and rebuilt on every render.
- **Fix:** Move it outside the component function.

---

### P2 — `handleMouseMove` recreated on every render
- **File:** `src/sections/Projects.jsx:10–13`
- **Detail:** Arrow function assigned on every render and passed to `onMouseMove`.
- **Fix:** Wrap in `useCallback`.

---

### P3 — Astronaut `useFrame` never exits after landing (see B10)
- Already documented under B10 — also a performance issue since a no-op frame callback runs at 60 fps indefinitely.

---

## Code Quality

### Q1 — Triple-fallback contact form payload is unresolved debugging code
- **File:** `src/sections/Contact.jsx:52–98`
- **Detail:** Three different payload shapes are attempted sequentially with try/catch. This is in-flight debugging that was never cleaned up. The backend API contract should be fixed and only one payload shape used.

---

### Q2 — 54 lines of commented-out code in Testimonial
- **File:** `src/sections/Testimonial.jsx:1–54`
- **Detail:** The entire original testimonials component is commented out.

---

### Q3 — Commented-out duplicate mobile CTA in HeroText
- **File:** `src/components/HeroText.jsx:133–164`
- **Detail:** A complete duplicate of the mobile call-to-action buttons is commented out.

---

### Q4 — Orphaned `Achievements` component never rendered
- **File:** `src/sections/Testimonial.jsx`
- **Detail:** The file exports `Achievements` (formerly Testimonial) but it is never imported in `App.jsx`. The section does not appear on the page.

---

### Q5 — `"use client"` directive in Vite/React files
- **Files:** `src/components/Timeline.jsx:1`, `src/components/globe.jsx:1`
- **Detail:** `"use client"` is a React Server Components / Next.js directive. It is silently ignored in Vite and indicates these components were copied from a Next.js project.

---

### Q6 — Inverted boolean name for modal state
- **File:** `src/components/Project.jsx:13`
- **Detail:** `const [isHidden, setIsHidden] = useState(false)` — `setIsHidden(true)` opens the modal. The name is the opposite of what the value means.
- **Fix:** Rename to `isOpen` / `setIsOpen`.

---

### Q7 — Empty `<div>` element
- **File:** `src/components/HeroText.jsx:87–89`
- **Detail:** `<div></div>` with no children, no class, no purpose.

---

### Q8 — Leftover placeholder comments in Navbar
- **File:** `src/sections/Navbar.jsx:9,18,27,37`
- **Detail:** `// Add your contact logic here` appears on every nav link despite the logic already being in place.

---

## Accessibility

### A1 — Nav links are `<a>` elements without `href`
- **File:** `src/sections/Navbar.jsx`
- **Detail:** Anchor tags rely solely on `onClick` with no `href`. They are not keyboard-focusable and convey no destination to screen readers.
- **Fix:** Add `href="#home"`, `href="#about"`, etc. or replace with `<button>`.

---

### A2 — Modal has no keyboard close handler and does not trap focus
- **File:** `src/components/ProjectDetails.jsx`
- **Detail:** Pressing `Escape` does not close the modal. When the modal opens, focus remains on the triggering button outside the modal overlay.
- **Fix:** Add a `keydown` event listener for `Escape` and move focus to the close button on open.

---

### A3 — "Read More" button lacks accessible label
- **File:** `src/components/Project.jsx:29–34`
- **Detail:** The button text "Read More" gives no context to screen reader users.
- **Fix:** Add `aria-label={`Read more about ${title}`}`.

---

### A4 — Framework icons have no `alt` attribute
- **File:** `src/components/Frameworks.jsx:42`
- **Detail:** `<img src={src} className="..." />` — `alt` omitted. Screen readers announce these as unlabelled images.
- **Fix:** Add `alt={skill}`.

---

### A5 — Progress bars have no ARIA semantics
- **File:** `src/sections/SkillSet.jsx:81–115`
- **Detail:** Skill progress bars are plain `<div>` elements with no `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, or `aria-valuemax` attributes.
- **Fix:** Add those attributes to the outer progress bar div.

---

## Issue Count Summary

| Category | Count |
|----------|-------|
| Security | 4 |
| Bugs | 11 |
| Performance | 3 |
| Code Quality | 8 |
| Accessibility | 5 |
| **Total** | **31** |
