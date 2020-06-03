
-- CREATE DATABASE bookmarkr_db;

-- USE bookmarkr_db;

-- CREATE TABLE users
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     password VARCHAR(255),
--     oauthToken VARCHAR(255),
--     createdAt TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE bookmarks
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     url VARCHAR(255) NOT NULL,
--     CONSTRAINT FK_user_id FOREIGN KEY (user_id)
--         REFERENCES users (id),
--     click_count INT NULL,
--     createdAt TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE tags
-- (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     createdAt TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE bookmark_tag
-- (
--     CONSTRAINT FK_tag_id FOREIGN KEY (tag_id)
--         REFERENCES tags (id),
--     CONSTRAINT FK_bookmark_id FOREIGN KEY (bookmark_id)
--         REFERENCES bookmarks (id),
--     createdAt TIMESTAMP NOT NULL
-- );
