$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/new_account.feature");
formatter.feature({
  "line": 1,
  "name": "New Account Page",
  "description": "As a user I want new account page so that accounts can\r\nbe created.",
  "id": "new-account-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario: C234  - Add new account"
    },
    {
      "line": 6,
      "value": "#Given a user with username \"techfiosdemo@gmail.com\" and password \"abc123\""
    },
    {
      "line": 7,
      "value": "#When user navigates to New Account Page"
    },
    {
      "line": 8,
      "value": "#Then New Account Page should display"
    },
    {
      "line": 10,
      "value": "#Scenario: C235  - Create a new account"
    },
    {
      "line": 11,
      "value": "#Given a user with username \"techfiosdemo@gmail.com\" and password \"abc123\""
    },
    {
      "line": 12,
      "value": "# When user navigates to New Account Page"
    },
    {
      "line": 13,
      "value": "#When user creates a new account using title \"Pizza\" Description \"Two Toppings\" Amount \"10\""
    }
  ],
  "line": 15,
  "name": "C235 -  Create a new account",
  "description": "",
  "id": "new-account-page;c235----create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a user with username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user creates a new account using  title \"\u003ctitle\u003e\" Description \"\u003cdescription\u003e\" Amount \"\u003camount\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "new-account-page;c235----create-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title",
        "description",
        "amount"
      ],
      "line": 21,
      "id": "new-account-page;c235----create-a-new-account;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "piya",
        "goodes",
        "20"
      ],
      "line": 22,
      "id": "new-account-page;c235----create-a-new-account;;2"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "Sandwich",
        "veg",
        "7"
      ],
      "line": 23,
      "id": "new-account-page;c235----create-a-new-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6190466100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "C235 -  Create a new account",
  "description": "",
  "id": "new-account-page;c235----create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user creates a new account using  title \"piya\" Description \"goodes\" Amount \"20\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 5416648800,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "duration": 3061998401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "piya",
      "offset": 41
    },
    {
      "val": "goodes",
      "offset": 60
    },
    {
      "val": "20",
      "offset": 76
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 4655081300,
  "status": "passed"
});
formatter.after({
  "duration": 3827591200,
  "status": "passed"
});
formatter.before({
  "duration": 4596151900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "C235 -  Create a new account",
  "description": "",
  "id": "new-account-page;c235----create-a-new-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a user with username \"techfiosdemo@gmail.com\" and password \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user navigates to New Account Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user creates a new account using  title \"Sandwich\" Description \"veg\" Amount \"7\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 22
    },
    {
      "val": "abc123",
      "offset": 60
    }
  ],
  "location": "NewAccountSteps.a_user_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 4665685899,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_New_Account_Page()"
});
formatter.result({
  "duration": 3208806000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandwich",
      "offset": 41
    },
    {
      "val": "veg",
      "offset": 64
    },
    {
      "val": "7",
      "offset": 77
    }
  ],
  "location": "NewAccountSteps.user_creates_a_new_account_using_title_Description_Amount(String,String,String)"
});
formatter.result({
  "duration": 4573093999,
  "status": "passed"
});
formatter.after({
  "duration": 3812642600,
  "status": "passed"
});
});