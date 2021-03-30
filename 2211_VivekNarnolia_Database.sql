
show databases;
show tables;
use 2211_viveknarnolia_cdac_project;
SELECT * FROM users;
describe users;
truncate table users;
insert into admins values (3,"Vivek","Narnolia","9647996","b","1992-03-28","M","Raniganj","West Bengal","b");

#------------------------------------------------
describe admins;
insert into admins values (1,"Vivek","Narnolia","9647996619","vivekmnarnolia@gmail.com","1992-03-28","M","Raniganj","West Bengal","vivek@admin");
insert into admins values (2,"Ayush","JhunJhunwala","9547529538","ayushjjwala@gmail.com","1992-10-10","M","Raniganj","West Bengal","ayush@admin");
SELECT * FROM admins;

#-------------------------------------------------

SELECT * FROM products;
describe products;
truncate table products;

insert into products values (1,"Groot","Car Accessories","35000",'Groot.jpg',"8 GB RAM | 1 TB Storage ");
insert into products values (2,"Sunglass","Fashion","1050",'sunglass.jpg',"Lens Color Black, Glass ");
insert into products values (3,"Sunglass","Fashion","1550",'sunglass2.jpg',"Lens Color Black, Glass ");
insert into products values (4,"Iron Man","Car Accessories ","500",'ironman.jpg',"Iron Man");
insert into products values (5,"Captain America","Car Accessories ","500",'captain.jpg',"Captain America");
insert into products values (6,"Earphone","Electronic","900",'earphone1.jpg',"Colour Black");
insert into products values (7,"Earphone","Electronic","900",'earphone2.jpg',"Colour Blue");
insert into products values (8,"Speaker","Electronic","1550",'speaker.jpg',"Colour Blue");
insert into products values (9,"Fridge","Home","25000",'fridge.jpeg',"Colour Blue");
insert into products values (10,"Washing Machine","Home","15000",'washingmachine.jpeg',"Colour Grey");
insert into products values (11,"Dinner Set","Kitchen","750",'dinner1.jpg',"Colour: Pink");
insert into products values (12,"Mobile Cover","Mobile Accessories","150",'Goofy.jpg',"Colour: Blue");
insert into products values (13,"Dinner Set","Kitchen","750",'dinner2.jpg',"Colour: Blue");
insert into products values (14,"Mobile Cover","Mobile Accessories","750",'Donald.jpg',"Colour: Pink");

create table pro select * from products;


insert into products values (10,"POCO M2 Pro","Mobiles","15000",'G:\CDAC\Web Programing Technologies\ProjectCDAC\Images',"4 GB RAM | 64 GB ROM ");
delete from products where productid =3;





insert into products values (1,"Dell","Electronic","35000",'G:\CDAC\Web Programing Technologies\ProjectCDAC\laptop.jpeg',"8 GB RAM | 1 TB Storage ");
insert into products values (2,"Sunglass","Fashion","1050",'G:\CDAC\Web Programing Technologies\ProjectCDAC\sunglass.jpg',"Lens Color Black, Glass ");
insert into products values (3,"Sunglass","Fashion","1550",'G:\CDAC\Web Programing Technologies\ProjectCDAC\sunglass2.jpg',"Lens Color Black, Glass ");
insert into products values (4,"Iron Man","Car Accessories ","500",'G:\CDAC\Web Programing Technologies\ProjectCDAC\ironman.jpg',"Iron Man");
insert into products values (5,"Captain America","Car Accessories ","500",'G:\CDAC\Web Programing Technologies\ProjectCDAC\captain.jpg',"Captain America");
insert into products values (6,"Earphone","Electronic","900",'G:\CDAC\Web Programing Technologies\ProjectCDAC\earphone1.jpg',"Colour Black");
insert into products values (7,"Earphone","Electronic","900",'G:\CDAC\Web Programing Technologies\ProjectCDAC\earphone2.jpg',"Colour Blue");
insert into products values (8,"Speaker","Electronic","1550",'G:\CDAC\Web Programing Technologies\ProjectCDAC\speaker.jpg',"Colour Blue");
insert into products values (9,"Fridge","Home","25000",'G:\CDAC\Web Programing Technologies\ProjectCDAC\fridge.jpeg',"Colour Blue");
insert into products values (10,"Washing Machine","Home","15000",'G:\CDAC\Web Programing Technologies\ProjectCDAC\washingmachine.jpeg',"Colour Grey");


#---------------------------------------------
create table cart(
cartid int,
userid int,
productid int,
primary key(cartid),
foreign key (userid) references users(userid),
foreign key (productid) references products(productid)
on delete set null
  on update cascade 
); 
SELECT * FROM cart;
describe cart;
truncate table cart;
insert into cart values();
drop table cart;
#------------------------------------------
create table orders(
orderid int,
userid int,
orderdate date default now(),
deliverydate date, 
productid int,
quantity int default '0',
totalamount double(5,2) default '0.00',
primary key(orderid),
foreign key (userid) references users(userid),
foreign key (productid) references products(productid)
on delete set null
  on update cascade 
); 
SELECT * FROM orders;
describe orders;
truncate table orders;
insert into orders values();

---------------------------------------

create table payments(
paymentid int,
orderid int,
paymentmode ENUM('Credit/Debit Card','Paypal','COD') NOT NULL,
amount double(5,2) default '0.00',
primary key(paymentid),
foreign key (orderid) references orders(orderid)
on delete set null
  on update cascade 
); 
SELECT * FROM payments;
describe payments;
truncate table payments;
insert into payments values();
drop table payments;