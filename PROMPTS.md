# Prompts to follow for DevConf session

## Database
1. Generate create script
```
Please generate the create script for a table called "vehiclequote" in a postgres sql database. The table should contain the following information:

id,
vehicledescription,
vehiclefinanceamount,
interestrate,
paymenttermmonths,
monthlypaymentamount,
totalpaymentamount

the amount fields should be limited to two decimal places
```


## Api
1. Generate routes file
```
Given that we have a nodejs express api, please generate a routes file called "vehicle-quote-routes.js" that we will put inside a folder called "routes" in our application. The api methods that should be generated is a "post" method for inserting a record and a "get" method to retrieve all the records in the table. Please also include the implementation for the pg database operations. Please also include a snippet of how to add that to the main application.
```

2. Update routes file with calculations
```
please update the post method to automatically calculate the values for "monthlypaymentamount" and "totalpaymentamount"
```

3. Generate openapi doc
```
Please generate an openapi jsdoc for the two methods as well as the object schema
```

4. Generate swagger code
```
Please provide a snippet on how to serve a swagger in our application
```

## Frontend

1. Generate typescript interface
```
Given the following DB script , please create an angular typescript interface
CREATE TABLE vehiclequote (
  vehicledescription VARCHAR(255),
  vehiclefinanceamount NUMERIC(10, 2),
  interestrate NUMERIC(5, 2),
  paymenttermmonths INTEGER
);
```

2. Generate formgroup
```
using the interface generated above, create an angular formgroup function
```

3. Generate insert method to api
```
using this implementation as an example 
public getInfo() { 
    this.http.get('http://localhost:3000/').subscribe(element => { 
        this.element = element; 
    }, error=> { 
        console.log(error); 
    });
}
create a similar implementation to call this route router.post('/vehiclequote', async (req, res)
```

4. Generate get method to api
```
create another similar implementation to call this route 
router.get('/vehiclequote`, async (req, res) => {
```