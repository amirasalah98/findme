Continue building the **Mafqoud mobile application** in the existing Figma file.

IMPORTANT: **Do not redesign or change the existing visual identity.** Use the existing Register, Login, and Forgot Password screens as the source of truth for colors, typography, spacing, border radius, buttons, inputs, icons, and overall visual language.

Also keep the same visual identity across the new Home, Missing People, and Found People screens.

Create **3 new mobile screens/pages**:

1. Home
2. Missing People
3. Found People

Design them for approximately **390 × 844 px** and make them mobile-first.

---

# OVERALL INFORMATION ARCHITECTURE

The application should have a simple structure:

**Home**

**Missing People**

**Found People**

The Home page should primarily introduce the platform and explain its purpose.

The actual missing/found-person reports should NOT be displayed directly on the Home page.

Instead:

**Missing People page**
→ Displays missing-person reports
→ Has an option to submit a new missing-person report

**Found People page**
→ Displays found-person reports
→ Has an option to submit a new found-person report

This keeps the Home page clean and makes the application easier to understand.

---

# SHARED HEADER

Create a consistent mobile header that appears across all three pages.

### Header layout

Left:

**Mafqoud** logo

Right:

* Search icon
* Account/menu icon

Below or integrated into the header, provide navigation to:

**Missing People**

**Found People**

Because this is a mobile interface, do NOT try to fit too many text navigation links horizontally.

Use a compact navigation solution such as:

* A small navigation row below the logo/header, OR
* A menu/drawer that contains the main navigation

Choose whichever produces the cleanest mobile UI.

The primary navigation must make **Missing People** and **Found People** easy to access.

Do NOT put "Report Missing Person" or "Report Found Person" directly in the main navigation.

---

# ACCOUNT / MENU DRAWER

The account/menu icon should open a side drawer.

For logged-in users:

* Profile
* My Reports
* Saved Cases
* Notifications
* Settings
* Help & Support
* Logout

For logged-out users:

* Login
* Register
* Help & Support
* About Mafqoud

Also include:

* Missing People
* Found People

in the main navigation if the drawer is being used for navigation.

Use the same Navy/Teal/White design language.

---

# SCREEN 1 — HOME

The Home page should be **simple and welcoming**.

Do NOT display missing-person cards or found-person cards here.

Do NOT make it look like a dashboard.

The purpose of the Home page is to explain what Mafqoud is and guide the user toward the two main sections.

---

## HERO

Start with a welcoming section.

Heading:

**Helping people find their way home.**

Supporting paragraph:

**Mafqoud is a platform that helps families search for missing people and allows communities to share information that may help reconnect people with their loved ones.**

Add a prominent search bar:

**Search for a person...**

with a search icon.

The search bar should eventually navigate to the Search page.

---

## INTRODUCTION

Create a short section:

### **What is Mafqoud?**

Text:

**Mafqoud brings together reports of missing and found people in one place, making it easier for families and communities to search, share information, and help reconnect people.**

Keep the paragraph concise and easy to read on mobile.

---

# MAIN SECTIONS

Create two visually distinct sections that introduce the two main areas of the platform.

## Missing People

Heading:

**Missing People**

Supporting text:

**Browse reports of people who have been reported missing and help spread information that may lead to finding them.**

Button:

**View Missing People →**

The button should navigate to the Missing People page.

Use an appropriate subtle icon.

---

## Found People

Heading:

**Found People**

Supporting text:

**Browse reports of people who have been found and may need help being identified or reunited with their families.**

Button:

**View Found People →**

Navigate to the Found People page.

Use a different but visually consistent icon.

---

# HOW IT WORKS

Add a short section near the lower part of the Home page:

### **How Mafqoud Works**

Use three simple steps:

**1. Search**

Search through missing and found-person reports.

**2. Share**

Submit information about a missing or found person.

**3. Reconnect**

Help families find and reconnect with their loved ones.

Use simple icons and very short descriptions.

---

# SAFETY / TRUST MESSAGE

Add a compact section:

### **Help responsibly**

Text:

**Please make sure the information you share is accurate and respect people's privacy when submitting or sharing reports.**

Add:

**Learn more about safety & privacy →**

Keep this visually subtle.

---

# FOOTER

At the bottom of the Home page, create a simple mobile footer.

Include:

**Mafqoud**

**Helping communities find missing people and reconnect families.**

Links:

* About Us
* Contact Us
* Help & Support
* Privacy Policy
* Terms of Service

At the bottom:

**© 2026 Mafqoud. All rights reserved.**

The footer should be compact and not visually dominate the page.

---

# SCREEN 2 — MISSING PEOPLE

Create a dedicated page for browsing missing-person reports.

The page should be functional and information-dense while remaining clean.

---

## HEADER

Use the shared Mafqoud header.

Page title:

**Missing People**

Supporting text:

**Browse reports of people who have been reported missing.**

---

# SEARCH AND FILTER

Immediately below the heading, add:

### Search

Search bar:

**Search by name, location, or keyword...**

Include search icon.

