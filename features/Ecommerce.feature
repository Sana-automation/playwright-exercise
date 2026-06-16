Feature: Ecommerce validations
//Feature Description : This feature will validate the ecommerce application functionality

Background:
Given the user navigates to the ecommerce application "https://automationexercise.com"
And the user is on the homepage

 @smoke
 Scenario: Verify the item present
    When the user clicks on the product tab
    Then the user adds an item to the cart
    When the user navigates to the cart page
    Then the cart page should display the added item in the cart
@regression
Scenario Outline:Verify the contact form functionality
    When the user clicks on the contact us tab
    When the user fills the contact form '<name>', '<email>', '<subject>', and '<message>', and submits it
    Then the user should see a success message after submitting the form
    Examples:
      | name  | email             | subject       | message           |
      | John  | john@example.com  | Inquiry       | I have a question |
      | Sam   | sam@example.com   | Feedback      | I have feedback   |

