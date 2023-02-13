# Backend-Development-Medical-Bill
A simple Backend development application to check and integrate with the API testing at end points

Aim: 
 We need to implement a simple medical bill upload service using Node and Express.

Used:
Language: Node
Framework: Express

Requirments:
Two endpoints are required
    GET /items: returns a list of medical bills
    POST /items: creates a new medical bill
A medical bill has the following properties:
 - patient name and address
 - the hospital name
 - date of service
 - bill amount.
Both endpoints should accept and return JSON.
You do not need to persist the bills to a database. Keep them in memory.
Provide API tests for both endpoints.
Provide instructions on how to run your assignment in a README.

Success Criteria
- Node best practices
- API implemented featuring the endpoints above
- Completeness: did you complete the features? Are all the tests running?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?

The application is designed for only GET and POST requests on a medical bill with both endpoints on JSON. We did not use any database as we just store the data in memory ( data is erased once the server is off). We do API testing for both endpoints.

Instruction to run:

- npm i express // Install express to runt the application
- node index.js // To start the server localhost:3000
- Perform basic GET operation which return null array initial.
//Using POSTMAN application we check for the API testing on both endpoints using localhost:3000/items url

- Using postman input a JSON data into the body and trigger POST request.
- If valid fields entered : "New medical bill is successfully uploaded" is displayed.
- Else it throws a error that not all fields are entered properly.
- use GET request to pull the data stored in memory and displays the JSON data.

