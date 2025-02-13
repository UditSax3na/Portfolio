-- CREATE TABLE portfolio_table(
--     pid INTEGER PRIMARY KEY AUTOINCREMENT,
--     title TEXT NOT NULL,
--     desc TEXT NOT NULL,
--     pp TEXT NOT NULL,
--     basedon TEXT NOT NULL,
--     avail TEXT 
-- );
-- CREATE TABLE adminTable(
--     name TEXT PRIMARY KEY,
--     password TEXT NOT NULL
-- );

INSERT INTO portfolio_table(title,desc,pp,basedon,avail) VALUES ('portfolio','Description of the project', '/projectpreview.png','["css","js","html"]',NULL);
INSERT INTO portfolio_table(title,desc,pp,basedon,avail) VALUES ('chess duel','Description of the project', '/projectpreview.png','["java", "swing"]',NULL);
INSERT INTO portfolio_table(title,desc,pp,basedon,avail) VALUES ('webdeve','Description of the project', '/projectpreview.png','["python","flask","django"]',NULL);


-- INSERT INTO adminTable(name, password)VALUES('admin', 'portfolio_udit_018');
