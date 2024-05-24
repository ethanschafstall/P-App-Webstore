CREATE DATABASE IF NOT EXISTS db_test;

USE db_test;

CREATE TABLE t_users (
   userId INT AUTO_INCREMENT,
   useUsername VARCHAR(50) NOT NULL,
   usePassword VARCHAR(400) NOT NULL,
   useRole VARCHAR(50) NOT NULL,
   useSalt VARCHAR(400) NOT NULL,
   PRIMARY KEY (userId)
);

INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('eli123', 'g4oC7GKB0HA2u0E', 'admin');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('appleeater', 'qeyYlesGjCDeTvw', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('etest9', 'LY7nzY90cccTpLc', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('darknight', 'QP6CZ_EQ04u8uZG', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('spiderman123', 'D50HsYCOCfODbtN', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('csgoofer', 'XM7WHKAtptFlLgW', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('username123', 'Lno0MJ9ZtIXPrSu', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('betamale2', 'n1GtHexXi7HkGuM', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('evanyeagar', 'ZPKFoJnpX_6FBlD', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('ethan', 'password', 'user');
CREATE DATABASE IF NOT EXISTS db_test;

USE db_test;

CREATE TABLE t_users (
   userId INT AUTO_INCREMENT,
   useUsername VARCHAR(50) NOT NULL,
   usePassword VARCHAR(50) NOT NULL,
   useRole VARCHAR(50) NOT NULL,
   PRIMARY KEY (userId)
);

INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('eli123', 'g4oC7GKB0HA2u0E', 'admin');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('appleeater', 'qeyYlesGjCDeTvw', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('etest9', 'LY7nzY90cccTpLc', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('darknight', 'QP6CZ_EQ04u8uZG', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('spiderman123', 'D50HsYCOCfODbtN', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('csgoofer', 'XM7WHKAtptFlLgW', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('username123', 'Lno0MJ9ZtIXPrSu', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('betamale2', 'n1GtHexXi7HkGuM', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('evanyeagar', 'ZPKFoJnpX_6FBlD', 'user');
INSERT INTO t_users (useUsername, usePassword, useRole) VALUES ('ethan', 'password', 'user');
