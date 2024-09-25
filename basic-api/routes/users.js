import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router(); // creates a fresh router instance, stored in the variable router

// Mock database
const users = [
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com'
    },
    {
        first_name: 'Alice',
        last_name: 'Smith',
        email: 'alicesmith@example.com'
    },
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users); // send a response(the 'users' variable) in json format back to the client
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to the Database`);
})

// The :id part is a route parameter, which allows us to capture a dynamic value from the URL.
router.get('/:id', (req, res) => {
    // destructure id from req.params to extract the user ID directly from the URL
    const { id } = req.params; 

    // used the .find() method to search the data for a user whose ID matches the one captured from the URL
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

export default router