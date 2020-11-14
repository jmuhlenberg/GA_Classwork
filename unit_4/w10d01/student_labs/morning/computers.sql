-- Open up psql and create a sql_lab database if you haven't already done so.
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it

-- Create a computers table
CREATE TABLE computers (id serial, make varchar(20) NOT NULL, cpu_speed int, memory_size int, price int, release_date timestamp, photo_url text, storage_amount int, number_usb_ports int, number_firewire_ports int, number_thunderbolt_ports int);


-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports


-- Insert 4 computers into the computers table
INSERT INTO computers (make, cpu_speed, memory_size, price) VALUES
("mac", 12, 190, 200),
("mac", 12, 300, 600),
("mac", 56, 370, 1200),
("mac", 120, 1900, 2000);



-- Select all entries from the computers table
SELECT * FROM computers;


-- HUNGRY FOR MORE?
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the computers_models, removing the storage_amount column
-- and add storage_type and storage_size columns
