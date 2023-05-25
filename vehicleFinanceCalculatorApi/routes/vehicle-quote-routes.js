const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

/**
 * @openapi
 * components:
 *   schemas:
 *     VehicleQuote:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         vehicledescription:
 *           type: string
 *         vehiclefinanceamount:
 *           type: number
 *           format: float
 *         interestrate:
 *           type: number
 *           format: float
 *         paymenttermmonths:
 *           type: integer
 *         monthlypaymentamount:
 *           type: number
 *           format: float
 *         totalpaymentamount:
 *           type: number
 *           format: float
 *
 * /vehicle-quote:
 *   post:
 *     summary: Insert a new vehicle quote record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VehicleQuote'
 *     responses:
 *       '201':
 *         description: Successfully inserted the vehicle quote record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VehicleQuote'
 *       '500':
 *         description: An error occurred while inserting the vehicle quote
 *
 *   get:
 *     summary: Retrieve all vehicle quote records
 *     responses:
 *       '200':
 *         description: Successfully retrieved all vehicle quote records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VehicleQuote'
 *       '500':
 *         description: An error occurred while retrieving vehicle quotes
 */



// Create a new Pool instance with your PostgreSQL connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'vehicle_finance_db',
  password: 'password',
  port: 5432, // Replace with your PostgreSQL port if necessary
});

// POST method to insert a record into the "vehiclequote" table
/* This is a POST method that inserts a new record into the "vehiclequote" table in a PostgreSQL
database. It takes in the request body which contains the vehicle description, vehicle finance
amount, interest rate, and payment term months. It then calculates the monthly payment amount and
total payment amount based on the input values. It uses a Pool instance to connect to the PostgreSQL
database and executes an SQL query to insert the new record with the calculated values. If the
insertion is successful, it returns the inserted record with a status code of 201. If there is an
error, it returns a status code of 500 with an error message. */
router.post('/', async (req, res) => {
    try {
      const {
        vehicledescription,
        vehiclefinanceamount,
        interestrate,
        paymenttermmonths,
      } = req.body;
  
      // Calculate monthly payment amount
      const monthlyinterestrate = interestrate / 100 / 12;
      const totalinterestrate = Math.pow(1 + monthlyinterestrate, paymenttermmonths);
      const monthlypaymentamount = (vehiclefinanceamount * monthlyinterestrate * totalinterestrate) / (totalinterestrate - 1);
  
      // Calculate total payment amount
      const totalpaymentamount = monthlypaymentamount * paymenttermmonths;
  
      const client = await pool.connect();
      const query =
        'INSERT INTO vehiclequote (vehicledescription, vehiclefinanceamount, interestrate, paymenttermmonths, monthlypaymentamount, totalpaymentamount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
      const values = [
        vehicledescription,
        vehiclefinanceamount,
        interestrate,
        paymenttermmonths,
        monthlypaymentamount.toFixed(2),
        totalpaymentamount.toFixed(2),
      ];
  
      const result = await client.query(query, values);
      const insertedQuote = result.rows[0];
      client.release();
  
      res.status(201).json(insertedQuote);
    } catch (error) {
      console.error('Error inserting vehicle quote:', error);
      res.status(500).json({ error: 'An error occurred while inserting the vehicle quote.' });
    }
  });
  

// GET method to retrieve all records from the "vehiclequote" table
router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const query = 'SELECT * FROM vehiclequote';
    const result = await client.query(query);
    const quotes = result.rows;
    client.release();

    res.json(quotes);
  } catch (error) {
    console.error('Error retrieving vehicle quotes:', error);
    res.status(500).json({ error: 'An error occurred while retrieving vehicle quotes.' });
  }
});

module.exports = router;
