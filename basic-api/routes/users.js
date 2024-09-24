import express from 'express';
const router = express.Router(); // creates a fresh router instance, stored in the variable router

// Mock database
const users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
    },
    {
        first_name: 'Alice',
        last_name: 'Smith',
        email: 'alicesmith@example.com',
    },
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users); // send a response(the 'users' variable) in json format back to the client
})

export default router