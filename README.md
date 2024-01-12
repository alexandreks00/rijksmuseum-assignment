### Assignment 1 - To address the challenges faced by the BSI Scrum Team and improve the product's confidence, here's a comprehensive plan:


• 
• 
• 
•  
• 

What do you see as a problem and what would be the approach you follow to 
address those problem is any? 
### Problem Identification:
1. **Lack of Confidence in the Product:**
   - Conduct a thorough analysis of the reported bugs and issues in production.
   - Establish a feedback loop with end-users to understand their concerns.
   - Identify key areas where the team has lost confidence and prioritize those for improvement.
2. **Continuous Negative Feedback and Reputation Issues:**
   - Review customer feedback and identify recurring issues.
   - Investigate the impact of production bugs on the product's reputation.
   - Develop a strategy to address reputation issues and improve customer satisfaction.
3. **Severe Time Pressure:**
   - Analyze the current sprint planning and workload distribution.
   - Identify bottlenecks and time-consuming tasks.
   - Propose adjustments to the workload or sprint planning process to alleviate time pressure.
### Approach:
1. **Rebuilding Confidence:**
   - Establish a clear communication channel within the team.
   - Organize regular team-building activities to boost morale.
   - Develop a plan to address specific concerns raised during the retrospective.
2. **Quality Improvement:**
   - Prioritize critical bug fixes to address reputation issues.
   - Allocate dedicated time for comprehensive testing during sprints.
   - Introduce pair programming to enhance code review and reduce bugs.
  
What kind of test strategy and test plan would you use? 
### Test Strategy and Test Plan:
1. **Test Strategy:**
   - Implement a combination of manual and automated testing.
   - Prioritize testing critical functionalities impacting reputation.
   - Focus on regression testing to catch any unintended side effects.
   - Include CyberSec tests and Performance tests
2. **Test Plan:**
   - Define test cases for each user story, covering positive and negative scenarios.
   - Incorporate exploratory testing to uncover unforeseen issues.
   - Establish a balance between unit testing, integration testing, and end-to-end testing.
  
List any issues after reviewing the acceptance criteria’s 
### Issues in Acceptance Criteria:
1. **User Story 1:**
   - Ensure compatibility testing in IE and Firefox.
   - Validate the presentation of detailed candidates.
   - Verify the user-friendly interface for searching.
2. **User Story 2 & 3:**
   - Validate the constraints for selecting employees, space, and equipment.
   - Confirm the ability to edit appointments without errors.
3. **User Story 4:**
   - Confirm SMS or email notifications for canceled appointments.
4. **User Story 5:**
   - Ensure the removal of Hibernate layer meets acceptance criteria.
   - Validate online payment components and absence of iFrames.

Indicate your test cases related to the user stories 
### Test Cases(full details in Notes):
1. User Story 1:
    * Ensure compatibility testing in IE and Firefox. The issue here is not including Chrome and Safari that got the biggest marketshare (usage)
    * Validate the presentation of detailed candidates. This question just be clarified because we don’t know all the details and requirements to consider a candidate as appropriate.
    * Verify the user-friendly interface for searching. As the previous Acceptance Criteria, the question is vague. UX/UI Designer usually would send us a Figma/Prototype with user flow and design.
2. User Story 2 & 3:
    * Validate the constraints for selecting employees, space, and equipment. We should discuss about the calendar’s format. More business details MUST be defined/expanded for this feature, so changing start/end time could be done depending from missing business rules here (example: After 24h you could not be allowed to change them)
    * Confirm the ability to edit appointments without errors So after setting the time, user is allowed to select available Employees..
3. User Story 4:
    * Confirm SMS or email notifications for canceled appointments. Some profile (as Management) is required. So for example, the Manager should be given a permission so he can notify consumers about the cancellation and he can find another employee to do the service.
4. User Story 5:
    * Ensure the removal of Hibernate layer meets acceptance criteria. I call this as a technical debit. It doesn’t have to be a user story, it could be a task on Jira for improvements on the current application.
    * Validate online payment components and absence of iFrames. It doesn’t make sense, why Iframes are not allowed, it looks like this acceptance criteria is not connected to this userStory. (CyberSec could be run here)

  
What test tools and test techniques would you use to address problems?
### Test Tools and Techniques:
1. **Tools:**
   - PlaywrightJS for automated UI testing.
   - PlaywrightJS for API testing.
   - Mocha for Unit Testing
   - Jira for issue tracking and project management.
   - Cucumber/BDD for functional testing/documentation and to enhance communication and collaboration
2. **Techniques:**
   - Pair testing to enhance collaboration.
   - Stress testing for critical functionalities.
   - Code review for identifying potential issues.
  
How would you setup test data?
### Test Data Setup:
1. **Appointment Data:**
   - Create test data for various appointment scenarios.
   - Include edge cases for start and end times.
2. **Employee and Resource Data:**
   - Test with different employee and resource availability scenarios.
   - Ensure coverage for different combinations.
3. **Notification Data:**
   - Simulate email and SMS notifications for testing.
### Conclusion:
Implementing this plan will help the BSI Scrum Team address the identified issues, rebuild confidence, and deliver a higher-quality product. The focus on testing, collaboration, and strategic planning aims to improve both the team's satisfaction and the product's reputation.






# Assignment 2

This repository provides a comprehensive guide on how to run Cypress tests and generate stylish reports using the Mochawesome report generator. With this cool combination, you can execute your tests with Cypress, obtain visually appealing and informative reports, and gain insights into the reliability and performance of your applications.

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/en/): Make sure you have Node.js installed to run Cypress and the necessary dependencies.

## Installation

To set up Cypress and the Mochawesome report generator, follow these steps:

1. **Clone the Repository**: Clone the project repository to your local machine using Git or download it as a ZIP file.

2. **Install Dependencies**: Open your command line interface, navigate to the project directory, and run the command `npm install` to install the project dependencies.

3. **Install Cypress**: Run the command `npm install cypress` to install Cypress and its associated packages.

4. **Install Mochawesome**: Run the command `npm install --save-dev mochawesome` to install the Mochawesome report generator as a dev dependency.

## Running Tests and Generating Reports

Now that you have everything set up, let's run Cypress tests and generate cool Mochawesome reports:

1. **Open the Cypress Test Runner**: Run the command `npx cypress open` to launch the Cypress Test Runner. The Test Runner interface will open, showing your project's test files.

2. **Run the Tests**: Click on the desired test file in the Test Runner interface to execute the tests. You can also select multiple test files to run them concurrently.

3. **Generate Mochawesome Reports**: To generate Mochawesome reports, add the `--reporter mochawesome` flag to the Cypress command. For example, to run all tests and generate the report, use the command `npx cypress run --reporter mochawesome`.







