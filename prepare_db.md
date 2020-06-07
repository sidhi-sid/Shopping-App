#Preparing the database


mysql -u root -p;
 create database shopdb;
 create user shopper identified by 'shoppass';
 use shopdb;
 grant all privileges on shopdb to shopper;
 grant all privileges on shopdb.* to shopper;