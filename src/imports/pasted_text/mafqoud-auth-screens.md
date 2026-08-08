Design a mobile-first UI prototype for a modern, professional, trustworthy Missing Persons & Lost People platform in Egypt. The platform helps people report missing persons, report found people, and search through missing-person cases.

For this first prototype, design 5 mobile screens:

Register
Login
Forgot Password – Enter Email
Forgot Password – OTP Verification
Forgot Password – Create New Password
IMPORTANT — MOBILE ONLY

Design these screens specifically as a mobile application / mobile website prototype, NOT as desktop web pages.

Use a standard modern smartphone frame, approximately 390 × 844 px.

Do NOT use:

Desktop layouts
Two-column layouts
Large desktop side panels
Wide navigation bars
Excessive horizontal whitespace

Every screen should use a single-column mobile layout with comfortable spacing and touch-friendly controls.

The design should feel like a polished real-world mobile product.

DESIGN DIRECTION

The platform should feel:

Trustworthy
Safe
Professional
Calm and reassuring
Modern
Simple
Easy to navigate
Suitable for a serious public-service platform

Do NOT make it look like a police/crime website or an emergency-alert application.

Avoid excessive red, black, dramatic imagery, or aggressive visual elements.

Use a light theme with a clean, spacious interface.

COLOR PALETTE

Use this exact palette:

Primary Navy: #12304A
Primary Teal: #168C8C
Background: #F8FAFC
White: #FFFFFF
Border / Light Gray: #E5E7EB
Main Text: #1F2937
Secondary Text: #6B7280
Error Red: #DC2626

Color usage:

Navy → logo, headings, important text
Teal → primary buttons, links, active states, progress indicators
White → cards and input areas
Light gray → background and borders
Dark gray → normal text
Red → ONLY errors and warnings
TYPOGRAPHY

Use Inter or another clean modern sans-serif font.

Make the typography highly readable on a phone.

Use:

Large, clear page headings
Medium supporting text
Clearly visible form labels
Comfortable input text
Touch-friendly button text

The design should also be easy to adapt to Arabic RTL in the future.

GENERAL MOBILE UI STYLE

Use:

8–12px rounded corners
Subtle shadows
Clean white surfaces
Comfortable vertical spacing
Large touch-friendly inputs
Large primary buttons
Clear form labels
Minimal decorative elements

Avoid:

Excessive gradients
Glassmorphism
Heavy shadows
Complicated illustrations
Excessive animations
Crowded screens

The result should look like a real production mobile application, not a generic AI-generated UI.

BRANDING

Create a simple brand identity for the platform.

Use the placeholder name:

Mafqoud

Create a simple minimal icon related to:

A person
Location
Search
Reconnecting people

Do not make the logo complicated.

Place the logo at the top of the authentication screens.

The logo should be compact enough for a mobile interface.

SCREEN 1 — REGISTER

Create a mobile registration screen.

Layout

At the top:

Mafqoud logo

Then:

Create an account

Supporting text:

Join the community and help us reconnect missing people with their families.

Then the registration form.

Fields

Full Name

Email Address

Phone Number

Password

Confirm Password

Each input should:

Have a visible label
Have a comfortable touch target
Use rounded corners
Have a subtle border
Include appropriate placeholder text

Password fields should include a visibility/eye icon.

Checkbox

Add:

☐ I agree to the Terms of Service and Privacy Policy

Make the terms and privacy policy clickable teal links.

Primary Button

Large full-width teal button:

Create Account

Bottom

Text:

Already have an account? Log in

Make Log in teal.

Ensure the screen can scroll if necessary so the keyboard does not create layout problems.

SCREEN 2 — LOGIN

Use the same visual identity as Register.

Top:

Mafqoud logo

Heading:

Welcome back

Supporting text:

Log in to your account to continue.

Fields

Email Address

Password

Password should have an eye/visibility icon.

Below the password field:

Left:
☐ Remember me

Right:
Forgot password?

Make "Forgot password?" teal.

Primary Button

Full-width teal button:

Log In

Bottom

Don't have an account? Create one

Make Create one teal.

Keep the screen simple and uncluttered.

SCREEN 3 — FORGOT PASSWORD — ENTER EMAIL

This is the first screen in the password recovery flow.

Top:

A small back arrow on the left.

Then optionally the Mafqoud logo.

Heading:

Forgot your password?

Supporting text:

Enter the email address associated with your account and we'll send you a verification code.

Progress Indicator

Show the three-step process near the top:

1 Email → 2 Verify → 3 New Password

Use teal for Step 1 and muted gray for Steps 2 and 3.

Form

Label:

Email Address

Input field.

Button

Full-width teal:

Send Verification Code

Bottom

Back to Login

Make it a teal link.

Keep the screen visually balanced with plenty of vertical spacing.

SCREEN 4 — FORGOT PASSWORD — OTP VERIFICATION

Top:

Back arrow.

Progress indicator:

1 Email → 2 Verify → 3 New Password

Highlight Step 2 in teal.

Heading:

Verify your email

Supporting text:

We've sent a 6-digit verification code to your email address.

Display a masked email:

o*@gmail.com**

OTP INPUT

Create six separate large OTP boxes:

[ _ ] [ _ ] [ _ ] [ _ ] [ _ ] [ _ ]

The boxes should:

Be equal width
Be touch-friendly
Have clear borders
Clearly show the active/focused state
Resend

Text:

Didn't receive the code?

Then:

Resend code

Show a small timer:

Resend available in 00:45

Button

Full-width teal:

Verify Code

Below:

Back

Keep this screen very clean and focused because the OTP is the main action.

SCREEN 5 — CREATE NEW PASSWORD

Top:

Back arrow.

Progress indicator:

1 Email → 2 Verify → 3 New Password

Highlight Step 3 in teal.

Heading:

Create a new password

Supporting text:

Choose a strong password for your account.

Fields

New Password

Confirm New Password

Both should include password visibility icons.

Password Strength

Below the new password field:

Password strength

Show a simple visual strength indicator.

Possible states:

Weak

Medium

Strong

Also show password requirements:

✓ At least 8 characters
✓ At least one uppercase letter
✓ At least one number
✓ At least one special character

Use subtle visual indicators so the requirements don't make the screen feel crowded.

Button

Full-width teal:

Reset Password

After successful reset, prepare a success state that can later show:

Password reset successfully

You can now log in with your new password.

Include a button:

Go to Login

MOBILE RESPONSIVENESS

All screens should be designed for approximately:

390 × 844 px

Also ensure the design can scale to common phone sizes such as:

375 × 812
393 × 852
430 × 932

Use responsive Auto Layout rather than fixed positioning wherever possible.

Inputs and buttons should be at least approximately 44px high for comfortable touch interaction.

Buttons should generally span most of the available screen width while maintaining comfortable side margins.

Use approximately 20–24px horizontal padding around the main content.

COMPONENTS

Create reusable mobile components for:

Mafqoud logo
Primary button
Secondary button
Text input
Password input
OTP input
Checkbox
Form label
Error message
Success message
Progress indicator
Back button
Links

Create reusable styles for:

Colors
Typography
Spacing
Border radius
Shadows
Input states
Button states

Use Auto Layout and reusable components throughout the design.

Include states for:

Default
Focused
Error
Disabled
Success
FINAL REQUIREMENT

All five screens must look like they belong to one cohesive mobile product.

The authentication flow should visually communicate:

Register / Login

and:

Forgot Password → Enter Email → OTP Verification → Create New Password

Prioritize simplicity, readability, trust, and ease of use over decorative design.