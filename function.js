const axios = require('axios');
const functions = {
    add: (a, b) => a + b,
    checkValue: x => x,
    createUser : () => {
        const user = {
            firstName:"Shubham", 
            lastName:"Kalia"
        }
        return user;
    },
    fetchUser: () => 
        axios('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => "error")
}

module.exports = functions;