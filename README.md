# 💰 Finance Management App (React + Firebase)

A modern finance management application that helps users track income, expenses, savings, investments, and budgets with smart analytics, predictions, and financial advice.

---

# 🚀 Tech Stack

* React (Frontend)
* Firebase Authentication (Auth)
* Firestore (Database)
* Firebase Storage (Avatar uploads)
* React Router (Navigation)
* Chart Library (Recharts / Chart.js)
* Context API / Redux (State Management)

---

# 🔐 Authentication Flow

## 1. Register

Users create an account with:

* Full Name
* Email
* Password

### Firebase

* `createUserWithEmailAndPassword`
* Store user profile in Firestore

---

## 2. Login

* Email
* Password

### Firebase

* `signInWithEmailAndPassword`

---

## 3. Forgot Password

* Email input
* Password reset email sent via Firebase

### Firebase

* `sendPasswordResetEmail`

---

## 4. Auth Guard

* Protect dashboard routes
* Redirect unauthenticated users to login

---

# 🏠 App Structure

```
/landing
/auth
/dashboard
```

---

# 🌐 Landing Page Flow

### Sections

* Hero Section
* Features Overview
* How it works
* Pricing Plans
* CTA (Get Started / Login)
* Footer

### Actions

* Sign Up
* Login

---

# 📊 Dashboard Flow

After login → user lands on:

```
/dashboard
```

---

## 🧭 Dashboard Layout

### Sidebar Navigation

* Overview
* Transactions
* Budgets
* Recurring *(Premium only)*
* Analytics
* Reports
* Settings
* Logout

---

### Top Bar

* Welcome message 👋
* Search (transactions, budgets, categories)
* Notifications 🔔
* Profile (avatar + name dropdown)

---

# 📈 Dashboard Modules

---

## 1. Overview (Home Dashboard)

### Displays:

* Total Balance
* Income
* Expenses
* Savings
* Investments

### Charts:

* Income vs Expenses
* Category breakdown

### Recent Activity:

* Latest transactions
* Budget alerts

---

## 2. Transactions

### Features:

* Add transaction
* Edit transaction
* Delete transaction
* Filter by date
* Filter by category

### Categories:

* Income
* Expenses (Needs)
* Bills (Wants)
* Savings
* Investments

---

## 3. Budgets

### Features:

* Create budget per category
* Track spending
* Budget progress bar
* Alerts when exceeded

### Example:

* Food budget: ₦30,000
* Spent: ₦20,000
* Remaining: ₦10,000

---

## 4. Recurring *(Premium Feature)*

### Features:

* Add recurring income/expense
* Set frequency:

  * Daily
  * Weekly
  * Monthly
  * Yearly
* Pause / Edit / Delete recurring items

### Examples:

* Salary (Monthly)
* Rent (Monthly)
* Netflix (Monthly)

---

## 5. Analytics

### Insights:

* Category trends
* Spending prediction
* Monthly comparison
* Yearly comparison *(Premium)*

### Charts:

* Expense breakdown
* Income trends
* Savings growth

---

## 6. Reports

### Features:

* Monthly reports
* Quarterly reports
* Yearly reports *(Premium)*

### Export Options:

* PDF
* CSV
* Excel

### Limits:

* Free: 1 export/month
* Pro: 4 exports/month
* Premium: Unlimited

---

## 7. Settings

### Profile

* Update name
* Update email
* Upload avatar

### Preferences

* Currency (4 / 8 / Multi-currency depending on plan)
* Theme (Dark / Light)
* Notifications

### Security

* Change password
* Logout

---

# 🧠 Financial Advice System (AI Feature)

## Free

* Limited financial advice

## Pro

* Unlimited financial advice

## Premium

* Advanced personalized financial insights

### Example prompts:

* “How can I reduce expenses?”
* “Can I afford ₦100,000 purchase?”
* “Why is my spending increasing?”

---

# 💳 Subscription Plans

---

## 🆓 Free Plan

Best for beginners

### Features:

* Basic dashboard
* Transactions
* Budgets
* 4 currencies
* Limited financial advice
* 1 report export/month

### Missing:

* No predictions
* No recurring
* No advanced analytics

---

## ⭐ Pro Plan

Best for active users

### Features:

* Unlimited financial advice
* 8 currencies
* 4 report exports/month
* Category trends
* Spending prediction
* Monthly comparison

---

## 👑 Premium Plan

Best for power users & automation

### Features:

* Everything in Pro
* Unlimited currencies
* Unlimited exports
* Recurring transactions
* Automation system
* Monthly comparison
* Yearly comparison
* Advanced predictions
* Smart insights engine

---

# ⚙️ Firebase Data Structure (Suggested)

## Users Collection

```
users/{userId}
```

```json
{
  "name": "OGE",
  "email": "user@email.com",
  "plan": "pro",
  "currency": "NGN",
  "createdAt": "timestamp"
}
```

---

## Transactions

```
transactions/{userId}/items/{transactionId}
```

---

## Budgets

```
budgets/{userId}/items/{budgetId}
```

---

## Recurring (Premium)

```
recurring/{userId}/items/{recurringId}
```

---

# 📌 App Flow Summary

1. User lands on Landing Page
2. User signs up / logs in (Firebase Auth)
3. Redirect to Dashboard
4. User manages:

   * Transactions
   * Budgets
   * Categories
   * Reports
   * Analytics
5. Plan controls feature access:

   * Free → basic tracking
   * Pro → insights + predictions
   * Premium → automation + recurring + full analytics

---
