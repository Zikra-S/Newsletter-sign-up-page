# Newsletter Sign-up Form

A responsive newsletter sign-up form with email validation and a success message, built as a solution to a [Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv) challenge.


## Overview

Users can enter their email address to subscribe to a newsletter. The form validates the email as they submit, shows an error message for empty or invalid entries, and displays a personalized success message once subscribed — with the option to dismiss it and sign up again.

## Features

- Controlled email input with live state tracking
- Email format validation using a regular expression
- Error message shown for empty or invalid email addresses
- Success screen showing the submitted email in bold
- "Dismiss message" button to reset and return to the form
- Fully responsive layout: illustration and form rearrange between mobile and desktop
- Built with strict TypeScript typing throughout

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Zikra-S/Newsletter-sign-up-page.git
cd Newsletter-sign-up-page
pnpm install
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/images/   # Illustrations and icons
├── App.tsx          # Form, validation, and success state logic
├── index.css        # Tailwind import and global styles
├── main.tsx         # App entry point
```

## What I Learned

This project introduced form handling in React, building on concepts from earlier projects:

- Controlled inputs with `useState` and `onChange`
- Validating text input using a regular expression
- Using `e.preventDefault()` to stop a form's default reload behavior
- Conditional rendering to swap between a form and a success state
- Structuring responsive layouts with Tailwind CSS breakpoints
- Serving different images per screen size using the `<picture>` element
