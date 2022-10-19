-- Users
INSERT INTO app_user (user_id, country, postal_code, phone_number, birthday)
VALUES('cd1bcfe9-099d-4ac2-9dfb-8d5e31e02fe9', 'Sweden', '2712', 23494234, '01-02-2008');

--INSERT INTO app_user (user_id, country, postal_code, phone_number)
--VALUES('ole.syverinsen@no.experis.com', 'Norway', '0002', 47892713);

-- Countries
INSERT INTO country (country_id, multiplier)
VALUES('Germany', 5);

INSERT INTO country (country_id, multiplier)
VALUES('Netherlands', 5);

INSERT INTO country (country_id, multiplier)
VALUES('Belgium', 5);

-- Weight
INSERT INTO weight (weight_id, value)
VALUES ('BASIC', 1);
INSERT INTO weight (weight_id, value)
VALUES ('HUMBLE', 2);
INSERT INTO weight (weight_id, value)
VALUES ('DELUXE', 5);
INSERT INTO weight (weight_id, value)
VALUES ('PREMIUM', 8);

-- Packages
--INSERT INTO package (receiver_name, color,user_id, country_id, total_sum)
--VALUES('Pernille Ofte', 'white', 'ole.syverinsen@no.experis.com', 'Germany', 10);

--INSERT INTO package (receiver_name, color, user_id,total_sum)
--VALUES('Ole Syverinsen', 'pink', 'pernille.ofte@no.experis.com' , 205);

--INSERT INTO package (receiver_name, color, status, user_id)
--VALUES('Ole Syverinsen', 'blue', 'COMPLETED', 'pernille.ofte@no.experis.com');

INSERT INTO package (receiver_name, weight_id, color, country_id, status, total_sum, user_id)
VALUES('Ole Syverinsen', 'DELUXE', '#FFFFFF', 'Germany', 'CREATED', 293, 'cd1bcfe9-099d-4ac2-9dfb-8d5e31e02fe9');

INSERT INTO package (receiver_name, weight_id, color, country_id, status, total_sum, user_id)
VALUES('Ole Syverinsen', 'BASIC', '#424242', 'Belgium', 'COMPLETED', 310, 'cd1bcfe9-099d-4ac2-9dfb-8d5e31e02fe9');