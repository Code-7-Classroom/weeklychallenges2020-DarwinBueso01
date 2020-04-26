
let express = require('express');
let app = express();

let dataBase = require('../hard/employees.json');


// When you hit the endpoint with a GET request, you get the api respond with all data on the employees.
app.get('/employees', (req, res) => {

    if(!dataBase){
        res.status(404).send(`Couldn't find the employees.`);
    }

    res.send(dataBase);

});

// If you hit the endpoint with the employeeID, we only get the information on that one employee.
app.get('/employees/:id', (req, res) => {
    const eData = dataBase.employees.find((employee) => {
        return parseInt(req.params.id) === employee.employeeID
    })

// If you hit the endpoint with an incorrect employeeID.
    if (!eData) res.status(404).send('The employee with the given ID was not found.');
    res.send(eData); 
});










const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));