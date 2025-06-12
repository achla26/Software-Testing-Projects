# Test Cases – Login Functionality

| Test Case ID | Title                        | Steps                                                                                  | Expected Result                       | Actual Result                       | Status |
|--------------|------------------------------|----------------------------------------------------------------------------------------|---------------------------------------|-------------------------------------|--------|
| TC001        | Login with valid credentials | 1. Go to saucedemo.com <br> 2. Enter `standard_user` <br> 3. Enter `secret_sauce` <br> 4. Click Login | User is redirected to "Products" page | Redirected to "Products" page       | ✅ Pass |
| TC002        | Login with invalid password  | 1. Go to saucedemo.com <br> 2. Enter `standard_user` <br> 3. Enter `wrong_password` <br> 4. Click Login | Error message is shown                | Error message shown                 | ✅ Pass |
| TC003        | Login with empty fields      | 1. Go to saucedemo.com <br> 2. Leave username and password empty <br> 3. Click Login    | Error message is shown                | Error not shown (UI bug)            | ❌ Fail |
