# SauceDemo End-to-End Automation Testing using Playwright

## Project Overview

This project is an End-to-End (E2E) Automation Testing project developed using Playwright with JavaScript.

The project automates the complete shopping workflow of the SauceDemo website, including login, product selection, cart operations, checkout, order confirmation, logout, and invalid login validation.

**Website:** https://www.saucedemo.com/

## Technologies Used

- Playwright
- JavaScript
- Node.js
- Visual Studio Code

## Test Scenarios Covered

### 1. Login Functionality
- Open SauceDemo website.
- Enter valid username and password.
- Click on Login button.
- Verify successful login.
- Validate page title.

### 2. Add to Cart
- Select Sauce Labs Backpack.
- Add product to cart.
- Capture screenshot after adding product.

### 3. Shopping Cart
- Navigate to shopping cart.
- Verify cart page.
- Capture cart screenshot.

### 4. Checkout Process
- Click on Checkout button.
- Enter First Name.
- Enter Last Name.
- Enter ZIP/Postal Code.
- Click on Continue.

### 5. Order Confirmation
- Click on Finish button.
- Generate PDF order.
- Capture order confirmation screenshot.

### 6. Logout Functionality
- Open navigation menu.
- Click on Logout.
- Capture logout page screenshot.

### 7. Invalid Login
- Enter valid username.
- Enter incorrect password.
- Click on Login.
- Capture invalid login screenshot.

## Playwright Concepts Used

- `page.goto()` – Navigate to website.
- `locator()` – Locate web elements.
- `fill()` – Enter text into input fields.
- `click()` – Perform click operations.
- `getByRole()` – Locate elements using roles.
- `getByPlaceholder()` – Locate input fields.
- `toHaveTitle()` – Validate page title.
- `screenshot()` – Capture screenshots.
- `waitForTimeout()` – Wait for a specified time.
- `test.setTimeout()` – Set test execution timeout.

## Project Structure

```text
SauceDemo-Playwright-Automation/
│
├── tests/
│   └── saucedemo.spec.js
│
├── screenshot/
│   ├── 01-Login-page-page.png
│   ├── 02-add_to_cart.png
│   ├── 03-Cart-page.png
│   ├── 04-checkout-page.png
│   ├── 05-order-confirm-page.png
│   ├── 06-menupage.png
│   ├── 07-logout-page.png
│   └── 08-wrong_password.png
│
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## How to Run the Project

### Step 1: Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

### Step 4: Run Automation Test

```bash
npx playwright test --headed
```

### Step 5: Run in Headless Mode

```bash
npx playwright test
```

### Step 6: View HTML Report

```bash
npx playwright show-report
```

## Screenshots

Screenshots are captured at different stages of the automation execution and stored in the screenshot folder.

## Learning Outcomes

- Understanding End-to-End Automation Testing.
- Automating login and logout functionality.
- Handling web elements using Playwright locators.
- Performing shopping cart operations.
- Automating checkout and order confirmation.
- Validating page titles.
- Capturing screenshots during test execution.
- Handling positive and negative login scenarios.

## Author

**Sonal Dhobi**

GitHub: https://github.com/sonaltester

LinkedIn: https://www.linkedin.com/in/sonal-dhobi-b00674271/
