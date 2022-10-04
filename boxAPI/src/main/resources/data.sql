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

-- Packages
INSERT INTO package (receiver_name, weight, color, mail)
VALUES('Pernille Ofte', 'basic', 'white', 'pernille.ofte@no.experis.com');

INSERT INTO package (receiver_name, weight, color, mail)
VALUES('Ole Syverinsen', 'humble', 'pink', 'ole.syverinsen@no.experis.com');