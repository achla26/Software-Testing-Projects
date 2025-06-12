# Test Plan – SauceDemo Login Functionality

## Project Name
SauceDemo Login Automation Testing

## Objective
To test the login functionality of the [saucedemo.com](https://www.saucedemo.com) application using Playwright and TypeScript.

## Scope
- Test valid and invalid login scenarios
- Functional coverage for the login form only

## Out of Scope
- Testing other modules like cart, product filters, or checkout
- Mobile/responsive testing

## Tools & Technologies
- Playwright
- TypeScript
- Node.js
- VS Code

## Test Environment
- Website: https://www.saucedemo.com
- Browsers: Chromium, Firefox, WebKit
- OS: Windows 10

## Test Types
- Functional Testing
- UI Automation Testing

## Roles & Responsibilities
- Test Design & Execution: Achla Dhiman
- Automation Implementation: Achla Dhiman

## Risks & Mitigation
| Risk                        | Mitigation                          |
|-----------------------------|--------------------------------------|
| Website may go offline      | Test against a local clone if needed |
| Element selectors may change| Use stable `data-test` attributes    |

## Deliverables
- Test Plan
- Test Cases
- Bug Report
- Test Report
- RTM
- Test Metrics

## Schedule
| Task                | Duration |
|---------------------|----------|
| Setup Playwright    | 1 Day    |
| Write Test Cases    | 1 Day    |
| Execute & Document  | 1 Day    |
