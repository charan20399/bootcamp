$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TestCase.feature");
formatter.feature({
  "name": "To Test the OrangeHrm Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To test the admin page of orangehrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To open Admin functionlity of orangehrm",
  "keyword": "Given "
});
formatter.step({
  "name": "To enter \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "To select \"\u003cUserRole\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.step({
  "name": "Select status",
  "keyword": "Then "
});
formatter.step({
  "name": "Click the search button",
  "keyword": "Then "
});
formatter.step({
  "name": "To take a screenshot and the title",
  "keyword": "Then "
});
formatter.step({
  "name": "to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "UserRole"
      ]
    },
    {
      "cells": [
        "sai",
        "Admin"
      ]
    },
    {
      "cells": [
        "charan",
        "Admin"
      ]
    }
  ]
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the admin page of orangehrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To open Admin functionlity of orangehrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_open_Admin_functionlity_of_orangehrm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"sai\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To select \"Admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.select_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To take a screenshot and the title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_take_a_screenshot_and_the_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the admin page of orangehrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To open Admin functionlity of orangehrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_open_Admin_functionlity_of_orangehrm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"charan\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To select \"Admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.select_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the search button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To take a screenshot and the title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_take_a_screenshot_and_the_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminSteps.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});