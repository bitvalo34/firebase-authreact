# React Firebase Authentication Lab

## Overview
This project is a React application integrating Firebase Authentication. It includes:
- Email/Password registration and login
- Password reset functionality
- Federated authentication with Google and GitHub
- Protected dashboard with user info and logout
- Update display name on Dashboard

## Getting Started

### Prerequisites
- Node.js installed
- A Firebase project configured with Authentication enabled (Email/Password, Google, GitHub)

### Installation
1. Clone the repository:
   
   git clone https://github.com/bitvalo34/firebase-authreact
   
   cd firebase-authreact

2. Install dependencies:

   npm install

3. Running Locally

   npm run dev

### Live Preview
Check out the live preview on CodeSandbox: [CodeSandbox Live Preview](https://codesandbox.io/p/sandbox/firebase-authreact-9pddhq)

### Example Usage
User Registration:
- Navigate to /register to create a new account. You can register using:

  - Email and Password: Fill in the display name, email, and password fields.

  - Federated Providers: Click "Register with Google" or "Register with GitHub" to use social login.

User Login:
- Navigate to /login to sign in. Enter your email and password, or use Google/GitHub login.

Password Reset:
- Click the "Forgot Password?" link on the login page to request a password reset email.

Protected Dashboard:
- After a successful login, you'll be redirected to /dashboard, which shows your user details (email or display name), allows you to update your display name, and includes a logout button.

### Screenshots
1. Registration Page Screenshot



- User Registration Page - Create a new account using email/password or federated providers.

2. Login Page Screenshot



- User Login Page - Existing users can sign in with their credentials or via federated login.

3. Dashboard Screenshot



- Dashboard - Protected area displaying user details with options to update profile and logout.

4. Password Reset Page Screenshot 



- Password Reset Page - Request a password reset email if you've forgotten your password.
