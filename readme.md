#What is QrPass?

QrPass is a demo for the creation and reading of password tokens based on QrCodes. Allows create a QrCode image(png) that you can read whit a qrcode reader, ande get access to events. It's only a demo for the creations of the qrcodes, not including the reader options.

#How it's working?
It's based on the php librery **phpqrcode** whit Copyright (C) 2010-2013 by **Dominik Dzienia** LGPL-3, and use the functions password_hash and password_verify from php to code and decode the password stored in the data base. 