Then create a filter/sort option.

Possible filters:

* Location
* Age
* Gender
* Date Reported
* Status

Also include:

**Sort by**

with options such as:

* Most Recent
* Recently Updated
* Oldest

Keep filters mobile-friendly. They can open as a bottom sheet/modal rather than occupying the entire page.

---

# REPORT BUTTON

Add a prominent button near the top of the page:

**Report Missing Person**

This is the correct place for the reporting action.

The button should navigate to a future:

**Create Missing Person Report**

page.

Make this button clearly visible but do not let it overpower the search/listing functionality.

---

# MISSING PERSON LIST

Display missing-person reports as vertical cards.

Each card should include:

* Person's photo
* Full name
* Age
* Gender
* Last seen location
* Date last seen
* Date reported
* Status

Example:

**Ahmed Mohamed**

**12 years old • Male**

📍 Alexandria

**Last seen:** 2 days ago

Status badge:

**Missing**

Use a clean white card with:

* Rounded corners
* Subtle shadow/border
* Clear hierarchy
* Large enough image

Each card should be tappable.

Tapping a card should eventually open:

**Missing Person Details**

page.

---

# EMPTY STATE

Also design an empty state for when no reports match the search/filter.

Example:

**No missing people found**

**Try changing your search or filters.**

Include a simple illustration/icon and a button:

**Clear Filters**

---

# SCREEN 3 — FOUND PEOPLE

Create a dedicated page for browsing found-person reports.

The overall structure should be almost identical to Missing People so the application remains consistent.

---

## HEADER

Shared Mafqoud header.

Page title:

**Found People**

Supporting text:

**Browse reports of people who have been found and may need to be identified or reunited with their families.**

---

# SEARCH AND FILTER

Search bar:

**Search by name, location, or keyword...**

Filters:

* Location
* Approximate Age
* Gender
* Date Found
* Identification Status

Sort options:

* Most Recent
* Recently Updated
* Oldest

Use a mobile-friendly filter bottom sheet/modal.

---

# REPORT BUTTON

Prominent button:

**Report Found Person**

This navigates to a future:

**Create Found Person Report**

page.

---

# FOUND PERSON LIST

Display reports as vertical cards.

Each card should include:

* Person's photo
* Name if known
* "Unknown Person" if unidentified
* Approximate age
* Gender if available
* Found location
* Date found
* Identification status

Example:

**Unknown Person**

**Approx. 8–10 years old**

📍 Giza

**Found:** Yesterday

Status:

**Found – Unidentified**

Cards should be visually consistent with the Missing People cards.

Each card should be tappable and eventually navigate to:

**Found Person Details**

---

# EMPTY STATE

Create an empty state:

**No found people found**

**Try changing your search or filters.**

Button:

**Clear Filters**

---

# VISUAL DESIGN

Continue using the exact existing Mafqoud palette:

* Navy: `#12304A`
* Teal: `#168C8C`
* Background: `#F8FAFC`
* White: `#FFFFFF`
* Border: `#E5E7EB`
* Main Text: `#1F2937`
* Secondary Text: `#6B7280`
* Error/urgent: `#DC2626`

Use the same typography and component styling from the existing authentication screens.

---

# MOBILE DESIGN REQUIREMENTS

Target:

**390 × 844 px**

Also make sure the design adapts well to:

* 375 × 812
* 393 × 852
* 430 × 932

Use:

* 20–24px horizontal padding
* Large touch targets
* Single-column layouts
* Comfortable vertical spacing
* Auto Layout
* Reusable components

The listing pages should be vertically scrollable.

---

# COMPONENTS TO CREATE

Create reusable components for:

* Header
* Navigation
* Account drawer
* Search bar
* Filter button
* Filter bottom sheet
* Sort control
* Person card
* Status badge
* Section heading
* Primary button
* Empty state
* Footer
* Report button

The **Missing Person Card** and **Found Person Card** should share the same base component while allowing their information/status to differ.

---

# PROTOTYPE CONNECTIONS

Create prototype links:

### Home

Search → Search page

View Missing People → Missing People

View Found People → Found People

Account icon → Account drawer

### Missing People

Person card → Missing Person Details

Report Missing Person → Create Missing Person Report

Search → Search page

### Found People

Person card → Found Person Details

Report Found Person → Create Found Person Report

Search → Search page

### Navigation

Missing People → Missing People

Found People → Found People

Login → Login

Register → Register

---

# FINAL INFORMATION ARCHITECTURE

The overall application structure should now be:

**Mafqoud**

→ **Home**

→ **Missing People**

* Browse reports
* Search/filter
* Report Missing Person
* Missing Person Details

→ **Found People**

* Browse reports
* Search/filter
* Report Found Person
* Found Person Details

→ **Search**

→ **Profile / My Reports / Settings**

The Home page should remain a **simple introduction and navigation hub**, while Missing People and Found People are the primary content/listing pages.

Do not add unnecessary functionality to the Home page.

Keep the entire experience clean, trustworthy, and easy to understand.
