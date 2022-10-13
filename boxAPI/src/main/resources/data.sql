-- Users
INSERT INTO app_user (country, postal_code, phone_number)
VALUES('Sweden', '2712', 23494234);

INSERT INTO app_user (country, postal_code, phone_number)
VALUES('Norway', '0002', 47892713);

-- Countries
INSERT INTO country (country_name, multiplier)
VALUES('Germany', 5);

INSERT INTO country (country_name, multiplier)
VALUES('Netherlands', 5);

INSERT INTO country (country_name, multiplier)
VALUES('Belgium', 5);


-- Packages
INSERT INTO package (receiver_name, color, mail, user_id)
VALUES('Pernille Ofte', 'white','pernille.ofte@no.experis.com', 1);

INSERT INTO package (receiver_name, color, mail, user_id)
VALUES('Ole Syverinsen', 'pink', 'ole.syverinsen@no.experis.com', 2);

INSERT INTO package (receiver_name, color, mail, status, user_id)
VALUES('Ole Syverinsen', 'blue', 'ole.syverinsen@no.experis.com', 'COMPLETED', 2);

INSERT INTO package (receiver_name, color, mail, status)
VALUES('Ole Syverinsen', 'black', 'oXXXXXXXXXXXXXXX', 'CREATED');

INSERT INTO package (receiver_name, color, mail, status)
VALUES('Ole Syverinsen', 'orange', 'oXXXXXXXXXXXXXXX', 'CANCELLED');

-- Weight
INSERT INTO weight (weight_type, value)
VALUES ('BASIC', 1)