CREATE DATABASE IF NOT EXISTS db_test;

USE db_test;

CREATE TABLE t_users(
   userId INT AUTO_INCREMENT,
   useName VARCHAR(50) ,
   useFirstName VARCHAR(50) ,
   useUsername VARCHAR(50) NOT NULL,,
   usePassword VARCHAR(50)  NOT NULL,
   useCountry VARCHAR(50) ,
   useSignupDate DATETIME,
   useEmail VARCHAR(100) ,
   useNPA VARCHAR(50) ,
   useAddress VARCHAR(100) ,
   PRIMARY KEY(userId)
);

Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Fisher', 'Elvira', 'eli123','g4oC7GKB0HA2u0E', 'Burkina Faso', '2023-12-17', 'Elvira68@gmail.com', '3088', 'Apt. 457');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Quigley', 'Derek', 'appleeater','qeyYlesGjCDeTvw', 'Algeria', '2023-10-01', 'Derek_Quigley18@gmail.com', '0429', 'Suite 748');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Muller', 'Archie', 'etest9','LY7nzY90cccTpLc', 'Denmark', '2024-02-24', 'Archie_Muller@yahoo.com', '9080', 'Suite 615');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Beer', 'Amanda', 'darknight','QP6CZ_EQ04u8uZG', 'Benin', '2023-12-10', 'Amanda1@gmail.com', '1798', 'Apt. 705');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Shields-Dickinson', 'spiderman123','Leona', 'D50HsYCOCfODbtN', 'Uzbekistan', '2023-09-24', 'Leona17@yahoo.com', '3913', 'Apt. 109');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Wiegand', 'Ervin', 'csgoofer','XM7WHKAtptFlLgW', 'Eswatini', '2023-08-19', 'Ervin_Wiegand@hotmail.com', '1942', 'Apt. 205');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Davis', 'Alice', 'username123','Lno0MJ9ZtIXPrSu', 'Gabon', '2023-09-03', 'Alice_Davis@gmail.com', '9345', 'Apt. 450');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Lueilwitz', 'Conrad', 'betamale2','n1GtHexXi7HkGuM', 'Lebanon', '2024-04-21', 'Conrad43@gmail.com', '8246', 'Apt. 871');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Jacobs', 'Lola', 'evanyeagar','ZPKFoJnpX_6FBlD', 'Lebanon', '2024-03-12', 'Lola.Jacobs77@yahoo.com', '8063', 'Apt. 255');  
Insert Into t_users (useName, useFirstName, useUsername, usePassword, useCountry, useSignupDate, useEmail, useNPA, useAddress) Values ('Ward-Parisian', 'Alberto','ethan', 'password', 'Mauritania', '2024-03-19', 'Alberto.Ward-Parisian67@yahoo.com', '2248', 'Suite 365'); 