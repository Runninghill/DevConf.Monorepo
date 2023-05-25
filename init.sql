CREATE TABLE vehiclequote (
    id SERIAL PRIMARY KEY,
    vehicledescription TEXT,
    vehiclefinanceamount DECIMAL(10, 2),
    interestrate DECIMAL(5, 2),
    paymenttermmonths INT,
    monthlypaymentamount DECIMAL(10, 2),
    totalpaymentamount DECIMAL(10, 2)
);