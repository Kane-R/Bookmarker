INSERT INTO bookmarkr_db.users (name, email, password)
VALUES ("Betty Batty", "betty@betty.com", "betty123"), ("Josh Jones", "josh@josh.com", "josh123"), ("Roz Rooter", "roz@roz.com", "roz123"), ("Mitchelle Partayz", "mitchelle@mitchelle", "mitchelle123"), ("Kane Thepain", "kane@kane.com", "kane123"); 

INSERT INTO bookmarkr_db.bookmarks (url, user_id)
VALUES ("https://betty.com", 1), ("https://josh.com", 2), ("https://roz.com", 2), ("https://mitchelle.com", 4), ("https://kane.com", 5);

INSERT INTO bookmarkr_db.tags (name)
VALUES ("tag1"), ("tag2"), ("tag3"), ("tag4"), ("tag5");