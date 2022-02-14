INSERT INTO Persons
(UserName, UserPassword, UserEmail, CreatedOn, IsDeleted)
VALUES('admin', 'admin', 'admin@gmail.com', GETDATE(), 0);


INSERT INTO Services
(Name, Description, CreatedById)
VALUES('Teste', 'Teste', 1);


INSERT INTO Posts
(Description, CreatedOn, CreatedById)
VALUES('Teste', GETDATE(), 1);
