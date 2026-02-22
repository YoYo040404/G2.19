# Copy Final Polish — Israeli Market Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Finish the Israeli-market copy pass on the 3 remaining components (Marquee, Navbar tagline, ObjectionBlock) and verify the full build.

**Architecture:** Pure text edits across 3 TSX files — no structural changes, no new components, no logic changes.

**Tech Stack:** React 19 + TypeScript + Vite. Build command: `npm run build`.

---

## Context: What's Already Done

The following are **complete — do NOT re-edit:**
- `Hero.tsx` — H1 shortened, font reduced to `text-3xl md:text-5xl lg:text-6xl`
- `Services.tsx` — 7 individual service cards in grid
- `LeadForm.tsx` — "24 שעות" removed
- `FAQ.tsx` — Q6 warranty answer aligned with Guarantee (5 years)
- `TrustBar.tsx` — "גוש דן" → "מרכז ובשרון"
- `Guarantee.tsx` — "מחיר שלא זז"
- `Partners.tsx` — tagline updated
- `InterruptCTA.tsx` — headline updated
- `Navbar.tsx` CTAs — both "שלחו תמונה"
- `Footer.tsx` — tagline updated
- `Process.tsx` — "בלי הפתעות בדרך"
- `index.html` — meta title, description, OG, schema all updated

---

## Task 1: Marquee.tsx — Sharpen the 5 Trust Bullets

**File:** `components/Marquee.tsx` (lines 5–11)

**Problem:** "תיאום ביצוע מהיר" is vague — doesn't say what "fast" means. The other 4 bullets are crisp and specific.

**Step 1: Open the file and locate the items array**

```
c:\Users\yaniv\repos\yoyo-repo\components\Marquee.tsx lines 5–11
```

**Step 2: Edit the items array**

```ts
// BEFORE:
const items = [
  "מחיר סופי מראש",
  "ללא קבלני משנה",
  "דיוק ברמת המילימטר",
  "תיאום ביצוע מהיר",
  "5 שנות אחריות"
];

// AFTER:
const items = [
  "מחיר סופי מראש",
  "ללא קבלני משנה",
  "דיוק ברמת המילימטר",
  "ביצוע לפי מועד מוסכם",
  "5 שנות אחריות"
];
```

**Step 3: Run build to verify**
```bash
npm run build
```
Expected: `✓ built in ~3s` with no errors.

**Step 4: Commit**
```bash
git add components/Marquee.tsx
git commit -m "copy: sharpen marquee trust bullet — specific execution promise"
```

---

## Task 2: Navbar.tsx — Fix Logo Subtitle

**File:** `components/Navbar.tsx` (line 45)

**Problem:** Subtitle says "אומן פרקט ודקים" — missing שטיחים, which is now a core service (has 3 dedicated service cards).

**Step 1: Open the file and locate the subtitle span**

```
c:\Users\yaniv\repos\yoyo-repo\components\Navbar.tsx line 45
```

**Step 2: Edit**

```tsx
// BEFORE:
אומן פרקט ודקים

// AFTER:
פרקט · שטיחים · דקים
```

**Step 3: Run build to verify**
```bash
npm run build
```
Expected: `✓ built in ~3s`

**Step 4: Commit**
```bash
git add components/Navbar.tsx
git commit -m "copy: update navbar subtitle to include שטיחים"
```

---

## Task 3: ObjectionBlock.tsx — Tighten Answer Copy

**File:** `components/ObjectionBlock.tsx` (lines 4–17)

**Problem:** The answer text is correct but slightly formal/passive. Israeli market tone should be direct and personal (ג'ריקו in first person).

**Step 1: Open the file and locate the situations array**

```
c:\Users\yaniv\repos\yoyo-repo\components\ObjectionBlock.tsx lines 4–17
```

**Step 2: Edit the situations array**

```ts
// BEFORE:
const situations = [
  {
    situation: "לוחות בודדים פגועים או שבורים",
    answer: "לרוב ניתן להחליף את הלוחות הפגועים בלבד, בלי לפרק את כל הרצפה.",
  },
  {
    situation: "חריקות, שקיעות או פערים",
    answer: "תלוי במקור הבעיה — לפעמים מדובר בתיקון נקודתי, לפעמים בבעיית תשתית. חייבים לבדוק.",
  },
  {
    situation: "נזק רחב, לחות, או תשתית לא ישרה",
    answer: "במצבים כאלה לרוב נדרשת עבודה רחבה יותר — החלפה חלקית או מלאה, לפי הממצאים.",
  },
];

// AFTER:
const situations = [
  {
    situation: "לוחות בודדים פגועים או שבורים",
    answer: "ברוב המקרים אני מחליף רק את הלוחות הפגועים — בלי לפרק את כל הרצפה.",
  },
  {
    situation: "חריקות, שקיעות או פערים",
    answer: "תלוי בשורש הבעיה. לפעמים תיקון נקודתי, לפעמים בעיית תשתית. חייבים לראות.",
  },
  {
    situation: "נזק רחב, לחות, או תשתית לא ישרה",
    answer: "כאן לרוב צריך עבודה רחבה יותר — החלפה חלקית או מלאה. אבחן ואסביר מה נכון.",
  },
];
```

**Step 3: Run build to verify**
```bash
npm run build
```
Expected: `✓ built in ~3s`

**Step 4: Commit**
```bash
git add components/ObjectionBlock.tsx
git commit -m "copy: ObjectionBlock answers — first person, direct Israeli tone"
```

---

## Final Verification Checklist

After all 3 tasks:

```bash
npm run build
```

Visual checks (open in browser):
- [ ] Navbar logo: shows "פרקט · שטיחים · דקים" on scroll
- [ ] Marquee bar: 5th bullet is "ביצוע לפי מועד מוסכם" (not "תיאום ביצוע מהיר")
- [ ] ObjectionBlock: answers in first person ("אני מחליף...", "אבחן ואסביר...")
- [ ] Hero: H1 is single line, font fits on mobile without overflow
- [ ] Services: 7 cards in 2/3/4 grid, each with WA link

---
