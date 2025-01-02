@login
Feature: Login Functionality
    Background: Given user is on the login page
        Given user navigates to the OrangeHRM login page
    @Login_page
    Scenario: Check the login oage elements
        When header logo is visible
        Then verify the login text and details present
        And verify username placeholder is present
        And verify password placeholder is present
        And verify login button is present
        And verify forgot password link is present
        And verify footer logo is present
    # And verify "Login" button has "rgb(255, 123, 29)" color

    @Login_feature
    Scenario Outline: Validate Login operation
        When user enters "<username>" and "<password>"
        And click on login button
        Then user is navigated to the dashboard page
        # And user gives wrong password and username
        # And error message is displayed
        Examples:
            | username | password  |
            | Admin    | admin1234 |
            | Admin    | admin123  |

    # @Social_media
    # Scenario Outline: Validate the social media icons
    #     When verify the social media icons are present
    #     And user clicks on "<links>"
    #     Then user is navigated to the "<url>"
    #     Examples:
    #         | links     | url                                         |
    #         | Youtube   | https://www.youtube.com/c/OrangeHRMInc      |
    #         | Twitter | https://x.com/orangehrm |
    #         | Facebook | https://www.facebook.com/OrangeHRM/         |
    #         | LinkedIn  | https://www.linkedin.com/company/orangehrm/ |

    @Dashboard_page
    Scenario Outline: Validate the dashboard page elements
        When User is on the dashboard page
        Then verify the dashboard heading
        And verify the upgrade button 
        And verify the elements in dropdown menu 
        
