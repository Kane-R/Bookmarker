-- create dummy data--
-- create 5 names, emails, passwords
-- create URLS (in bookmarks)
-- create 5 tags



INSERT INTO bookmarkr_db.users (name, email, password)
VALUES ("Betty Smith", "betty@betty.com", "betty123"), ("Josh Jones", "josh@josh.com", "josh123"), "josh Jones", "Roz Rooter", "Mitchelle Many", "Kane Pain"), (, "josh@josh.com", "roz@roz.com", "mitchelle@mitchelle", "kane@kane.com"), ("betty123", "josh123", "roz123", "Mitchelle123", "kane123");

INSERT INTO bookmarkr_db.bookmarks (url)
VALUES ("https://google.com"), ("httphttps://xkcd.com/");

INSERT INTO bookmarkr_db.tags (first_name, last_name, role_id, manager_id)
VALUES 
("Anthony", "Bourdain", "001", "001"), ("Gordon", "Ramsay", "002", "001"), ("Jamie", "Oliver", "003", "001"), 
("Alan", "Titschmarsh", "004", "004"), ("Monty", "Don", "005", "004"), ("Charlie", "Albone", "006", "004"),
("Hans-Ulrich", "Obrist", "007", "007"), ("Frida", "Kahlo", "008", "007"), ("Jamie", "McCartney", "009", "007");

-- VALUES ("https://google.com"), ("httphttps://xkcd.com/");