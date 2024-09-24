import express from 'express'; // imported express from the Express module
import bodyParser from 'body-parser'; // it allows us to take in the incoming POST request body

const app = express(); // created an app using the express object
const PORT = 3000 // specified the port for the application, can change the port when it's used by other apps

app.use(bodyParser.json()); // specified that JSON data will be used in the application

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)); // make our application listen for incoming requests