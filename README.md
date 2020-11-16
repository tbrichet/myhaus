# MyHaus

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Links](#links)
* [Screenshots](#screenshots)
* [Questions](#questions)

## Description:
The app consists of two user portals: one that allows landlords to manage their properties and tenants, and a second that allows tenants to submit routine maintenance requests and pet updates for landlord review. 

## Installation:
1. Clone from Github repository. <br>
2. Install required npm packages: <br>
* Node.js <br>
* Express <br>
* Express-Session <br>
* Express-Handlebars <br>
* Handlebars <br>
* Sequelize <br>
* Bcrypt <br>
* Dotenv <br>
* MySql2 <br>
* Connect-Session Sequelize <br>
* Nodemon (recommended)<br>
3. Run MySql and source the database. (Command: "source db/schema.sql;)<br>

## Usage:
Through Local Server:<br>
1. Start from the terminal using "npm start" command. <br>
2. Go to "localhost:3001/signup" in the browser to access app. <br>
3. Input required fields and use links to navigate through site. (See Tests)<br>
<br>

Through Deployed Application:<br>
1. Go to "https://myhaus.herokuapp.com/" in the browser to access app.
2. Input required fields and use links to navigate through site. (See Tests)<br>

## License:
This Repository is covered under the following license: [ISC]

## Contributors:
Tara Brichetto, Joseph DeFelice, Richard Flores, Stephen Pena, Chris Walston 

## Tests:
1. Go to "https://myhaus.herokuapp.com/signup" in the browser to access the app. <br>
2. Fill in the required fields to create a landlord account and click "sign up." <br>
3. From the landlord dashboard, click the plus sign to create a new property. Enter information into the required fields and submit. <br>
4. Copy the generated Property Id and click "log out." <br>
5. Go to "https://myhaus.herokuapp.com/tenant/signup" in the browser to create a tenant account. <br>
6. Fill in the required fields and paste the Property Id into the invitaiton code field. Click "sign up." <br>
7. Test the "Your Information" section by updating the tenant's first name, last name, or e-mail. <br>
8. Test the "Request Maintenance" section by clicking the "+" button to enter a maintenance request. <br>
9. Test the "Pet Status" section by clicking the "+" button to enter an updated pet status.
10. Click log out to exit the tenant dashboard and go to the main page "https://myhaus.herokuapp.com/" <br>
11. Log in with your previously created landlord email and password. <br>
12. Confirm the maintenance and pet requests you created in the tenant dashboard are displaying under "Maintenance Requests" and "Pet Updates" in the sidebar.

## Links:
Deployed Application: https://my-haus.herokuapp.com/
Deployed Application (Backup): https://myhaus.herokuapp.com/ <br>
Github Repository (Final): https://github.com/tbrichet/myhaus <br>
Github Repository (All Drafts): https://github.com/Richardflores009/MyHaus <br>
Group Presentation Link: https://docs.google.com/presentation/d/1xQFHIo6Cto5SCeIT4NqHazeNlVLE9taPFQ-gR5MFmlM/edit?usp=sharing <br>

## Screenshots:

![](public/img/Signup.PNG)
![](public/img/LLLogin.PNG)
![](public/img/LLDashboard.PNG)
![](public/img/tenantsignup.PNG)
![](public/img/tenantlogin.PNG)
![](public/img/tenantdash.PNG)

## Questions:
Contact me:<br>
Github: [https://github.com/penaone](https://github.com/penaone)<br>
Email: [penaone@gmail.com](penaone@gmail.com)<br>

