# Secure_E-Voting_System
This project will focus on building an e-voting system with security features of post quantum key distribution and blockchain technology.

# Prerequisites

## Front-end
  We used React Framework, so before starting the application directly you need to run this command without arguments: <br/>
  ```
  npm install
  ```
  It will resolve all the required dependencies from the package.json file. <br/>
  Then run this command to start the deploying project on your local host:
  ```
  npm start
  ```
  
  
## Back-end
  We used Django as Framework , you need first to add these settings on the setting.py file to be able to bypass Cross-Origin Request policy.<br/>
  In MIDDLEWARE Section add this two lines:
  ```
  'corsheaders.middleware.CorsMiddleware',
  'django.middleware.common.CommonMiddleware'
  ```
  They correspond to a filter that’ll intercept all of our application’s requests and apply CORS logic to them.
  
  In the last line add a list of origins authorized to be able to make requests:
  ```
  CORS_ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://127.0.0.1:8000"
  ]
  ```
  All the dependencies already pinned in a requirements.txt file. In that case, you can install the right Django version as well as all the other necessary packages in a single   command:
  ```
  python -m pip install -r requirements.txt
  ```
  Then Run the development server to verify everything is working:
  ```
  python manage.py runserver
  ```
# Overview
While the registration process is reserved for voters, the administrator is already set up in the system. The administrator sets up an environment for the different elections that go on inside the application. The voters can see which elections are being held and view each candidate's profile and the different positions. A voter can only vote for one candidate at a time, and all Votes at the frontend are encrypted and transmitted over to server.

  ![Flow Diagram](https://user-images.githubusercontent.com/72321378/148527119-00fb7cb0-5585-4038-bc9a-7a39935377f9.PNG)

# Admin Section
• There is a admin (username: admin and password: admin26) who has the power in the system voting.<br/>
• Admin can add a new election, add candidates, search any candidate and can authenticate the candidates.<br/>
• Admin section is coded with React Component so as to fast retrieval of the data.<br/>
• Whenever admins adds a new election, tables are formed dynamically in voter database where details of the each election is stored.<br/>
  
  
  
# Voters Section
• There is encrypted (username: pal26 and password: pal26) present in the system using pbkdf2_sha256.<br/>
• Voters can view and select the election.<br/>
• They can view the all the list of positions that they are present in the selected election.<br/>
• They can view all the candidates that they are present in the select positions.<br/>
• They can vote for their candidates.<br/>

  ![UML_Diagram](https://user-images.githubusercontent.com/72321378/148527125-f709c4ed-e133-4c0c-bff4-e6e5f07f9267.PNG)
