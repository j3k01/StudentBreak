CREATE TABLE Journeys (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Description NVARCHAR(150), 
    Country NVARCHAR(50),
    Price NVARCHAR(50),
    Date DATETIME, 
    Category NVARCHAR(50)   
);
