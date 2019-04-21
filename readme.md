#What is QrPass?

QrPass is a demo for the creation and reading of password tokens based on QrCodes. Allows create a QrCode image(png) that you can read whit a qrcode reader, ande get access to events. It's only a demo for the creations of the qrcodes, not including the reader options.

#How it's working?
It's based on the php librery **phpqrcode** whit Copyright (C) 2010-2013 by **Dominik Dzienia** LGPL-3, and use the functions **password_hash** and **password_verify** from php to code and decode the password stored in the data base. The font-end is coded with **Angular 7**, the back-end is coded with **PHP**, and the database was made using **Mysql**. I'm using material desing just for get better look fast, you can have more information about this here https://material.io/ .

#Database

It's only have a table witch is used to store the keys and compare in the moment of the log in. The table is created whit the following command:

```
create table passwords (
id int auto_increment,
email varchar(100) not null,
pass varchar(40) unique not null,
fechaini timestamp default current_timestamp,
fecha timestamp null,
primary key (id));
```

The column feche is also update when a successfull log in is made, but is not used for nothing else for now.

#Author

The author of this code is Antonio Gutiérrez Ojeda, and the code is distributed as a open source under GPLv3, so you are free to redistribute or modify under GPLv3, just please add a link to the original project.
You can contact me to the email: antdcs@gmail.com

Link to phpqrcode: http://phpqrcode.sourceforge.net/docs/html/index.html.
Link to angular: https://angular.io/

