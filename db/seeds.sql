--create dummy data--

INSERT INTO bookmarkr_db.users (name, email, password)
VALUES ("betty"), ("betty@betty.com"), ("betty");

INSERT INTO bookmarkr_db.bookmarks (url)
VALUES ("https://google.com"), ("httphttps://xkcd.com/");

INSERT INTO bookmarkr_db.tags (first_name, last_name, role_id, manager_id)
VALUES 
("Anthony", "Bourdain", "001", "001"), ("Gordon", "Ramsay", "002", "001"), ("Jamie", "Oliver", "003", "001"), 
("Alan", "Titschmarsh", "004", "004"), ("Monty", "Don", "005", "004"), ("Charlie", "Albone", "006", "004"),
("Hans-Ulrich", "Obrist", "007", "007"), ("Frida", "Kahlo", "008", "007"), ("Jamie", "McCartney", "009", "007");