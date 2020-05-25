Feature: New Account Page 
	As a user I want new account page so that accounts can
  be created.
  
 #Scenario: C234  - Add new account
 #Given a user with username "techfiosdemo@gmail.com" and password "abc123"
 #When user navigates to New Account Page
 #Then New Account Page should display
  
 #Scenario: C235  - Create a new account
 #Given a user with username "techfiosdemo@gmail.com" and password "abc123"
# When user navigates to New Account Page
 #When user creates a new account using title "Pizza" Description "Two Toppings" Amount "10"
 
Scenario Outline: C235 -  Create a new account 
	Given a user with username "<username>" and password "<password>" 
	When user navigates to New Account Page 
	When user creates a new account using  title "<title>" Description "<description>" Amount "<amount>" 
	
	Examples: 
	|username	           |password|title   |description|amount|
	|techfiosdemo@gmail.com|abc123  |piya    |goodes     |20    |
	|techfiosdemo@gmail.com|abc123  |Sandwich|veg        |7     |
	                                