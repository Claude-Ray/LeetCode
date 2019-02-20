# select distinct p1.Email from Person as p1, Person as p2 where p1.Email = p2.Email and p1.Id != p2.Id

select Email from Person group by Email having count(Email) > 1
