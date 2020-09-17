Feature: To Test the OrangeHrm Application

Background: To Test the Login Function of OrangeHrm
Given To launch the browser and Navigate to the Url
When To Enter Username and Password
Then To Click the Submit button
Then To Take the Screenshot and the Title  

Scenario Outline: To test the admin page of orangehrm
Given To open Admin functionlity of orangehrm
When To enter "<UserName>"
Then To select "<UserRole>"
Then To Enter EmployeeName
Then Select status
Then Click the search button
Then To take a screenshot and the title
Then to close the browser

Examples:
|UserName|UserRole|
|sai|Admin|
|charan|Admin|
