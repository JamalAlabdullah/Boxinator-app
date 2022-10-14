-- Users
INSERT INTO app_user (user_id, country, postal_code, phone_number)
VALUES('pernille.ofte@no.experis.com', 'Sweden', '2712', 23494234);

INSERT INTO app_user (user_id, country, postal_code, phone_number)
VALUES('ole.syverinsen@no.experis.com', 'Norway', '0002', 47892713);

-- Countries
INSERT INTO country (country_id, multiplier)
VALUES('Germany', 5);

INSERT INTO country (country_id, multiplier)
VALUES('Netherlands', 5);

INSERT INTO country (country_id, multiplier)
VALUES('Belgium', 5);


-- Packages
INSERT INTO package (receiver_name, color, mail, user_id, country_id)
VALUES('Pernille Ofte', 'white','pernille.ofte@no.experis.com', 'ole.syverinsen@no.experis.com', 'Germany');

INSERT INTO package (receiver_name, color, mail, user_id)
VALUES('Ole Syverinsen', 'pink', 'ole.syverinsen@no.experis.com', 'pernille.ofte@no.experis.com');

INSERT INTO package (receiver_name, color, mail, status, user_id)
VALUES('Ole Syverinsen', 'blue', 'ole.syverinsen@no.experis.com', 'COMPLETED', 'pernille.ofte@no.experis.com');

INSERT INTO package (receiver_name, color, mail, status)
VALUES('Ole Syverinsen', 'black', 'oXXXXXXXXXXXXXXX', 'CREATED');

INSERT INTO package (receiver_name, color, mail, status)
VALUES('Ole Syverinsen', 'orange', 'oXXXXXXXXXXXXXXX', 'CANCELLED');

-- Weight
INSERT INTO weight (weight_id, value)
VALUES ('BASIC', 1)